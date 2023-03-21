export const scrollToDiv = path => {
  if (path !== "blog") {
    setTimeout(() => {
      if (window !== "undefined") {
        let scroll = document.getElementById(`${path}`).offsetTop
        window.scrollTo({ top: scroll, behavior: "smooth" })
      }
    }, 100)
  }
}
