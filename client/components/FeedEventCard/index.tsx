import { useGlobalContext } from "@/context/AppContext";
import { Event } from "@/utils/interface/interface";
import React from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { MdInfoOutline } from "react-icons/md";

interface IFeedEventCard {
	eventObj: Event;
	setEventInfo: (eventObj: Event) => void;
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function FeedEventCard({ eventObj, setEventInfo, open, setOpen }: IFeedEventCard) {
	const { userDetails } = useGlobalContext()
	// const isEventRegistered = userDetails.eventsRegistered.some(
	// 	(eventObj) => eventObj.eventId === eventObj.eventId,
	// );
	return (
		<div className="flex flex-row justify-between bg-[#1C1F37] rounded-md md:px-10 px-6 md:py-5 py-4">
			<div className="flex flex-col">
				<div className="text-white text-2xl font-bold tracking-wider capitalize">
					{eventObj.eventName}, <span className="text-lg"> {eventObj.venue}</span>
				</div>

				<div className="mt-2">
					<div className="text-[#676A84]">
						Date <span className="text-white">{eventObj.date.slice(0, 10)}</span>
					</div>
				</div>

				<div className="mt-1">
					<div className="text-[#676A84]">
						Event Created by{" "}
						<span className="text-white font-medium">
							{eventObj.eventHostInfo.name}{" "}
						</span>
					</div>
				</div>

				<div className="flex flex-row gap-x-4 items-center mt-2">
					<div className="flex items-center gap-x-2">
						<FaRegThumbsUp className="text-lg cursor-pointer" />
						<FaThumbsUp className="text-lg cursor-pointer" />
						{eventObj.upvotes.length}
					</div>

					<div
						onClick={() => {
							setOpen(!open);
							setEventInfo(eventObj);
						}}
						className="flex items-center gap-x-1 cursor-pointer"
					>
						<MdInfoOutline className="text-xl" />
						Details
					</div>
				</div>

				<div className="md:hidden block capitalize text-white bg-[#141627] px-5 py-1.5 h-fit rounded-xl mt-3 w-fit">
					{eventObj.eventCategory}
				</div>
			</div>

			<div className="md:flex hidden  gap-x-3">
				<div className="capitalize text-white bg-[#141627] px-5 py-1.5 h-fit rounded-xl">
					{eventObj.eventCategory}
				</div>
			</div>
		</div>
	);
}
