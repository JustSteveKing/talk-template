<script lang="ts">
    import {Slide} from '@components'

    export let title: string;
</script>

<Slide animate>
    <div class="text-left space-y-6">
        <h1 class="text-[4rem]">{title}</h1>
    </div>
</Slide>

<Slide animate>
    <div class="text-left space-y-6">
        <h1 class="text-[2rem]">{title}</h1>
        <slot />
    </div>
</Slide>
