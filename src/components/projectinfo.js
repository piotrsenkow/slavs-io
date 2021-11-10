import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Projectinfo() {
    return(
        <div class="bg-black text-white relative font-monocontent-center pt-8 xl:px-12 sm:grid sm:grid-cols-2">    
            <div class="text-white flex items-center justify-center px-4 lg:w-full font-mono">
              <div class="grid grid-cols-1 gap-y-4 xl:gap-y-32">
                <div class="pr-4">
                  <p class="bold text-2xl sm:text-2xl leading-7 font-bold pb-4 md:leading-10 md:text-4xl xl:text-4xl text-right">3% Artist,<br/>2% Drunk Tank Fund,<br/><u>5% Total</u> Aftermarket Sale Royalties.</p>
                  <p class="bold text-lg leading-none font-extralight sm:text-xl text-right pb-4">Every 2nd Friday the police will search for floor price Slavs and take them out of circulation using the Drunk Tank Fund!</p>
                </div>
              </div>
            </div>
            <div>
            <StaticImage  class=" xl:px-32" src="../images/drunktank.jpg" alt="Drunk Slav being picked up off the floor by Police."/>
            </div>
        </div>
    );
}


export default Projectinfo