import React from "react"

function About() {
    return(
  <div class="section-about ">
    <div class="about-page-content relative flex flex-col items-start -mt-1 pt-1">
      <div class="bg-fixed h-full w-full absolute bg-cover bg-fixed brightness-50	">
          <div class="bg-video sticky block flex-grow flex-shrink h-screen ">
              <video class ="object-fill w-full bg-cover absolute mx-auto my-auto w-full h-full object-cover z-100 -inset-full" id="background-video" autoPlay loop playsInline muted>
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/mp4" />
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/ogg" />
              </video>     
          </div>
      </div>
      <div class="lushsux-teaser-wrapper flex flex-col justify-end items-center self-stretch flex-grow flex-shrink pr-96 pt-96">
        {/* <div class="header-intro sticky flex flex-col w-3/5 bottom-2/4 max-w-screen-lg">
          <p class="ext-bold m-5 text-3xl leading-4 font-sans text-white">Join @solanaslavs exclusive collector's circle.</p>
          <div class="sub-header flex flex-start flex-wrap align-stretch pb-64">
            <div class="text-ancor ext-bold mr-1 p-2.5 text-xl text-green-500	">members only discord</div>
            <div class="text-ancor ext-bold mr-1 p-2.5 text-xl text-green-500">exclusive physical artwork</div>
            <div class="text-ancor ext-bold mr-1 p-2.5 text-xl text-green-500">exclusive drops</div>
            <div class="text-ancor ext-bold mr-1 p-2.5 text-xl text-green-500">members only online store</div>
          </div>
        </div> */}
        <div class="header-desc block w-2/5 z-1 text-white sticky font-mono pr-30 pb-56">
          <p class="bold text-4xl leading-9 font-medium">13 countries, 120+ attributes, 10000 slavs. Collect &amp; hold your part of internet's first squatting slav collection. Get exclusive access to community, artwork, and @solanaslavs future projects.</p>
        </div>
        <div class="teaser-stats-list w-2/5 sticky text-white flex mt-8 relative mb-8 font-mono">
          <div class="teaser-stats m-10 flex flex-start">
            <div class="box pr-10 pl-5 border-r-2">
              <div class="feature ext-black mb-1.5 text-3xl">10,000</div>
              <p class="sub bold">slavs</p>
            </div>
            <div class="box pr-10 pl-5 border-r-2">
              <div class="feature ext-black mb-1.5 text-3xl">DEC 11</div>
              <p class="sub bold">launch</p>
            </div>
            <div class="box pr-10 pl-5">
              <div class="feature ext-black mb-1.5 text-3xl">0.5 SOL</div>
              <p class="sub bold">price</p>
            </div>
          </div>
          {/* <div class="apply-and-claim">
            <p class="bold">Public Sale Coming Soon!</p>
            <div class="claim-box">
              <p class="message">Sold out, please buy from <a href="#" target="_blank">OpenSea</a></p>
              <div class="wrap-claim"><button class="btn-claim text-uppercase font-medium">Coming Soon!<br/> 0 / 10000</button></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);
}

export default About