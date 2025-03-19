<script setup>
import { computed, watch } from "vue";

const props = defineProps({
    isLogin: Boolean,
});

const getIsLogin = computed(() => {
    return props.isLogin;
});

watch(props.isLogin, (newVal) => {
    console.log(newVal);
});

</script>

<template>
    {{ getIsLogin }}
    <dialog>
        
        <div class="rounded-xl border bg-card text-card-foreground shadow w-[350px]">
            <div class="flex flex-col gap-y-1.5 p-6">
                <h3 class="font-semibold leading-none tracking-tight">
                    Login
                </h3>
            <p class="text-sm text-muted-foreground">
                Please login to continue.
            </p>
        </div>
        <div class="p-6 pt-0">
            <form>
                <div class="grid w-full items-left gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <label for="username" 
                            class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Username
                        </label>
                        <input 
                            class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            id="username" 
                            placeholder="Username"
                        >
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <label for="password" 
                            class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Password
                        </label>
                        <input 
                            class="label flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            id="password" 
                            placeholder="Password"
                        >
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label 
                            for="framework" 
                            class="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Framework
                        </label>
                        <button 
                            role="combobox" 
                            type="button" 
                            aria-controls="reka-select-content-v-13-0" 
                            aria-expanded="false" 
                            aria-required="false" 
                            aria-autocomplete="none" 
                            dir="ltr" 
                            data-state="closed" 
                            
                            data-placeholder="" 
                            class="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:truncate text-start" 
                            id="framework">
                                <span 
                                    data-placeholder="Select" 
                                    style="pointer-events: none;"
                                >
                                    Select
                                </span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-width="2" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    class="lucide lucide-chevron-down-icon w-4 h-4 opacity-50 shrink-0" 
                                    aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                        </button>
                        <select 
                            aria-hidden="true" 
                            tabindex="-1" 
                            style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); white-space: nowrap; overflow-wrap: normal;"
                        >
                            <option value=""></option>
                            <option value="next"> Next.js</option>
                            <option value="sveltekit"> SvelteKit </option>
                            <option value="astro"> Astro </option>
                            <option value="nuxt"> Nuxt </option>
                        </select>
                    </div>

                </div>
            </form>
        </div>
        <div class="items-center p-6 pt-0 flex justify-between">
            <button 
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"> Cancel </button><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
                Deploy
            </button>
        </div>
    </div>
    </dialog>
</template>

<style lang="scss">
    // .login {
    //     background: #fff;
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
    //     top: 0;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     margin: 0 auto;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     z-index: 11;
    // }
    label.label {
        padding: 0.5em 0;
    }
    dialog {
        background: var(--color-dark-blue);
        margin: 0 auto;
        border-radius: 12px;
    }
</style>