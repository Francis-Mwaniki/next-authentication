import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-x-hidden">
      <h4 className="text-2xl font-semibold text-gray-500 font-serif">
        Hi hover me to see the magic
      </h4>
         <div className="card">
  <div
    className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center"
  >
    <div
      className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
    >
      <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
        Thank You
      </p>
      <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
        It’s so nice that you had the time to view this idea
      </p>
      <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
        Wishing you a fantastic day ahead!
      </p>

    </div>
    <button
      className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 transform rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          className="text-rose-900"
          d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 1a6 6 0 110 12 6 6 0 010-12zm-1.5 3a.5.5 0 01.5.5v3.793l2.146-2.147a.5.5 0 01.707.707l-3 3a.498.498 0 01-.708 0l-3-3a.5.5 0 11.707-.707L8 8.293V4.5a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div
      className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
    ></div>
    <div
      className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
    ></div>
    <div
      className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
    ></div>
    <div
      className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
    ></div>
  </div>
</div>
      </div>
 

  )
}

export default Dashboard