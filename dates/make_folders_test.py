

from datetime import date, timedelta
import pandas as pd
import os
from pathlib import Path

# generate folders for all 
# based on https://stackoverflow.com/a/59882807/2327328
# requires python >= 3.5

subpath = 'tmpxx'

def main():

	# initialize sub-folder
	if subpath is not None and len(subpath) > 0:
		create_folder(subpath)

	sdate = date(1900,1,1)   # start date
	edate = date.today() # end date

	df = pd.date_range(sdate,edate-timedelta(days=1),freq='d')
	print(df)

	for d in df:
		print(d.year, d.month, d.day)
		path = subpath + os.sep + str(d.year).zfill(4) + os.sep + str(d.month).zfill(2) + os.sep + str(d.day).zfill(2)
		create_folder(path)
		create_file(path)
		#break # debugging

def create_folder(path):

	Path(path).mkdir(parents=True, exist_ok=True)
	return

def create_file(path):

	print("PATH: ", path)
	new_file = path+'/readme.md'
	open(new_file, 'a').close()

if __name__ == "__main__":
	main()