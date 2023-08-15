<script lang="ts">
    import {Slide} from '@components'

    export let avatar: string
</script>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[2rem]">(pause for a selfie)</h3>

            <img
                src={avatar}
                class="h-48 w-48 rounded-full"
                alt={`Avatar`}
            />
        </div>
    </div>
</Slide>

<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[8rem]">📸</h3>


            <img
                src={avatar}
                class="h-48 w-48 rounded-full"
                alt={`Avatar`}
            />
        </div>
    </div>
</Slide>
