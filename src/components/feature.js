import React from "react"
import Event from "./event"

export default function Feature() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-8 lg:px-8">
        <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Want to set up your own business?
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              Sign up for our launch event
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
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
    </div>
  )
}
