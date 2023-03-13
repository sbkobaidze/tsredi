import React, { useEffect } from "react"
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin"

Kommunicate.init("58d1a3c018611c8927e49700b181a4b6")

const Chatbot = () => {
  useEffect(() => {
    ;(function (d, m) {
      var kommunicateSettings = {
        appId: "58d1a3c018611c8927e49700b181a4b6",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      }
      var s = document.createElement("script")
      s.type = "text/javascript"
      s.async = true
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app"
      var h = document.getElementsByTagName("head")[0]
      h.appendChild(s)
      window.kommunicate = m
      m._globals = kommunicateSettings
    })(document, window.kommunicate || {})
  })
  return <div></div>
}

export default Chatbot
