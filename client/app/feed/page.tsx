"use client";
import React, { useState } from "react";
import { Event } from "@/utils/interface/interface";
import FeedEventCard from "@/components/FeedEventCard";
import EventDetailsModal from "@/components/Modals/EventDetailsModal";
import CreateNewEvent from "@/components/Modals/CreateNewEvent";

const dummy = [
	{
		eventHostInfo: {
			name: "Anurag",
			email: "anurag@gmail.com",
			phoneNumber: 6746384901,
		},
		_id: "6584a7921fc66a6680ac2951",
		eventName: "disco Party",
		userId: "6584a7671fc66a6680ac294d",
		eventCategory: "disco",
		volunteerRequired: 8,
		volunteers: [],
		date: "2023-12-31T08:00:00.000Z",
		venue: "Banglore",
		desc: "We will be doing a disco hard",
		upvotes: [],
		__v: 0,
	},
	{
		eventHostInfo: {
			name: "Seema",
			email: "seema@gmail.com",
			phoneNumber: 9987654321,
		},
		_id: "6584a7c91fc66a6680ac2959",
		eventName: "City Clean Up",
		userId: "6584a7571fc66a6680ac2949",
		eventCategory: "clean",
		volunteerRequired: 50,
		volunteers: [
			{
				name: "Anurag",
				email: "anurag@gmail.com",
				phoneNumber: 6746384901,
				_id: "6584aa31aab9efdd089ec0cf",
			},
		],
		date: "2024-01-12T08:00:00.000Z",
		venue: "Mumbai",
		desc: "We will be doing a beach cleanup.",
		upvotes: ["6584a7671fc66a6680ac294d"],
		__v: 0,
	},
	{
		eventHostInfo: {
			name: "Paarth",
			email: "paarth@gmail.com",
			phoneNumber: 1234567890,
		},
		_id: "6585fdfd20596816f9db0f50",
		eventName: "Study Group",
		userId: "6584a73d1fc66a6680ac2943",
		eventCategory: "education",
		volunteerRequired: 5,
		volunteers: [],
		date: "2023-12-23T08:00:00.000Z",
		venue: "Pilibhit",
		desc: "We will be studying together for 10 hours.",
		upvotes: [],
		__v: 0,
	},
];

export default function Feed() {
	const [open, setOpen] = useState<boolean>(false);
	const [openCreateNewEvent, setOpenCreateNewEvent] = useState<boolean>(false);
	const [eventInfo, setEventInfo] = useState<Event>();
	// const { allEventsData } = useGetAllEvents();
	// console.log(allEventsData);
	return (
		<div className="min-h-screen w-full">
			<div className="flex lg:flex-row flex-col lg:items-center lg:gap-24 gap-4 justify-between mt-4 md:px-24 px-4 py-3">
				<input
					name="search"
					type="text"
					placeholder="search events.."
					className="px-3 py-2 flex-1 outline-none text-white bg-transparent border border-white/30 rounded-md active-none autofill:bg-transparent"
				/>
				<div className="flex flex-row items-center md:gap-8 gap-4">
					<div className="bg-[#1C1F37] px-6 py-2 rounded-md cursor-pointer">Filters</div>
					<div
						onClick={() => setOpenCreateNewEvent(!openCreateNewEvent)}
						className="border-2 border-[#1C1F37] px-6 py-2 rounded-md cursor-pointer whitespace-nowrap"
					>
						Create Event
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-4 md:px-24 md:py-5">
				{dummy != undefined &&
					dummy.map((eventObj: any) => (
						<FeedEventCard
							key={eventObj._id}
							eventObj={eventObj}
							setEventInfo={setEventInfo}
							open={open}
							setOpen={setOpen}
						/>
					))}
			</div>
			{eventInfo != undefined && (
				<EventDetailsModal open={open} setOpen={setOpen} eventInfo={eventInfo} />
			)}
			<CreateNewEvent
				openCreateNewEvent={openCreateNewEvent}
				setOpenCreateNewEvent={setOpenCreateNewEvent}
			/>
		</div>
	);
}
// #1C1F37
