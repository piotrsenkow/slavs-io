import React from "react"

function Gif() {
    return(
        <div class="bg-black text-white relative font-monocontent-center xl:px-12 md:grid md:grid-cols-2">
            <div>
                <img class="p-4 xl:px-32 rounded-lg" src="https://d3h3pduwxn8qc8.cloudfront.net/" />
            </div>
            
            <div class="text-white flex items-center justify-center px-4 lg:w-full font-mono">
              <div class="grid grid-cols-1 gap-y-4 xl:gap-y-32">
                <div>
                  <p class="bold text-3xl leading-7 font-bold tracking-tighter py-4 sm:text-4xl">13+ Nations,<br/> 120+ Attributes,<br/> 10000 Squatting Slavs.</p>
                  <p class="bold text-3xl leading-7 font-bold tracking-tighter py-4 sm:text-4xl">Collect &amp; hold your part of the first Slav Squat collection on Solana this December! </p>

                </div>
                <div class="text-white grid grid-cols-3">
                  <div class="box border-r-2 items-center justify-center flex flex-col">
                    <div class=" ext-black mb-0.5 text-2xl font-bold underline">10,000</div>
                    <p class="sub font-thin">slavs</p>
                  </div>
                  <div class="box border-r-2 items-center justify-center flex flex-col">
                    <div class=" ext-black mb-0.5 text-2xl tracking-normal font-bold underline">DEC</div>
                    <p class="sub font-thin">launch</p>
                  </div>
                  <div class="box-last items-center justify-center flex flex-col">
                    <div class="ext-black mb-0.5 text-2xl font-bold underline">TBD</div>
                    <p class="sub font-thin">price</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}


export default Gif