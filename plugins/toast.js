const toast = (options) => {
  const divWrapper = document.createElement('div')
  divWrapper.className = 'toast ' + 'toast--' + options.type
  const toastHeader = document.createElement('div')
  toastHeader.className = 'toast__header'
  toastHeader.innerHTML = options.header
  divWrapper.append(toastHeader)
  const toastBody = document.createElement('div')
  toastBody.innerHTML = options.text
  toastBody.className = 'toast__body'
  divWrapper.appendChild(toastBody)
  document.body.appendChild(divWrapper)
  setTimeout(() => {
    divWrapper.style.opacity = 1
  }, 0)
  setTimeout(() => {
    divWrapper.style.opacity = 0
  }, 3000)
  setTimeout(() => {
    divWrapper.remove()
  }, 4000)
}

export default ({ app }, inject) => {
  inject('toast', toast)
}
