module.exports = function(str) {
  const re = RegExp(/^[^\d][^(A-Z)]/)
  let result = re.exec(str)
  if (!result) return ''
  return result[0]
}
