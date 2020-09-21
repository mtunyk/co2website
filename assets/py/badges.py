from pybadges import badge
s = badge(left_text="born {{birthvalue}} ppm CO₂",
	right_text="today we are {{percentchange}}% higher",
	left_color='green',
	right_color='red',
	left_link='https:/co2birth.date',
	right_link='https://co2birth.date',
	logo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACGVBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////tLsMbAAAAsnRSTlMAUeCdeaaEAwFAqw7SfyaLK3tHBJabilsjxgK7vznZmnTDCKgLkudmKsBhLErmFZkNs4GDJQ8SrBQcMbW3N5O+IJxwBlqifeHW2HWyYMtuaqPc6xNFuOgyPIJo+Kr6p7G22s1lzBGg4k1BDHOpS+UWCelSRjZE043F/ULBoXc+CmQH1XH8nzU03oZVY21OkVcnvIh8pOx6IS8QWEjyOG/H72yMjxjj0eSlQ7DtWd0z14nuHXg4kAAAAcpJREFUOMvVkcVyG1EQRY9wRsxkgcWWmZmZmcLMzJw4YAgzMzN/YRYjy0lF3qYqvXr33vO6urrhH1fREllerrBo3KRaq7U3Z28u2ZY+PxXaKgJUObtz0+XXvUXzz4Ny8995hu/egtgf0Alm85/DPMz8Xal98lptV868dJeM94/09zQtAGH5Pig4ckFqrt5renT/Sd/tx5EHKSJLBVTFZQANjQWSWXG3OgUIuwGyvghgPRtddDPhH2PgsQLQKrO0zAJs8hYeSBFD33F3igBlgRtOx3AZuuLsLS35l1KjjHN6BkDQuyRntQEw3nEnAc03rp4DsK6RjJp1IsDLV0lgMk7lNYCOoGSsN0kfu5PA1wnqrgAsXSYZbQ4AEiOj7e9fA5phei8CyNoloDp/I0CbZzIYswOfQyguA9g821sBKN2gOSNo3rkg2Ax0KOiRjlReGD9e3FgPOfqj0xMD+L1vEsDHQfznRan7VH3esTDAnnIR3nbVAMKnBBmdY+mWHH3xTB7lQwAY0Bt1aQ9hg4gSsNWt/Ll816FQbUTRYFIbLEql0mJQO2MOVa/v+SgAYoXRv9M1eLL0sF0xtGpFpXaH6kRm7Oatp31z/B/1Cw+QUMapd1LCAAAAAElFTkSuQmCC',
	)
# s is a string that contains the badge data as an svg image.
print(s) # => <svg height="20" width="191.0" xmlns="ht

'''
        <svg id="svg-shield" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="427" height="20" role="img" aria-label="born {{birthvalue}} ppm CO₂: today we are {{percentchange}}% higher">
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
                <text aria-hidden="true" x="635" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1150">born {{birthvalue}} ppm CO₂</text>
                <text x="635" y="140" transform="scale(.1)" fill="#fff" textLength="1150">born {{birthvalue}} ppm CO₂</text>
                <text aria-hidden="true" x="1995" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1410">today we are {{percentchange}}% higher</text>
                <text x="1995" y="140" transform="scale(.1)" fill="#fff" textLength="1410">today we are {{percentchange}}% higher</text>
                <text aria-hidden="true" x="3490" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1440">value today: {{currentvalue}} ppm CO₂</text>
                <text x="3490" y="140" transform="scale(.1)" fill="#fff" textLength="1440">value today: {{currentvalue}} ppm CO₂</text>
              </g>
          </svg>
'''

'''
    --left-link=\
    --right-link= \
    --logo= \
    --embed-logo \
    --whole-title="Badge Title" \
    --left-title="Left Title" \
    --right-title="Right Title" \
    --browser
'''