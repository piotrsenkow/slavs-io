import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Legendary = () => (
  <Layout>
    <SEO title="Legendary Slavs" />
    <div class="bg-black text-white relative font-mono content-center xl:px-12 md:grid md:grid-cols-2 pb-16 xl:px-12 sm:pt-8">
    <img class="p-4 xl:px-32 rounded-lg order-first" src="https://d2job0l8ymfiy1.cloudfront.net/" alt="Seven Legendary Squatting Slavs including Anatoly Yakovenko, Vitalik Buterin, Gary Vee, and more." />
          <div class="text-white flex items-center justify-center px-4 lg:w-full font-mono">
            <div class="grid grid-cols-1 gap-y-4 xl:gap-y-32">
              <div>
                <h1 class="bold text-4xl leading-7 font-bold tracking-tighter py-4 sm:text-4xl md:text-5xl xl:text-7xl">7 Legendary Slavs</h1>
                <p class="bold text-2xl leading-7 font-normal tracking-tighter py-4 sm:text-4xl"><b><u>Featuring:</u></b></p>
                <li><b>Anatoly Yakovenko</b> (Solana creator)</li>
                <li><b>Vitalik Buterin</b> (Ethereum creator)</li>
                <li><b>Gary Vaynerchuk</b> (Entrepreneur)</li>
                <li><b>Boban Marjanović</b> (Pro NBA player)</li>
                <li><b>Yuri Gagarin</b> (Kosmonaut)</li>
                <li><b>Babushka</b> (Makes great dumplings!)</li>
                <li>& <b>Baba Yaga</b>! (Beware of the witch!)</li>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-black text-white text-center pb-8 sm:pb-16 px-4 font-mono">
            <h1 class="text-4xl sm:text-5xl pb-4">These Slavs are one of a kind!</h1>
            <p class="text-xl md:text-3xl pt-8 sm:pt-64">Make sure to hold these as they will bring you more SLAV than the average Squatting Slav!</p>
        </div>
  </Layout>
)

export default Legendary
