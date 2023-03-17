import React, { useEffect } from "react"
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin"

const Chatbot = () => {
  useEffect(() => {
    Kommunicate.init("58d1a3c018611c8927e49700b181a4b6")
  })
  return <div></div>
}

export default Chatbot
