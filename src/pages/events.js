import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Events
          </h2>
        </div>
        <div className="mt-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              <Event
                eventTitle="Launch Event"
                eventParticipants="Any"
                eventAvailability="Tickets Available"
                eventLocation="Online"
                eventDate="10 March 2021"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default EventsPage
