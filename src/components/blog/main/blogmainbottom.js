import React from "react"

const BlogBottom = () => {
  return (
    <div className="dark:bg-black relative w-full h-[10vh]">
      <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#d9d9d9"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="card"></div>
    </div>
  )
}

export default BlogBottom
