export interface Event {
	_id: string;
	eventName: string;
	userId: string;
	eventHostInfo: {
		name: string;
		email: string;
		phoneNumber: number;
	};
	eventCategory: string;
	volunteerRequired: number;
	volunteers: [
		{
			name: string;
			email: string;
			phoneNumber: number;
		},
	];
	date: string;
	venue: string;
	desc: string;
	upvotes: string[];
}

export interface EventsRegistered {
	eventName: string;
	eventHostInfo: {
		name: string;
		email: string;
		phoneNumber: number;
		hostId: string;
	};
	eventId: string;
}

export interface User {
	_id: string;
	name: string;
	email: string;
	password: string;
	phoneNumber: number;
	eventsRegistered: EventsRegistered[];
	eventsCreated: Event[];
}
