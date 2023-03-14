import React from "react"
import {Link} from 'gatsby'

const Copyright = () => {
  return (
    <div className="w-full h-9 flex justify-center items-center font-main dark:bg-black text-white border-t-2 border-white max-[640px]:h-16">
      <div className="font-semibold flex pb-2 ">
        <Link to="https://tsredi.com">©2023 Tsredi. All rights reserved</Link>
      </div>
    </div>
  )
}

export default Copyright
