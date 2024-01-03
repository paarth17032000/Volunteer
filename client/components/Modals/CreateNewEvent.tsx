import React, { ChangeEvent, FormEvent, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface ICreateNewEvent {
	openCreateNewEvent: boolean;
	setOpenCreateNewEvent: (open: boolean) => void;
	// eventInfo: Event;
}

export default function CreateNewEvent({
	openCreateNewEvent,
	setOpenCreateNewEvent,
}: ICreateNewEvent) {
	const [eventCreds, setEventCreds] = useState<{
		eventName: string;
		date: string;
		venue: string;
		eventCategory: string;
		volunteerRequired: string;
		desc: string;
	}>({
		eventName: "",
		date: "",
		venue: "",
		eventCategory: "",
		volunteerRequired: "",
		desc: "",
	});
	const handleInputFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setEventCreds({
			...eventCreds,
			[e.target.name]: e.target.value,
		});
	};
	const handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(eventCreds);
		// loginMutation.mutate(loginCreds);
	};
	return (
		<Dialog
			open={openCreateNewEvent}
			onOpenChange={() => setOpenCreateNewEvent(!openCreateNewEvent)}
		>
			{/* <DialogTrigger>Open</DialogTrigger> */}
			<DialogContent className="bg-black text-white/90 hover:shadow-2xl hover:shadow-emerald-500/[0.2] border-white/[0.5] rounded-xl p-6 border  ">
				<DialogHeader className="mt-4">
					<h1 className="font-bold text-center text-2xl">Create New Event</h1>
					<form
						// style={{ maxWidth: "700px" }}
						onSubmit={handleLoginFormSubmit}
						className="flex flex-col items-center gap-y-4 px-5 py-8"
					>
						<input
							type="text"
							name="eventName"
							className="px-3 py-2 outline-none text-white w-full bg-transparent border border-white/30 rounded-md active-none autofill:bg-transparent"
							placeholder="Clean Drive"
							value={eventCreds.eventName}
							onChange={handleInputFieldChange}
							required
						/>
						<input
							type="text"
							name="eventCategory"
							className="px-3 py-2 outline-none text-white w-full bg-transparent border border-white/30 rounded-md"
							placeholder="Study"
							value={eventCreds.eventCategory}
							onChange={handleInputFieldChange}
							required
						/>
						<input
							type="text"
							name="venue"
							className="px-3 py-2 outline-none text-white w-full bg-transparent border border-white/30 rounded-md"
							placeholder="Mumbai"
							value={eventCreds.venue}
							onChange={handleInputFieldChange}
							required
						/>
						<input
							type="date"
							name="date"
							className="px-3 py-2 outline-none text-white w-full bg-transparent border border-white/30 rounded-md"
							placeholder="10-10-2023"
							value={eventCreds.date}
							onChange={handleInputFieldChange}
							required
						/>
						<input
							type="text"
							name="volunteerRequired"
							className="px-3 py-2 outline-none text-white w-full bg-transparent border border-white/30 rounded-md"
							placeholder="10"
							value={eventCreds.volunteerRequired}
							onChange={handleInputFieldChange}
							required
						/>
						<textarea
							rows={5}
							name="desc"
							className="px-3 py-2 outline-none text-white w-full bg-transparent border border-white/30 rounded-md"
							placeholder="Description of the event."
							value={eventCreds.desc}
							onChange={handleInputFieldChange}
							required
						/>
						<button
							type="submit"
							className="border border-white/90 bg-white/90 text-black/90 font-bold w-full rounded-md mt-4 px-4 py-2"
						>
							Login
						</button>
					</form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
