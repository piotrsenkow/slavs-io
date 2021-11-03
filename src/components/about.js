import React from "react"

function About() {
    return(
            <div class="w-screen h-screen relative font-mono">
              <video class ="w-screen h-screen object-fill absolute z-0" autoPlay loop playsInline muted>
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/mp4" />
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/ogg" />  
              </video>
              <div class="text-white absolute w-screen flex items-center justify-center px-12 z-10">
              <div class="grid grid-cols-1 gap-y-10">
                <div class="pt-12 sm:pt-20 ">
                  <p class="bold text-2xl leading-9 font-bold tracking-tighter sm:text-4xl sm:w-2/5">13+ Countries, 120+ Attributes, 10000 Squatting Slavs.<br/><br/> Collect &amp; hold your part of the first Slav Squat collection on Solana this December! </p>
                </div>
                <div class="teaser-stats text-white justify-center items-center flex">
                  <div class="box pr-4 border-r-2">
                    <div class="feature ext-black mb-0.5 text-xl font-bold">10,000</div>
                    <p class="sub font-thin">slavs</p>
                  </div>
                  <div class="box pr-4 pl-4 border-r-2">
                    <div class="feature ext-black mb-0.5 text-xl tracking-normal font-bold">DECEMBER</div>
                    <p class="sub font-thin">launch</p>
                  </div>
                  <div class="box-last pl-4">
                    <div class="feature ext-black mb-0.5 text-xl font-bold">TBD</div>
                    <p class="sub font-thin">price</p>
                  </div>
                </div>
              </div>
            </div>   
          </div>
);
}

export default About