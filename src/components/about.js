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
    return(
      <div className="bg-black font-mono">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">Frequently asked questions</h2>
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
    );
}


export default About