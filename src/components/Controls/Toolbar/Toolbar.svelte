<script lang="ts">
	import { BAC_LINK } from '$lib/constants';
	import { createEventDispatcher } from 'svelte';

	import CopyToClipboard from './CopyToClipboard.svelte';
	import Fullscreen from './Fullscreen.svelte';
	import SupportText from './SupportText.svelte';
	import ToolbarButton from './ToolbarButton.svelte';
	import Tweet from './Tweet.svelte';
	import VisitorCount from './VisitorCount.svelte';

	const dispatch = createEventDispatcher();

	function handleOpenSettings() {
		dispatch('openSettings');
	}

	function handleOpenAbout() {
		dispatch('openAbout');
	}
</script>

<nav
	id="top-icons"
	class="
    absolute top-0 inset-x-0
    flex flex-row justify-end items-center
    px-4 py-2 pb-16
    z-50
    bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent
  "
>
	<VisitorCount />
	<SupportText />

	<div class="h-8 border-white/10 mr-5 border w-px" />

	<CopyToClipboard />

	<ToolbarButton icon="mdi:dollar" action={BAC_LINK} title="Support KKC" />

	<ToolbarButton icon="mdi:city" action="https://cityhop.cafe" title="Visit CityHop" />

	<Tweet />

	<ToolbarButton icon="mdi:heart" action={handleOpenAbout} title="About" />
	<ToolbarButton icon="mdi:settings" action={handleOpenSettings} title="Settings" />

	<Fullscreen />
</nav>
