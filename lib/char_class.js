module.exports = function(str) {
  const re = new RegExp(/^[^(b|A-Z)]/)
  let result = re.exec(str)
  if (!result) return ''
  return result[0]
}
