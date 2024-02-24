<script lang="ts">
	import { BAC_LINK, NEW_ISSUE_LINK } from '$lib/constants';

	import ToolbarButton from './ToolbarButton.svelte';
</script>

<ToolbarButton variant="full" action={NEW_ISSUE_LINK} title="Feature your kitty" icon="mdi:plus" />
