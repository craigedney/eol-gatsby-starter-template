import React from "react"
import TwitterIcon from "./social-media-links/twitter"
import LinkedInIcon from "./social-media-links/linkedin"

export default function TeamMember({
  name,
  jobTitle,
  twitterURL,
  linkedinURL,
  imageURL,
}) {
  return (
    <li>
      <div className="space-y-6">
        <img
          className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
          src={imageURL}
          alt=""
        />
        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{name}</h3>
            <p className="text-indigo-600">{jobTitle}</p>
          </div>
          <ul className="flex justify-center space-x-5">
            {twitterURL && (
              <li>
                <TwitterIcon URL={twitterURL} />{" "}
              </li>
            )}
            {linkedinURL && (
              <li>
                <LinkedInIcon URL={linkedinURL} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </li>
  )
}
