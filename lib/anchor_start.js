module.exports = function(str) {
  // TOOD
  const re = new RegExp(/^LITERALLY(.)*/)
  let result = re.exec(str)
  if (!result) return ''
  return result[0]
}
