import React from "react"
import { Link } from "gatsby"
import TwitterIcon from "./social-media-links/twitter"
import FacebookIcon from "./social-media-links/facebook"
import InstagramIcon from "./social-media-links/instagram"
import GithubIcon from "./social-media-links/github"
import LinkedInIcon from "./social-media-links/linkedin"

export default function Footer({
  company,
  developer,
  developerLink,
  facebookURL,
  twitterURL,
  instagramURL,
  linkedinURL,
  githubURL,
}) {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {facebookURL && <FacebookIcon URL={facebookURL} />}
          {instagramURL && <InstagramIcon URL={instagramURL} />}
          {twitterURL && <TwitterIcon URL={twitterURL} />}
          {linkedinURL && <LinkedInIcon URL={linkedinURL} />}
          {githubURL && <GithubIcon URL={githubURL} />}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            © {new Date().getFullYear()}, {company}.{` `}
            Built by
            {` `}
            <Link to={developerLink}>{developer}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
