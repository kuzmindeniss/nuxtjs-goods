const numberToString = (n) => {
  let str = String(n)
  if (str.length <= 3) { return str }
  const arr = str.split('').reverse()
  const insertedI = 0
  const length = str.length
  for (let i = 0; i < length + (length / 3); i++) {
    const newI = (i + insertedI)
    if (!(newI % 4)) { arr.splice(newI, 0, ' ') }
  }
  str = arr.reverse().join('')
  return str.trim()
}

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('numberToString', numberToString)
}
