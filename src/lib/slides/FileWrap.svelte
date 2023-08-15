<script lang="ts">
    import {Markdown, Slide} from '@components'
	export let file: string
</script>

<Slide animate>
    <Markdown file={file} />
</Slide>