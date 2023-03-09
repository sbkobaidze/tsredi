import React from "react"
import NewsletterAnimation from "../../Animations/icons8-subscribe.json"
import Lottie from "lottie-react"
import { firestore } from "../../../utils/firebase"
import { addDoc, collection } from "@firebase/firestore"
import { Card, Input, Button } from "@geist-ui/core"
import { useState } from "react"
import { toast } from "react-toastify"

const NewsLetterCard = ({ newsletterData }) => {
  const data = collection(firestore, "users")

  const [inputMsg, updateMsg] = useState("")
  const [loading, isLoading] = useState(false)
  const [lottiePlay, startPlaying] = useState(false)
  const inputState = e => {
    updateMsg(e.target.value)
  }

  //send data to firebase
  const sendMsgToDB = async e => {
    if (inputMsg.length < 4 || !inputMsg.includes("@")) {
      return toast("Wrong email")
    }
    startPlaying(true)

    try {
      isLoading(true)
      await addDoc(data, { date: inputMsg })
      startPlaying(false)

      isLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Card width={"90%"}>
        <div className="flex">
          {/* <h2 className="text-xl mt-2 mr-1">{newsletterData.header.text}</h2> */}
          <Lottie
            animationData={NewsletterAnimation}
            loop={lottiePlay}
            style={{ width: "50px", height: "50px" }}
            controls={true}
          ></Lottie>
        </div>
        <form className="input flex flex-col">
          <Input
            // placeholder={newsletterData.placeholder.text}
            scale={4 / 3}
            width="100%"
            value={inputMsg}
            style={{ margin: "0 10px" }}
            onChange={e => inputState(e)}
          ></Input>
          <Button
            onClick={sendMsgToDB}
            loading={loading}
            style={{
              margin: "10px 0",
              backgroundColor: "#Fbb034",
              color: "white",
            }}
          >
            {/* {newsletterData.button.text} */}
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default NewsLetterCard
