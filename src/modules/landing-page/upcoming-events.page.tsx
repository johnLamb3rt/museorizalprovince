import EventItem from "@/components/event-item";
import Eyebrow from "@/components/eyebrow";
import { Spinner } from "@/components/spinner";
import { useMemo } from "react";
import useEvents from "../admin/events/hooks/useEvents";

const UpcomingEvents = () => {

  const { data: eventsData, isLoading } = useEvents();

  const memoEvents = useMemo(() => {
    return eventsData?.data?.events || [];
  }, [eventsData]);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-20 md:py-16 py-12 px-5">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="Upcoming Events" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5 text-[#492309]">
                {/* We <span className="bg-[#50C878]/85">tailored</span> the{" "}
                <span className="italic">services empower navigating</span> on
                computer engineering in{" "}
                <span className="underline">URS Morong</span> */}
                What's On in Rizal: Upcoming <span className="bg-[#927B6B]/95 text-gray-300 italic px-2">Museum Events</span>.
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">

          {isLoading ? (
              <div className="flex justify-center items-center w-full">
                <Spinner className="mx-auto" />
                <span className="sr-only">Loading events...</span>
              </div>
            ) : (
              // Display first 3 events
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              memoEvents.map((event: any) => (
                <EventItem
                  key={event.event_id}
                  icon={event.coverPhoto}  // Assuming event has an icon property
                  date={""}  // Assuming event has a date property
                  title={event.title}  // Assuming event has a title property
                  description={""}  // Assuming event has a description property
                  navigation={`event=${event.event_id}`}
                />
              ))
            )}
                  
            {/* <EventItem
              date="April 03, 2002"
              icon={"/mock/hinge.png"}
              title={""}
              description="A vibrant celebration featuring giant papier-mâché figures, symbolizing the town's agrarian past."
            />
            <EventItem
              icon={"/mock/hinge.png"}
              date="April 03, 2002"
              title="Higantes Festival"
              description="A vibrant celebration featuring giant papier-mâché figures, symbolizing the town's agrarian past."
            />
            <EventItem
              icon={"/mock/hinge.png"}
              date="April 03, 2002"
              title="Higantes Festival"
              description="A vibrant celebration featuring giant papier-mâché figures, symbolizing the town's agrarian past."
            /> */}
                      {/*   <ServiceItem
              icon={"RenovationIcon"}
              title="Resource Accessability"
              description="Research reports, case studies, and tools for informed decisions"
            />
            <ServiceItem
              icon={"ConstructionIcon"}
              title="Networking Events and Conferences"
              description="Conferences, meetups, and online communities fostering industry connections"
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
