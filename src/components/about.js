import React from "react"

function About() {
    return(
  <div class="section-about ">
    <div class="about-page-content relative flex flex-col items-start">
      <div class="h-screen w-screen absolute bg-cover bg-fixed brightness-50	">
          <div class="bg-video sticky block flex-grow flex-shrink h-screen ">
              <video class ="object-fill w-full bg-cover absolute mx-auto my-auto w-full h-full object-cover z-100 -inset-full" id="background-video" autoPlay loop playsInline muted>
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/mp4" />
                  <source src="https://d3q7itx8i8trj7.cloudfront.net" type="video/ogg" />
              </video>     
          </div>
      </div>
      <div class="lushsux-teaser-wrapper inline flex flex-col justify-end items-center self-stretch flex-grow flex-shrink pt-64 sm:pt-64 lg:pr-96 lg:pt-96">
        <div class="header-desc pl-10 pt-64  static w-screen sm:block sm:w-4/5 sm:z-1 text-white font-mono">
          <p class="bold w-4/5 text-2xl sm:text-4xl leading-9 sm:leading-9 relative font-medium">13+ countries, 120+ attributes, 10000 slavs. Collect &amp; hold your part of internet's first slav collection. </p>
        </div>

      

      



      </div>
    </div>
  </div>
);
}

export default About