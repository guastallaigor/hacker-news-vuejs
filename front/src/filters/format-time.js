export default function formatTime (value) {
  const calc = Date.now() / 1000 - Number(value)
  let divider = 0
  let minuteHourDay = ''

  switch (calc) {
    case calc < 3600:
      divider = 60
      minuteHourDay = 'minute'
      break
    case calc < 86400:
      divider = 3600
      minuteHourDay = 'hour'
      break
    default:
      divider = 86400
      minuteHourDay = 'day'
      break
  }

  const time = Math.floor(calc / divider)
  minuteHourDay = time === 1
    ? `${time} ${minuteHourDay}`
    : `${time} ${minuteHourDay}s`

  return `${minuteHourDay} ago`
}
