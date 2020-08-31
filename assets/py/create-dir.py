import os

range_years = range(1900, 2021, 1)
# range_months = range(1, 13, 1)

range_months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

range_days_a = range(1, 32, 1)
range_days_b = range(1, 31, 1)
range_days_c = range(1, 29, 1)
range_days_c = range(1, 30, 1)

leap_years = ['1804', '1808', '1812', '1816', '1820', '1824', '1828', '1832', '1836', '1840', '1844', '1848', '1852', '1856', '1860', '1864', '1868', '1872', '1876', '1880', '1884', '1888', '1892', '1896', '1904', '1908', '1912', '1916', '1920', '1924', '1928', '1932', '1936', '1940', '1944', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1996', '2000	2004', '2008', '2012', '2016', '2020', '2024', '2028', '2032', '2036', '2040', '2044', '2048', '2052', '2056', '2060', '2064', '2068', '2072', '2076', '2080', '2084', '2088', '2092', '2096	2104', '2108', '2112', '2116', '2120', '2124', '2128', '2132', '2136', '2140', '2144', '2148', '2152', '2156', '2160', '2164', '2168', '2172', '2176', '2180', '2184', '2188', '2192', '2196	2204', '2208', '2212', '2216', '2220', '2224', '2228', '2232', '2236', '2240', '2244', '2248', '2252', '2256', '2260', '2264', '2268', '2272', '2276', '2280', '2284', '2288', '2292', '2296	2304', '2308', '2312', '2316', '2320', '2324', '2328', '2332', '2336', '2340', '2344', '2348', '2352', '2356', '2360', '2364', '2368', '2372', '2376', '2380', '2384', '2388', '2392', '2396', '2400']

def createFolder(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
    except OSError:
        print ('Error: Creating directory. ' +  directory)
        


# createFolder('./data/')
# Creates a folder in the current directory called data


for year in range_years:
	year = str(year)
	print("Year: ", type(year))
	createFolder(year)
	print("Folder Created for Year: ", year)

for year in range_years:
	year = str(year)
	print("Year: ", type(year))
	for month in range_months:
		# month = str(month)
		# print("Month: ", type(month))
		if(month < 10):
			month = '0'+str(month)
		print("Month: ", month)
		month_dir = year+'/'+str(month)
		print("Month Dir: ", month_dir)
		createFolder(month_dir)


for year in range_years:
	year = str(year)
	print("Year: ", type(year))
	for month in range_months:
		if(month < 10):
			month_dir = '0'+str(month)
		month_dir = str(month)
		month = int(month)
		if(month == 01):
			print("Month = 01; JANUARY!!")
			for day in range_days_a:
				if(day < 10):
					day = '0'+str(day)
				day = str(day)
				print("DAY: ", day)
				day_dir = year+'/'+month_dir+'/'+day
				print("day directory: ", day_dir)
				createFolder(day_dir)
				print("day directory created!: ", day_dir)


# have to work in leap years.
# using gnu is probably much more ideal here...