import React from 'react'
import logo from '../../../../assets/icon.png'
function Home() {
  return (
    <div className="flex h-full justify-center items-center bg-white">
      <div className="flex flex-col">
        <img src={logo}></img>
        <p className="pb-2 pt-2 mt-2 mb-2 text-center bg-sky-400 text-white">Epub电子书阅读器</p>
        <a href="https://github.com/lifan1727/vector" target="_blank"
           className="bg-sky-400 text-white p-2 text-center">Github</a>
      </div>
    </div>
  )
}

export default Home;
