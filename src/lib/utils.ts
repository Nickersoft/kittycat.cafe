import { sceneMap, scenes } from '$data/scenes';
import { stationMap, stations } from '$data/stations';
import { draw } from 'radash';
import { get } from 'svelte/store';

import { currentScene, currentStation, isPlaying } from './stores';

export function goToRandomScene(restartIsPlaying: boolean = true) {
	const scene = draw(scenes);

	restartIsPlaying && isPlaying.set(false);

	if (!scene) {
		goToRandomScene();
	} else {
		currentScene.set(draw(scenes)!);
	}
}

export function getVideoThumbnail(videoID: string, num: number = 3) {
	return `https://img.youtube.com/vi/${videoID}/hq${num}.jpg`;
}

export function selectRandomMusic() {
	currentStation.set(draw(stations)!);
}

export function goToRandomSceneWithMusic() {
	goToRandomScene();
	selectRandomMusic();
}

export function getSharableURL(url: URL) {
	const $currentScene = get(currentScene);
	const $currentStation = get(currentStation);
	const key = btoa(`${$currentScene.videoID}:${$currentStation.trackID}`);

	return `${url.origin}/?v=${key}`;
}

export function decodeSharableURL(url: URL) {
	const v = url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			const scene = sceneMap[videoID];
			const track = stationMap[audioID];

			if (scene && track) {
				return { scene, track };
			}
		}
	}

	return null;
}
