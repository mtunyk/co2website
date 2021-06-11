const Shield = ({ birthvalue, currentvalue, percentchange }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="427"
    height="20"
    role="img"
    aria-label={`born ${birthvalue} ppm CO₂: today we are ${percentchange}% higher`}
  >
    <title>CO₂ birthdate: {birthvalue} ppm: today we are {percentchange}% higher</title>
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stopColor="#bbb" stopOpacity=".1" />
      <stop offset="1" stopOpacity=".1" />
    </linearGradient>
    <clipPath id="r">
      <rect width="427" height="20" rx="3" fill="#fff" />
    </clipPath>
    <g clipPath="url(#r)">
      <rect width="125" height="20" fill="#555" />
      <rect x="125" width="151" height="20" fill="#97ca00" />
      <rect x="275" width="151" height="20" fill="#555" />
      <rect width="427" height="20" fill="url(#s)" />
    </g>
    <g
      fill="#fff"
      textAnchor="middle"
      fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif"
      textRendering="geometricPrecision"
      fontSize="110"
    >
      <text aria-hidden="true" x="635" y="150" fill="#010101" fillOpacity=".3" transform="scale(.1)" textLength="1150">
        Born at {birthvalue?.toFixed(0)} ppm CO₂
      </text>
      <text x="635" y="140" transform="scale(.1)" fill="#fff" textLength="1150">
        Born at {birthvalue?.toFixed(0)} ppm CO₂
      </text>
      <text aria-hidden="true" x="1995" y="150" fill="#010101" fillOpacity=".3" transform="scale(.1)" textLength="1410">
      That's a {percentchange}% change 📈
      </text>
      <text x="1995" y="140" transform="scale(.1)" fill="#fff" textLength="1410">
      That's a {percentchange}% change 📈
      </text>
      <text aria-hidden="true" x="3490" y="150" fill="#010101" fillOpacity=".3" transform="scale(.1)" textLength="1440">
        Most recent: {currentvalue} ppm 🔥
      </text>
      <text x="3490" y="140" transform="scale(.1)" fill="#fff" textLength="1440">
        Most recent: {currentvalue} ppm 🔥
      </text>
    </g>
  </svg>
)

export default Shield
