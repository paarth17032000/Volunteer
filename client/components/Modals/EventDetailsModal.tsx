import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Event } from "@/utils/interface/interface";
import { useGlobalContext } from "@/context/AppContext";
import useRegisterEvent from "@/utils/hooks/mutations/events/useRegisterEvent";
import useGetUserDetails from "@/utils/hooks/queries/useGetUserDetails";

interface IEventDetailsModal {
	open: boolean;
	setOpen: (open: boolean) => void;
	eventInfo: Event;
}

export default function EventDetailsModal({ open, setOpen, eventInfo }: IEventDetailsModal) {
	// const {} = useGetUserDetails()
	const { userId, userDetails } = useGlobalContext();
	const registerEventMutation = useRegisterEvent();
	const handleRegisterUserForEvent = () => {
		registerEventMutation.mutateAsync(
			{
				userId: userId,
				eventId: eventInfo._id,
			},
			{
				onSuccess: () => {},
			},
		);
		setOpen(!open);
	};
	const isEventRegistered = userDetails.eventsRegistered.some(
		(eventObj) => eventObj.eventId === eventInfo._id,
	);
	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			<DialogContent className="bg-black text-white hover:shadow-2xl hover:shadow-emerald-500/[0.2] border-white/[0.5] rounded-xl p-6 border">
				<div className="mt-4 md:px-6 px-0">
					<h1 className="font-bold text-center text-2xl mb-8">Event Details</h1>
					<div className="gap-1 my-4">
						<div className="text-white/60 font-bold mt-3">Name</div>
						<div className="capitalize ">{eventInfo.eventName}</div>

						<div className="text-white/60 font-bold mt-3">Category</div>
						<div className="capitalize ">{eventInfo.eventCategory}</div>

						<div className="text-white/60 font-bold mt-3">Venue</div>
						<div className="capitalize ">{eventInfo.venue}</div>

						<div className="text-white/60 font-bold mt-3">Date</div>
						<div className="capitalize ">{eventInfo.date.slice(0, 10)}</div>

						<div className="text-white/60 font-bold mt-3">Volnteers Required</div>
						<div className="capitalize ">{eventInfo.volunteerRequired}</div>

						<div className="text-white/60 font-bold mt-3">Description</div>
						<div className=" ">{eventInfo.desc}</div>

						<div className="my-5 w-full border-2 px-4 py-2 rounded-md border-white/20">
							<div className="flex items-center gap-4">
								<div className="text-white/60 font-bold">Host Name</div>
								<div className="capitalize ">{eventInfo.eventHostInfo.name}</div>
							</div>
							<div className="flex items-center  gap-4 mt-1">
								<div className="text-white/60 font-bold">Host Contact</div>
								<div className=" ">{eventInfo.eventHostInfo.email}</div>
							</div>
						</div>

						{userDetails.email !== eventInfo.eventHostInfo.email ? (
							!isEventRegistered ? (
								<button
									onClick={handleRegisterUserForEvent}
									className={`text-center cursor-pointer outline-none font-medium mt-5 bg-white/90 text-black px-6 py-3 w-full rounded-md ${
										userDetails.email === eventInfo.eventHostInfo.email
											? "cursor-not-allowed"
											: ""
									}`}
								>
									Register for Event
								</button>
							) : (
								<button
									onClick={handleRegisterUserForEvent}
									disabled={true}
									className={`text-center cursor-not-allowed outline-none font-medium mt-5 bg-white/90 text-black px-6 py-3 w-full rounded-md ${
										userDetails.email === eventInfo.eventHostInfo.email
											? "cursor-not-allowed"
											: ""
									}`}
								>
									Already registered
								</button>
							)
						) : null}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
