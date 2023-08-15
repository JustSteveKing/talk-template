<script lang="ts">
    import { Slide } from "@components";

    export let title: string;
    export let subtitle: string;
    export let author: string;
    export let event: string;
</script>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <h1 class="text-[4rem]">{title}</h1>
    </div>
</Slide>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <h1 class="text-[2rem]">{title}</h1>
        <h3 class="text-[4rem]">{subtitle}</h3>
    </div>
</Slide>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <h1 class="text-[2rem]">{title}</h1>
        <h3 class="text-[4rem]">{subtitle}</h3>

        <div class="flex flex-row items-start justify-between space-x-4">
            <h3 class="text-[2rem]">{author}</h3>
        </div>
    </div>
</Slide>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <h1 class="text-[2rem]">{title}</h1>
        <h3 class="text-[4rem]">{subtitle}</h3>

        <div class="flex flex-row items-start justify-between space-x-4">
            <h3 class="text-[2rem]">{author}</h3>
            <h3 class="text-[2rem]">{event}</h3>
        </div>
    </div>
</Slide>
