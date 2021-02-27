import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamMember from "../components/team-member"

const TeamPage = () => (
  <Layout>
    <SEO title="Team" />
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our team
            </h2>
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            <TeamMember
              name="Whitney Smith"
              imageURL="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              jobTitle="Copywriter"
              twitterURL="/"
              linkedinURL="/"
            />
            <TeamMember
              name="Leonard Krasner"
              imageURL="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              jobTitle="Senior Designer"
              twitterURL="/"
              linkedinURL="/"
            />
            <TeamMember
              name="Floyd Miles"
              imageURL="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              jobTitle="Principal Designer"
              twitterURL="/"
              linkedinURL="/"
            />
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default TeamPage
