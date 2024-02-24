import type { Scene } from '$lib/types';
import { objectify } from 'radash';

const scenes: Scene[] = [
	{
		videoID: 'kPLqdi74M8w',
		offset: { end: 30 }
	},
	{
		videoID: 'WF19UBbW9TM',
		offset: { start: 60, end: 60 }
	},
	{
		videoID: 'zZdGUrZDSkY',
		offset: { start: 60, end: 60 }
	},
	{
		videoID: 'IFL0eFDxyFQ',
		offset: { start: 30, end: 120 },
		length: 900
	},
	{
		videoID: 'PX7Oy4ttC48',
		offset: { start: 60, end: 60 }
	},
	{
		videoID: 'J1FdJsju4QY',
		offset: { start: 60, end: 60 }
	},
	{
		videoID: 'CDzG2RaZORo',
		offset: { start: 60, end: 60 }
	},
	{
		videoID: 'i146TDYlxYQ',
		offset: { start: 60, end: 60 }
	}
];

const sceneMap = objectify(scenes, ({ videoID }) => videoID);

export { scenes, sceneMap };
