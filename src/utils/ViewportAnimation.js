import React, { useEffect } from "react"

export const ViewportAnimation = () => {
  return useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hid")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      })
    })

    hiddenElements.forEach(el => observer.observe(el))
  })
}
