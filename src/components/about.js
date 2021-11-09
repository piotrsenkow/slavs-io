import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Who are Squatting Slavs?",
    answer:
      "Slavic people originate from 13 countries (15 if you include past countries USSR and Yugoslavia). They squat because it is obvious that it is  more comfortable / efficient than sitting or standing.",
  },
  {
    question: "Where are they coming from?",
    answer: "They are arriving from Belarus, Bosnia, Bulgaria, Croatia, Czechia, Macedonia, Montenegro, Poland, Russia, Serbia, Slovakia, Slovenia, & Ukraine. Likewise, old school Slavs from USSR and Yugoslavia decided to accompany on this one-way ticket trip to Solana where they will reside on FOREVER!"
  },
  {
    question: "When can I buy a Squatting Slav?",
    answer:
      "December 2021. An exact date is to be determined and announced.",
  },
  {
    question: "Where can I buy a Squatting Slav?",
    answer:
      "You may only purchase a Slav on Slavs.io during launch date. After the initial sale, you may purchase one on secondary art markets such as Solanart.io. ",
  },
  {
    question: "How much for one Squatting Slav?",
    answer:
      "Slavs will be available for purchase with Solana. An exact price will be determined closer to launch date to ensure a low mint price so that everyone can participate.",
  },
  {
    question: "Why 10,000 and not a limited amount?",
    answer:
      "With 15 nations in this series launch, thats ~667 Slavs representing each nation. There is going to be a high demand to have a Slav, especially those possessing rarer traits from your desired country!",
  },
  {
    question: "What's the Squatting Slav mission?",
    answer: "Squatting Slavs of Solana is a fun and wholesome community built on connecting Slavs and everyone else around the world."
  },
  {
    question: "The future of Squatting Slavs of Solana?",
    answer: "Series 2 is already in the works. Holders of both Series 1 & 2 will receive a free airdrop."
  },
  {
    question: "What did you listen to while creating this project?",
    answer:
      "'Mac Miller - Faces' was on loop in the background 24/7. ",
  },
  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function About() {
    return(<div>
      <div class="bg-black text-white relative font-monocontent-center xl:px-12 md:grid md:grid-cols-2">
            <div class="text-white flex items-center justify-center px-4 lg:w-full font-mono">
              <div class="grid grid-cols-1 gap-y-4 xl:gap-y-32">
                <div>
                  <p class="bold text-4xl leading-7 font-bold tracking-tighter py-4 sm:text-4xl md:text-5xl xl:text-7xl">7 Legendary Slavs</p>
                  {/* <p class="bold text-2xl leading-7 font-light tracking-tighter py-4 sm:text-4xl">Some famous some fictitious..</p> */}
                  <p class="bold text-2xl leading-7 font-normal tracking-tighter py-4 sm:text-4xl"><b>Featuring:</b></p>
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
            <div>
                <img class="p-4 xl:px-32 rounded-lg" src="https://d2job0l8ymfiy1.cloudfront.net/" alt="Squatting Slavs of Solana NFT gif image displaying various configurations of Slavs." />
            </div>
           </div>
           <div className="bg-black font-mono pt-16">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl md:text-5xl xl:text-6xl">Frequently asked questions</h2>
      <dl className="mt-6 space-y-6 divide-y divide-gray-200">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="text-left w-full flex justify-between items-start text-white">
                    <span className="font-medium text-gray-400">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <ChevronDownIcon
                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base text-white">{faq.answer}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  </div>
    </div>
        </div>
      
    );
}


export default About