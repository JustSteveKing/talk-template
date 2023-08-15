<script lang="ts">
    import {Slide} from '@components'

    export let quote: string;
    export let author: string;
    export let company: string;
    export let avatar: string
</script>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <img
                src={avatar}
                class="h-48 w-48 rounded-full"
                alt={`Avatar of ${author}`}
            />
        </div>
    </div>
</Slide>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <img
                src={avatar}
                class="h-48 w-48 rounded-full"
                alt={`Avatar of ${author}`}
            />
            <blockquote class="px-2">
                <p class="text-left text-[2rem]">{quote}</p>
            </blockquote>
        </div>
    </div>
</Slide>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <img
                src={avatar}
                class="h-48 w-48 rounded-full"
                alt={`Avatar of ${author}`}
            />
            <blockquote class="px-2 space-y-2">
                <p class="text-left text-[2rem]">{quote}</p>

                <footer class="text-[2rem] italic text-right">
                    — {author}, <cite>{company}</cite>
                </footer>
            </blockquote>
        </div>
    </div>
</Slide>