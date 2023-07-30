type EmailOptions = {
  from: string
  name: string
  subject: string
  message: string
}

export function sendEmail(options: EmailOptions) {
  function getMessage(): string {
    return `Hi from ${options.name}(${options.from})!\r\n\r\n${options.message}`
  }

  window.location.href = `mailto:karadumanbaturay@gmail.com?subject=${
    options.subject
  }&body=${encodeURIComponent(getMessage())}`
}
