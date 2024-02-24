import { objectify } from 'radash';

import type { Station } from '$lib/types';

export const stations: Station[] = [
	{
		displayName: 'Relaxing Jazz Radio',
		name: 'Warm Jazz Relaxing Music ☕ Cozy Cabin with Coffee Shop Ambience | Relax Jazz Music for Study, Work',
		trackID: 'L5v9NRuWp8o',
		live: true
	},
	{
		displayName: 'Coffee Jazz Music Radio',
		name: 'Coffee Jazz Music - Chill Out Lounge Jazz Music Radio - 24/7 Live Stream - Slow Jazz',
		trackID: 'fEvM-OUbaKs',
		live: true
	},
	{
		displayName: 'Work & Jazz Piano Radio',
		name: 'Relaxing Jazz Piano Radio - Slow Jazz Music - 24/7 Live Stream - Music For Work & Study',
		trackID: 'Dx5qFachd3A',
		live: true
	},
	{
		displayName: 'Paris Cafe Radio: Positive Bossa Nova Jazz Music',
		name: 'Positive Bossa Nova Jazz Music for Relax, Good Mood - Paris Cafe Ambience',
		trackID: 'g6bn6XrhYdc',
		live: true
	}
];

export const stationMap = objectify(stations, (station) => station.trackID);
