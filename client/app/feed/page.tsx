"use client";
import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import useGetAllEvents from "@/utils/hooks/queries/useGetAllEvents";
import { BiUpvote } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa6";
import { MdInfoOutline } from "react-icons/md";

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
	const [eventInfo, setEventInfo] = useState<any>();
	// const { allEventsData } = useGetAllEvents();
	// console.log(allEventsData);
	return (
		<div className="min-h-screen p-24 w-full">
			<div className="grid grid-cols-2 gap-10">
				{dummy != undefined &&
					dummy.map((eventObj: any) => (
						<div className="flex flex-row justify-between bg-[#1C1F37] rounded-md px-10 py-5">
							<div className="flex flex-col">
								<div className="text-white text-2xl font-bold tracking-wider capitalize">
									{eventObj.eventName},{" "}
									<span className="text-lg"> {eventObj.venue}</span>
									{/* <span className="capitalize text-sm ml-3 text-white bg-[#141627] px-5 py-2 h-fit rounded-xl">
										{eventObj.eventCategory}
									</span> */}
								</div>

								<div className="mt-2">
									<div className="text-[#676A84]">
										Date{" "}
										<span className="text-white">
											{eventObj.date.slice(0, 10)}
										</span>
									</div>
									{/* <div>{eventObj.date.slice(0, 10)}</div> */}
									{/* <div>{eventObj.venue}</div> */}
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
										{eventObj.volunteers.length}
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
							</div>

							<div className="flex gap-x-3">
								<div className="capitalize text-white bg-[#141627] px-5 py-1.5 h-fit rounded-xl">
									{eventObj.eventCategory}
								</div>
							</div>
						</div>
					))}
			</div>
			<Dialog open={open} onOpenChange={() => setOpen(!open)}>
				{/* <DialogTrigger>Open</DialogTrigger> */}
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you sure absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your account
							DialogTrigger and remove your data from our servers.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
// #1C1F37
