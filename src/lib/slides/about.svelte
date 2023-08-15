<script lang="ts">
    import {Slide, Icon} from '@components'

    export let author: string;
    export let role: string;
    export let company: string;
    export let github: string;
    export let x: string;
    export let avatar: string;
</script>

<!-- Name -->
<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[4rem]">{author}</h3>
        </div>
    </div>
</Slide>

<!-- Name and Image -->
<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[4rem]">{author}</h3>

            <img
                src={avatar}
                class="h-48 w-48 rounded-full"
                alt={`Avatar of ${github}`}
            />
        </div>
    </div>
</Slide>

<!-- Name, Image, and Github -->
<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[4rem]">{author}</h3>

            <div class="flex flex-col items-center justify-end">
                <img
                    src={avatar}
                    class="h-48 w-48 rounded-full"
                    alt={`Avatar of ${github}`}
                />

                <ul class="flex flex-col space-y-6 py-6">
                    <li class="col-span-1 flex items-center justify-center space-x-4">
                        <Icon
                            icon="github"
                            style="h-8 w-8 text-gray-50"
                        />
                        <span class="text-[1rem]">{github}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</Slide>

<!-- Name, Image, GitHub, and X -->
<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[4rem]">{author}</h3>

            <div class="flex flex-col items-center justify-end">
                <img
                    src={avatar}
                    class="h-48 w-48 rounded-full"
                    alt={`Avatar of ${github}`}
                />

                <ul class="flex flex-col space-y-6 py-6">
                    <li class="col-span-1 flex items-center justify-center space-x-4">
                        <Icon
                            icon="github"
                            style="h-8 w-8 text-gray-50"
                        />
                        <span class="text-[1rem]">{github}</span>
                    </li>
                    <li class="col-span-1 flex items-center justify-center space-x-4">
                        <Icon
                            icon="x"
                            style="h-8 w-8 text-gray-50"
                        />
                        <span class="text-[1rem]">{x}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</Slide>

<!-- Name, Image, GitHub, X, and Role -->
<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[4rem]">{author}</h3>

            <div class="flex flex-col items-center justify-end">
                <img
                    src={avatar}
                    class="h-48 w-48 rounded-full"
                    alt={`Avatar of ${github}`}
                />

                <ul class="flex flex-col space-y-6 py-6">
                    <li class="col-span-1 flex items-center justify-center space-x-4">
                        <Icon
                            icon="github"
                            style="h-8 w-8 text-gray-50"
                        />
                        <span class="text-[1rem]">{github}</span>
                    </li>
                    <li class="col-span-1 flex items-center justify-center space-x-4">
                        <Icon
                            icon="x"
                            style="h-8 w-8 text-gray-50"
                        />
                        <span class="text-[1rem]">{x}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-row items-center justify-center space-x-4">
            <h3 class="text-[2rem]">{role}</h3>
        </div>
    </div>
</Slide>

<!-- Name, Image, GitHub, X, Role, and Company -->
<Slide animate>
    <div class="flex flex-col items-start justify-center">
        <div class="w-full flex items-center justify-between space-x-4">
            <h3 class="text-[4rem]">{author}</h3>

            <div class="flex flex-col items-center justify-end">
                <img
                    src={avatar}
                    class="h-48 w-48 rounded-full"
                    alt={`Avatar of ${github}`}
                />

                <ul class="flex flex-col space-y-6 py-6">
                    <li class="col-span-1 flex items-center justify-center space-x-4">
                        <Icon
                            icon="github"
                            style="h-8 w-8 text-gray-50"
                        />
                        <span class="text-[1rem]">{github}</span>
                    </li>
                    <li class="col-span-1 flex items-center justify-center space-x-4">
                        <Icon
                            icon="x"
                            style="h-8 w-8 text-gray-50"
                        />
                        <span class="text-[1rem]">{x}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex flex-row items-center justify-center space-x-4">
            <h3 class="text-[2rem]">{role}</h3>
            <h3 class="text-[2rem]">@</h3>
            <h3 class="text-[2rem]">{company}</h3>
        </div>
    </div>
</Slide>
