"use client";
import { useGlobalContext } from "@/context/AppContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { Event, EventsRegistered } from "@/utils/interface/interface";
import EventCancelModal from "@/components/Modals/EventCancelModal";

export default function UserProfile() {
	const { userDetails } = useGlobalContext();
	const [openCancelModal, setopenCancelModal] = useState<boolean>(false);
	const [eventId, setEventId] = useState<string>("");
	const handleDeleteEvent = (id: string) => {
		setEventId(id);
		setopenCancelModal(!openCancelModal);
	};
	console.log(userDetails);
	return (
		<div className="min-h-screen w-full">
			<div className="flex lg:flex-row flex-col lg:items-center lg:gap-24 gap-4 justify-between sm:px-12 lg:px-24 px-5 mt-36">
				<Tabs defaultValue="user" className="w-full">
					<TabsList>
						<TabsTrigger value="user">Profile</TabsTrigger>
						<TabsTrigger value="create">Events Created</TabsTrigger>
						<TabsTrigger value="register">Events Registered</TabsTrigger>
					</TabsList>
					<TabsContent value="user" className="py-4 px-8">
						<h1 className="text-xl text-white font-medium">Profile Details</h1>
						<div className="flex items-center gap-4  mt-4">
							<div className="text-white/60 font-bold">Name</div>
							<div className="capitalize ">{userDetails.name}</div>
						</div>
						<div className="flex items-center gap-4  mt-4">
							<div className="text-white/60 font-bold">Email</div>
							<div className="capitalize ">{userDetails.email}</div>
						</div>
						<div className="flex items-center gap-4  mt-4">
							<div className="text-white/60 font-bold">Number</div>
							<div className="capitalize ">{userDetails.phoneNumber}</div>
						</div>
					</TabsContent>
					<TabsContent value="create" className="py-4 px-8">
						<h1 className="text-xl text-white font-medium">Events Created</h1>
						{userDetails.eventsCreated != undefined &&
						userDetails.eventsCreated.length > 0 ? (
							<div className="flex flex-col gap-y-6 mt-5">
								{userDetails.eventsCreated.map((event: Event) => (
									<div key={event._id} className="bg-[#141627] p-4 rounded-sm">
										<div className="flex items-center justify-between gap-4">
											{/* <div className="">Name</div> */}
											<div className="capitalize text-white/90 text-2xl font-bold mb-2">
												{event.eventName}
											</div>
											<div
												onClick={() => handleDeleteEvent(event._id)}
												className="rounded-md px-3 py-1 bg-red-700 hover:bg-red-600 text-white cursor-pointer"
											>
												Cancel Event
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-white/60 font-bold">Category</div>
											<div className="capitalize ">{event.eventCategory}</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-white/60 font-bold">Details</div>
											<div className="capitalize ">{`${event.date.slice(
												0,
												10,
											)} in ${event.venue}`}</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-white/60 font-bold">
												Volunteer Required
											</div>
											<div className="capitalize ">
												{event.volunteerRequired}
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-white/60 font-bold">Category</div>
											<div className="capitalize ">{event.eventCategory}</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="bg-[#141627] p-4 rounded-sm mt-5">
								No registered events
							</div>
						)}
					</TabsContent>
					<TabsContent value="register" className="py-4 px-8">
						<h1 className="text-xl text-white font-medium">Events Registered</h1>
						{userDetails.eventsRegistered != undefined &&
						userDetails.eventsRegistered.length > 0 ? (
							<div className="flex flex-col gap-y-4 mt-5">
								{userDetails.eventsRegistered.map((event: EventsRegistered) => (
									<div
										key={event.eventId}
										className="flex flex-col gap-y-1 bg-[#141627] p-4 rounded-sm"
									>
										<div className="flex items-center justify-between gap-4">
											{/* <div className="">Name</div> */}
											<div className="capitalize text-white/90 text-2xl font-bold mb-2">
												{event.eventName}
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-white/60 font-bold">Host Name</div>
											<div className="capitalize ">
												{event.eventHostInfo.name}
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-white/60 font-bold">
												Host Email
											</div>
											<div className="capitalize ">
												{event.eventHostInfo.email}
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="text-white/60 font-bold">
												Host Contact
											</div>
											<div className="capitalize ">
												{event.eventHostInfo.phoneNumber}
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="bg-[#141627] p-4 rounded-sm mt-5">
								No registered events
							</div>
						)}
					</TabsContent>
				</Tabs>
			</div>
			<EventCancelModal
				eventId={eventId}
				setEventId={setEventId}
				openCancelModal={openCancelModal}
				setopenCancelModal={setopenCancelModal}
			/>
		</div>
	);
}
