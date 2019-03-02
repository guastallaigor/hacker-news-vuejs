export default function textSubstr (value, qtd = 33, mask = '...') {
  if (!value) return ''

  return value.length > qtd
    ? `${value.substring(0, qtd)}${mask}`
    : value
}
