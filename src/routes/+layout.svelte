<script>
	import '@fontsource-variable/figtree';
	import 'iconify-icon';

	import figtreeVariableItalic from '@fontsource-variable/figtree/files/figtree-latin-wght-italic.woff2';
	import figtreeVariable from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2';
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';

	import '../app.postcss';

	import { onMount } from 'svelte';

	onMount(() => {
		navigator.mediaSession.setActionHandler('play', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('pause', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekbackward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekforward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('previoustrack', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('nexttrack', function () {
			/* Code excerpted. */
		});
	});

	const siteTitle = 'KittyCat Cafe';

	const siteDescription = 'Your virtual cat cafe 🐱';

	const siteURL = 'https://www.kittycat.cafe/';

	const ogImage = `${$page.url.origin}/og.jpg`;

	const twtImage = `${$page.url.origin}/twitter.jpg`;
</script>

<svelte:head>
	{#each [figtreeVariable, figtreeVariableItalic] as ft}
		<link rel="preload" as="font" crossorigin="anonymous" href={ft} type="font/woff2" />
	{/each}
</svelte:head>

<MetaTags
	title="KittyCat Cafe | Your virtual cat cafe 🐱"
	description={siteDescription}
	canonical={siteURL}
	openGraph={{
		url: siteURL,
		title: siteTitle,
		description: siteDescription,
		images: [{ url: ogImage }],
		siteName: 'KittyCat Cafe'
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
		image: twtImage
	}}
/>

<slot />
