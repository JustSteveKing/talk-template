<script lang="ts">
	export let file: string
</script>

{#if file}
	<section data-markdown={file} />
{:else}
	<section data-markdown>
		<div data-template class="prose">
			<slot />
		</div>
	</section>
{/if}
