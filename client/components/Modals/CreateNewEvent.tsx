import React, { ChangeEvent, FormEvent, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import useCreateEvent from "@/utils/hooks/mutations/events/useCreateEvent";
import { useGlobalContext } from "@/context/AppContext";
import InputFieldComponent from "../InputFieldComponent";

interface ICreateNewEvent {
	openCreateNewEvent: boolean;
	setOpenCreateNewEvent: (open: boolean) => void;
	// eventInfo: Event;
}

export default function CreateNewEvent({
	openCreateNewEvent,
	setOpenCreateNewEvent,
}: ICreateNewEvent) {
	const { userId } = useGlobalContext();
	const createEventMutation = useCreateEvent();
	const [eventCreds, setEventCreds] = useState<{
		eventName: string;
		date: string;
		venue: string;
		eventCategory: string;
		volunteerRequired: string;
		desc: string;
		userId: string;
	}>({
		eventName: "",
		date: "",
		venue: "",
		eventCategory: "",
		volunteerRequired: "",
		desc: "",
		userId: userId,
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
		// createEventMutation.mutate(eventCreds);
		// setOpenCreateNewEvent(!openCreateNewEvent);
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
						className="flex flex-col items-center gap-y-6 px-5 py-8"
					>
						{/* <div className="relative w-full">
							<input
								id="email"
								name="email"
								type="text"
								className="peer w-full px-3 py-2 outline-none text-white bg-transparent border border-white/30 rounded-md placeholder-transparent focus:outline-none "
								placeholder="john@doe.com"
							/>
							<label
								htmlFor="email"
								className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all 
								peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-black peer-placeholder-shown:text-md peer-focus:-top-2.5 peer-focus:text-white peer-focus:text-sm"
							>
								Email address
							</label>
						</div> */}
						<InputFieldComponent
							type="text"
							name="eventName"
							placeholder=""
							labelValue="Event Name"
							required={true}
							value={eventCreds.eventName}
							onChangeFnHandler={handleInputFieldChange}
						/>
						<InputFieldComponent
							type="text"
							name="eventCategory"
							placeholder=""
							labelValue="Event Category"
							required={true}
							value={eventCreds.eventCategory}
							onChangeFnHandler={handleInputFieldChange}
						/>
						<InputFieldComponent
							type="text"
							name="venue"
							placeholder=""
							labelValue="Event venue"
							required={true}
							value={eventCreds.venue}
							onChangeFnHandler={handleInputFieldChange}
						/>
						<InputFieldComponent
							type="date"
							name="date"
							placeholder=""
							labelValue="Event Date"
							required={true}
							value={eventCreds.date}
							onChangeFnHandler={handleInputFieldChange}
						/>
						<InputFieldComponent
							type="text"
							name="volunteerRequired"
							placeholder=""
							labelValue="Volunteers Required"
							required={true}
							value={eventCreds.volunteerRequired}
							onChangeFnHandler={handleInputFieldChange}
						/>
						<div className="relative w-full">
							<textarea
								id="desc"
								rows={5}
								name="desc"
								className="peer w-full px-3 py-2 outline-none text-white bg-transparent border border-white/30 rounded-md placeholder-transparent focus:outline-none "
								placeholder=""
								value={eventCreds.desc}
								onChange={handleInputFieldChange}
								required
							/>
							<label
								htmlFor={"desc"}
								className="absolute left-3 -top-2.5 text-white bg-black px-2 text-sm transition-all 
								peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-placeholder-shown:bg-black peer-placeholder-shown:text-md peer-focus:-top-2.5 peer-focus:text-white peer-focus:text-sm"
							>
								Event Description
							</label>
						</div>
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
