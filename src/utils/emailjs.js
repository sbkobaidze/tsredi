import emailjs from "@emailjs/browser"

export const sendEmail = e => {
  emailjs
    .sendForm(
      process.env.ACCOUNT_KEY,
      process.env.TEMPLATE_KEY,
      e.target,
      process.env.EMAILJS_API_KEY
    )
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
}
