import React from "react"

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
    question: "What comes with a Squatting Slav?",
    answer: "By purchasing a Squatting Slavs of Solana NFT, you own the full rights to the image and are free to do whatever you wish with it (Make a vinyl wrap for your car, sweatshirt, coffee mug)."
  },
  {
    question: "How many Squatting Slavs will there be?",
    answer: "There will be 5000 Series 1 Squatting Slavs of Solana. 100 of these will be pre-minted by the team and reserved for giveaways. The remaining 4900 will be available for public mint."
  },
  {
    question: "What benefits do I get from holding?",
    answer: "By holding a Squatting Slavs of Solana NFT you are entitled to be apart of the exclusive Squatting Slav decentralized autonomous organization (DAO). DAO members will be able to cast votes on the direction of Squatting Slavs of Solana. Legendary Slav holders will receive greater voting power. All DAO members are entitled to a free airdrop of SLAV tokens which will be used to vote in the DAO."
  },
  {
    question: "When can I buy a Squatting Slav?",
    answer:
      "December 2021. An exact date is to be determined and announced.",
  },
  {
    question: "Where can I buy a Squatting Slav?",
    answer:
      "You may only purchase a Slav on https://Slavs.io during launch date. After the initial sale, you may purchase one on secondary art markets such as https://Solanart.io/  https://magiceden.io/  or https://digitaleyes.market/ ",
  },
  {
    question: "Are there aftermarket sales royalties collected?",
    answer:
      "Yes. 5% total. 3% goes to the artist to maintain servers & to fund future Squatting Slavs of Solana projects. 2% is dedicated strictly for sweeping Slavs off the floor using the Drunk Tank Fund.",
  },
  {
    question: "How much for one Squatting Slav?",
    answer:
      "Slavs will be available for purchase with Solana. An exact price will be determined closer to launch date to ensure a low mint price so that everyone can participate.",
  },
  {
    question: "What's the Squatting Slav mission?",
    answer: "Squatting Slavs of Solana is a fun and wholesome community built on connecting Slavs and everyone else around the world."
  },
  {
    question: "How many unique Squatting Slavs can be created?",
    answer: "Since there are over 120 attributes split over 9 categories, we have calculated there are approximately 2 billion unique Slavs that can be generated with our artwork."
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