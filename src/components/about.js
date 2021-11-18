import React from "react"

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Who are the Squatting Slavs?",
    answer:
      "Slavic people originate from 13 countries (15 if you include past countries USSR and Yugoslavia). They squat because it is obvious that it is  more comfortable / efficient than sitting or standing. They are arriving from Belarus, Bosnia, Bulgaria, Croatia, Czechia, Macedonia, Montenegro, Poland, Russia, Serbia, Slovakia, Slovenia, & Ukraine. Likewise, old school Slavs from the USSR and Yugoslavia will accompany everyone on this one-way ticket trip to Solana where they will reside on FOREVER!",
  },
  {
    question: "How many Squatting Slavs will there be sold?",
    answer: "There will be 2500 Series-1 Squatting Slavs. 100 of these will be pre-minted by the team and reserved for giveaways. The remaining 2400 will be available for public mint."
  },
  {
    question: "When is the official sale?",
    answer:
      "December 5th, 3:00PM EST/8:00PM UTC.",
  },
  {
    question: "Where can I buy a Squatting Slav?",
    answer:
      "On official release day, a buy button be available in the navigation bar of Slavs.io and links will be posted in our social media channels. After the initial sale, you may purchase one on secondary art markets such as Solanart.io, Magiceden.io or Digitaleyes.market.",
  },
  {
    question: "What is a fair mint? What's a candy machine?",
    answer: "Metaplex's Candy-Machine will be used to govern a fair mint. That means: live minting with start and finish time same for everyone & we won't accept your funds when Slavs sell out. Everyone is given the same chance to get the rarest Squatting Slavs through random distribution without bonding-curve, all possible through the Candy-Machine."
  },
  {
    question: "How do I protect myself from scams?",
    answer: "Squatting Slavs of Solana will NEVER private message you asking you anything that one might consider suspicious. The only way to purchase an official Squatting Slavs of Solana NFT will be through the buy button that will appear on Slavs.io on December 5th. We also encourage safe-practices such as creating a burner wallet for the purpose of purchasing NFTs during live mints."
  },
  {
    question: "Are there aftermarket sales royalties collected?",
    answer:
      "Yes. 5% total. 3% goes to the artist to maintain servers & to fund future Squatting Slavs of Solana projects. 2% is dedicated strictly for sweeping Slavs off the floor using the Drunk Tank Fund.",
  },
  {
    question: "How much for one Squatting Slav?",
    answer:
      "Slavs will be available for purchase with Solana. The price to mint one Slav will be 0.20 Sol.",
  },
  {
    question: "What's the Squatting Slav mission?",
    answer: "Squatting Slavs of Solana is a community aspiring to connect Slavs and all types of people from around the world. We are all different yet very similar."
  },
  {
    question: "How many unique Squatting Slavs can be created?",
    answer: "Since there are over 120 attributes split over 9 categories, we have calculated that there are approximately 2 billion unique Slavs that can be generated."
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
  <div className="bg-black font-mono pt-4">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl md:text-5xl xl:text-6xl">F.A.Q.</h2>
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