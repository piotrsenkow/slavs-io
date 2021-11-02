import React from "react"

function About() {
    return(
  <div class="section-about ">
    <div class="about-page-content relative flex flex-col items-start">
      <div class="h-screen w-screen absolute bg-cover bg-fixed brightness-50">
          <div class="bg-video block flex-grow flex-shrink h-screen">
              <video class ="object-fill w-full bg-cover absolute mx-auto my-auto w-screen h-screen object-cover z-100 -inset-full" id="background-video" autoPlay loop playsInline muted>
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/mp4" />
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/ogg" />
              </video>     
          </div>
      </div>
      <div class="text-white relative w-screen flex items-center justify-center pr-4">
        <div class="grid grid-cols-1 gap-y-10">
          <div class="pt-32 sm:pt-20">
            <p class="bold pl-4 text-3xl leading-9 font-bold sm:text-4xl sm:w-3/5 md:w-2/5 ">13+ Countries, 120+ Attributes, 10000 Slavs. Collect &amp; hold your part of the first Slav Squat collection on Solana this December! </p>
          </div>
          <div class="teaser-stats text-white flex p-4">
            <div class="box pr-3 border-r-2">
              <div class="feature ext-black mb-0.5 text-xl font-medium">10,000</div>
              <p class="sub font-thin">slavs</p>
            </div>
            <div class="box pr-3 pl-3 border-r-2">
              <div class="feature ext-black mb-0.5 text-xl font-medium">DEC 2021</div>
              <p class="sub font-thin">launch</p>
            </div>
            <div class="box-last pl-3">
              <div class="feature ext-black mb-0.5 text-xl font-medium">TBD</div>
              <p class="sub font-thin">price</p>
            </div>
          </div>
        </div>
      </div>
      {/* block flex-col justify-end items-center self-stretch flex-grow flex-shrink space-y-64  */}
      {/* <div class="lushsux-teaser-wrapper items-center justify-center sm:pt-64 lg:pr-96 lg:pt-96">
        <div class="header-desc static w-screen text-white font-mono sm:block sm:w-4/5 sm:z-1">
          <p class="bold absolute pl-4 text-3xl leading-9 font-medium sm:text-4xl sm:leading-9">13+ Countries, 120+ Attributes, 10000 Slavs. Collect &amp; hold your part of the internet's first Slav Squat collection. </p>
        </div>
        <div class="teaser-stats-list static w-screen pt-5">
          <div class="teaser-stats absolute text-white flex pl-4">
            <div class="box pr-5 border-r-2">
              <div class="feature ext-black mb-1.5 text-3xl">10,000</div>
              <p class="sub bold">slavs</p>
            </div>
            <div class="box pr-5 pl-5 border-r-2">
              <div class="feature ext-black mb-1.5 text-3xl">DEC 2021</div>
              <p class="sub bold">launch</p>
            </div>
            <div class="box-last pl-5">
              <div class="feature ext-black mb-1.5 text-3xl">TBD</div>
              <p class="sub bold">price</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
);
}

export default About