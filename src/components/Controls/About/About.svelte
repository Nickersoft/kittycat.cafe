<script lang="ts">
	import logo from '$images/logo.svg';
	import { clickOutside } from '$lib/actions';

	import Button from '../../Button.svelte';
	import FullScreenOverlay from '../FullScreenOverlay.svelte';

	export let open: boolean;
</script>

<FullScreenOverlay bind:open>
	<div class="about" use:clickOutside={() => (open = false)}>
		<img src={logo} alt="Logo" class="w-72" />

		<div class="divider" />

		<div class="flex flex-col items-center gap-8">
			<p>
				KittyCat Cafe is the world's cutest virtual coffee shop. It's a place to relax, listen to
				music, and watch an endless stream of adorable cats. Sit back, relax, and cuddle up 🐈☕
			</p>

			<ul>
				<li>Press <kbd>g</kbd> to visit a new kitty with new music.</li>
				<li>Press <kbd>k</kbd> to visit a new kitty without changing your music.</li>
				<li>Press <kbd>m</kbd> to switch to a random jazz station.</li>
			</ul>

			<p>Have a kitty or station you'd like to see on the site?</p>

			<Button
				action="https://github.com/Nickersoft/kittycat.cafe/issues/new/choose"
				icon="mdi:hand-back-left"
			>
				Open a Request
			</Button>

			<p class="text-sm italic">
				Psst... feel free to
				<a
					href="https://twitter.com/tylernickerson"
					rel="noreferrer"
					target="_blank"
					class="text-accent"
				>
					follow me on Twitter
				</a>
				or
				<a
					class="text-accent"
					href="https://github.com/Nickersoft/kittycat.cafe"
					rel="noreferrer"
					target="_blank"
				>
					contribute on GitHub!
				</a>
			</p>
		</div>
	</div>
</FullScreenOverlay>

<style lang="postcss">
	.about {
		@apply max-w-xl text-center mx-auto h-full flex flex-col justify-center items-center p-8;

		kbd {
			@apply kbd-sm kbd;
		}
	}
</style>
