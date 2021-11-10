import React from "react"

function Gif() {
    return(
      <div class="bg-black text-white relative font-monocontent-center xl:px-12 sm:pt-8 sm:pb-8">
        <div class="sm:grid sm:grid-cols-2">
            <div>
                <img class="p-4 xl:px-32 rounded-lg" src="https://d3h3pduwxn8qc8.cloudfront.net/" alt="Squatting Slavs of Solana NFT gif image displaying various configurations of Slavs." />
            </div>
            
            <div class="text-white flex items-center justify-center px-4 lg:w-full font-mono">
              <div class="grid grid-cols-1 gap-y-4 xl:gap-y-12 2xl:gap-y-32">
                <div>
                  <p class="bold text-4xl leading-7 font-bold tracking-tighter py-4 md:leading-10 md:text-5xl xl:text-7xl">13+ Nations,<br/> 120+ Attributes,<br/> 5000 Squatting Slavs.</p>
                  <p class="bold text-3xl leading-7 font-normal py-4 sm:text-xl xl:text-3xl">Collect &amp; hold your part of the first Slav Squat NFT collection on Solana this December! </p>
                </div>
                <div class="text-white grid grid-cols-3">
                  <div class="box border-r-2 items-center justify-center flex flex-col">
                    <div class=" ext-black mb-0.5 text-xl md:text-3xl font-bold underline">5000</div>
                    <p class="sub font-thin">Slavs</p>
                  </div>
                  <div class="box border-r-2 items-center justify-center flex flex-col">
                    <div class=" ext-black mb-0.5 text-xl md:text-3xl tracking-normal font-bold underline">DEC 5</div>
                    <p class="sub font-thin">launch</p>
                  </div>
                  <div class="box-last items-center justify-center flex flex-col">
                    <div class="ext-black mb-0.5 text-xl md:text-3xl font-bold underline">0.25 Sol</div>
                    <p class="sub font-thin">price</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <p class="font-mono  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center pt-8 px-4">Just don't get caught drunk on the floor by the Police or you'll end up in the <u><b>Drunk Tank</b></u>!</p>
      </div>
    );
}


export default Gif