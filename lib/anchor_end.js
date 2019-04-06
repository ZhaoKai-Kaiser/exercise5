module.exports = function(str) {
  const re = new RegExp(/(.)*BANANAS$/)
  let result = re.exec(str)
  if (!result) return ''
  return result[0]
}
