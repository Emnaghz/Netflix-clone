import React from 'react'
import "../styles/Banner.css"

function Banner() {

    function trancate(string, n) {
        return string.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://fdn.gsmarena.com/imgroot/news/20/10/netflix-india-free-weekend/-1200/gsmarena_001.jpg")`,
        backgroundPosition: "center center",
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                Movie name
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
                {trancate(`description lorem`, 150)}
            </h1>
        </div>
        <div className='banner_fadeBottom'/>
    </header>
  )
}

export default Banner
