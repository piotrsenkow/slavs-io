import React from "react"

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Who are the Squatting Slavs?",
    answer:
      "Slavic people originate from 15 countries: Belarus, Bosnia, Bulgaria, Croatia, Czechia, Macedonia, Montenegro, Poland, Russia, Serbia, Slovakia, Slovenia, Ukraine, USSR, and Yugoslavia. They squat because it is obvious that it is more comfortable / efficient than sitting / standing.",
  },
  {
    question: "How many Squatting Slavs will there be sold?",
    answer: "There will be 2500 Gen-1 Squatting Slavs."
  },
  {
    question: "When is the official Gen-1 sale?",
    answer: "To be determined!",
  },
  {
    question: "What's the Squatting Slav mission?",
    answer: "Squatting Slavs of Solana is a community connecting people from around the world, celebrating Slavic culture."
  },
  {
    question: "What did you listen to while creating this project?",
    answer:
      "'Mac Miller - Faces' was on loop 24/7 during the creation of this project.",
  },
  
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function About() {
    return(<div>
  <div className="bg-black font-mono h-screen">
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