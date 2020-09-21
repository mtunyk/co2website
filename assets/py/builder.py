from datetime import date, timedelta
import pandas as pd
import requests
from pathlib import Path #requires Python>=3.5
import os, sys
#from pybadges import badge

SUBPATH = 'd'

ROUND_FLOAT = 1
ROUND_PERCENT = 1

# safe generate folders for all dates within a range
def create_folder(p):
	Path(p).mkdir(parents=True, exist_ok=True)
	Path(p+os.sep+'index.html').touch()

def write_data(p, d, html, birth_value, latest):
	
	# {{birthdate}}
	birthdate = '-'.join((str(d.year).zfill(4),str(d.month).zfill(2), str(d.day).zfill(2)))
	html = html.replace('{{birthdate}}',birthdate)

	# {{birthdate_url}}
	birthdate_url = '/'.join((str(d.year).zfill(4),str(d.month).zfill(2), str(d.day).zfill(2)))
	birthdate_url = 'https://co2birth.date/d/'+birthdate_url+'/index.html'
	html = html.replace('{{birthdate_url}}',birthdate_url)

	# {{birthvalue}}
	birth_value = round(birth_value,ROUND_FLOAT)
	html = html.replace('{{birthvalue}}',str(birth_value))

	# {{currentvalue}}
	current_value = list(latest.values())[0]
	current_value = round(current_value,ROUND_FLOAT)
	html = html.replace('{{currentvalue}}',str(current_value))

	# {{percentchange}}
	percent_change = 100.0 * (current_value - birth_value) / birth_value
	percent_change = round(percent_change,ROUND_PERCENT)
	prefix = ''
	if percent_change > 0:
		prefix = '+'

	html = html.replace('{{percentchange}}',prefix+str(percent_change))

	with open(p+os.sep+'index.html', 'w') as fp:
		fp.write(html)

	create_shield(p, birth_value, percent_change, current_value)

def create_shield(p, bv, pc, cv):

	svg = '''<svg id="svg-shield" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="427" height="20" role="img" aria-label="born {{birthvalue}} ppm CO₂: today we are {{percentchange}}% higher">
			  <title>CO₂ birthdate: {{birthvalue}} ppm: today we are {{percentchange}}% higher</title>
			  <linearGradient id="s" x2="0" y2="100%">
				<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
				<stop offset="1" stop-opacity=".1"/>
			  </linearGradient>
			  <clipPath id="r">
				<rect width="427" height="20" rx="3" fill="#fff"/>
			  </clipPath>
			  <g clip-path="url(#r)">
				<rect width="125" height="20" fill="#555"/>
				<rect x="125" width="151" height="20" fill="#97ca00"/>
				<rect x="275" width="151" height="20" fill="#555"/>
				<rect width="427" height="20" fill="url(#s)"/>
			  </g>
			  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
				<text aria-hidden="true" x="635" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1150">Born at {{birthvalue}} ppm CO₂</text>
				<text x="635" y="140" transform="scale(.1)" fill="#fff" textLength="1150">Born at {{birthvalue}} ppm CO₂</text>
				<text aria-hidden="true" x="1995" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1410">We are {{percentchange}}% higher</text>
				<text x="1995" y="140" transform="scale(.1)" fill="#fff" textLength="1410">We are {{percentchange}}% higher</text>
				<text aria-hidden="true" x="3490" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1440">Most recent: {{currentvalue}} ppm CO₂</text>
				<text x="3490" y="140" transform="scale(.1)" fill="#fff" textLength="1440">Most recent: {{currentvalue}} ppm CO₂</text>
			  </g>
		  </svg>
'''

	svg = svg.replace('{{birthvalue}}',str(round(bv,ROUND_FLOAT)))
	svg = svg.replace('{{percentchange}}',str(round(pc,ROUND_PERCENT)))
	svg = svg.replace('{{currentvalue}}',str(round(cv,ROUND_FLOAT)))

	with open(p+os.sep+'shield.svg', 'w') as fp:
		fp.write(svg)

def get_co2():

	co2 = requests.get('https://raw.githubusercontent.com/co2birthdate/dataops/master/output_data/co2.json').json()
	latest = requests.get('https://raw.githubusercontent.com/co2birthdate/dataops/master/output_data/latest.json').json()

	return co2, latest

def main():

	# where to start to put the many folders
	sp = '..' + os.sep + '..' + os.sep + SUBPATH

	co2, latest = get_co2()

	# start and end date
	sdate = date(1900,1,1)   # start date
	edate = list(latest.keys())[0] #date(1951,1,1) #date.today() # end date
	edate = date(int(edate.split('-')[0]), int(edate.split('-')[1]), int(edate.split('-')[2]))

	with open('template.html','r') as fp:
		html_template = fp.read()

	# use pandas for the heavy lifting of building the calendar-aware date range
	df = pd.date_range(sdate,edate-timedelta(days=1),freq='d')

	# loop over all values and create a folder for each possible date
	for d in df:
		#print(d.year, d.month, d.day)
		dict_key = '-'.join((str(d.year).zfill(4), str(d.month).zfill(2), str(d.day).zfill(2)))
		
		path = sp + os.sep + str(d.year).zfill(4) + os.sep + str(d.month).zfill(2) + os.sep + str(d.day).zfill(2)

		# get value on birthdate
		value = co2.get(dict_key)
		#print(value)

		# create empty folder and index.html
		create_folder(path)

		# write template.html as index.html and replace contents
		write_data(path, d, html_template, value, latest)
		#break # debugging

if __name__ == "__main__":
	main()