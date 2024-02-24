<script lang="ts">
	import { currentScene } from '$lib/stores';

	import About from './About';
	import Settings from './Settings';
	import Toolbar from './Toolbar';

	let isSettingsOpen = false;
	let isAboutShowing = false;

	function showAbout() {
		isAboutShowing = true;
	}

	function showSettings() {
		isSettingsOpen = true;
	}
</script>

<About bind:open={isAboutShowing} />

<Settings bind:open={isSettingsOpen} />

<div class="overlay" id="controls">
	<Toolbar on:openAbout={showAbout} on:openSettings={showSettings} />

	<a
		href="https://youtube.com/watch?v={$currentScene.videoID}"
		target="_blank"
		rel="noreferrer noopener"
		class="flex flex-row p-4 gap-2 items-center glow justify-start"
	>
		<iconify-icon width={18} icon="mdi:youtube" />Watch on YouTube
	</a>
</div>

<style lang="postcss">
	:global(body:not(.inactive)) {
		#controls {
			@apply !opacity-100 !translate-y-0;
		}
	}

	.overlay {
		@apply fixed z-30 inset-0 flex items-end justify-end flex-col opacity-0 transition-all duration-300 ease-in-out;
	}
</style>
