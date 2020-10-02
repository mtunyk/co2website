from datetime import date, timedelta
import pandas as pd
import requests
from pathlib import Path #requires Python>=3.5
import os, sys
#from pybadges import badge
from urllib.parse import quote

SUBPATH = 'd'

ROUND_FLOAT = 1
ROUND_PERCENT = 1

# safe generate folders for all dates within a range
def create_folder(p):
	Path(p).mkdir(parents=True, exist_ok=True)
	Path(p+os.sep+'index.html').touch()

def write_data(p, d, html, birth_value, latest, svg):
	
	# {{birthdate}}
	birthdate = '-'.join((str(d.year).zfill(4),str(d.month).zfill(2), str(d.day).zfill(2)))
	html = html.replace('{{birthdate}}',birthdate)

	# {{birthdate_url}}
	birthdate_url = '/'.join((str(d.year).zfill(4),str(d.month).zfill(2), str(d.day).zfill(2)))
	birthdate_url = 'https://co2birth.date/d/'+birthdate_url+'/index.html'
	html = html.replace('{{birthdate_url}}',birthdate_url)

	# {{birthdate_image_url}}
	# i'm sure there is a better way to do this. my bad. basically copying birthdate_url almost entirely...
	birthdate_img_url = '/'.join((str(d.year).zfill(4),str(d.month).zfill(2), str(d.day).zfill(2)))
	birthdate_img_url = 'https://co2birth.date/d/'+birthdate_img_url+'/shield.svg'
	html = html.replace('{{birthdate_img_url}}',birthdate_img_url)

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

	# social share links
	"""<li><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fco2birth.date%2Fd%2F1900%2F01%2F01%2Findex.html">Share on Facebook</a></li>
<li><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fco2birth.date%2Fd%2F1900%2F01%2F01%2Findex.html">Share on Twitter</a></li>
<li><a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fco2birth.date%2Fd%2F1900%2F01%2F01%2Findex.html">Share on LinkedIn</a></li>"""
	birthdate_url_encoded = quote(birthdate_url, safe='')
	html = html.replace('{{birthdateurlencoded}}',str(birthdate_url_encoded))

	with open(p+os.sep+'index.html', 'w') as fp:
		fp.write(html)

	create_shield(p, birth_value, percent_change, current_value, svg)

def create_shield(p, bv, pc, cv, svg):

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

	with open('template.svg','r') as fp:
		svg_template = fp.read()

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
		write_data(path, d, html_template, value, latest, svg_template)
		#break # debugging

if __name__ == "__main__":
	main()