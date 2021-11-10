import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between py-2 px-4 bg-black font-mono text-grey-400">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
      <Link
            to={`/`}
            className="block mt-3 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white">
          <StaticImage class="" src="../images/TypoLogo.svg"/>
        </Link>
       
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/legendary`}
            className="flex items-center justify-center mt-3 sm:mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Legendary Slavs
          </Link>
          <Link
            to={`/roadmap`}
            href="#responsive-header"
            className="flex items-center justify-center mt-3 sm:mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Roadmap
          </Link>
          {/* <Link
            to={`/drunktank`}
            className="flex items-center justify-center mt-3 sm:mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            Drunk Tank
          </Link> */}
        </div>
        
        <div class="flex flex-start relative grid items-center justify-center lg:grid-cols-3">
          <a href="https://www.discord.gg/squattingslavs" class="text-white mt-3 lg:mt-0"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
          <a href="https://www.twitter.com/slavicnfts" class="lg:mt-0 mt-3 text-white lg:px-2"><FontAwesomeIcon icon={faTwitter} size="2x"/> </a>
          <a href="https://www.instagram.com/solanaslavs" class="lg:mt-0 mt-3 text-white lg:px-2"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
        </div>

        {/* <div>
          <a
            href="#mint"
            className="inline-block px-4 py-2 mt-4 disabled:opacity-90 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-white hover:bg-black lg:mt-0"
          >
          Mint a Slav!
          </a>
        </div> */}
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
