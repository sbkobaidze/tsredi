import { Stars } from "@react-three/drei"
import React from "react"

function Starbackground() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} />
    </>
  )
}

export default Starbackground
