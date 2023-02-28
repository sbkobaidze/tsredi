import React from "react"
import { Link } from "gatsby-plugin-react-i18next"

const Copyright = () => {
  return (
    <div className="w-80% h-9 flex justify-center items-center font-main dark:bg-black text-white border-t-2 border-white max-[640px]:h-16">
      <div className="font-semibold flex pb-2 ">
        <Link to="https://tsredi.com">2023</Link>
      </div>
    </div>
  )
}

export default Copyright
