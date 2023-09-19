<template>
    <div>
        <!-- Some more of UX improvements: add this classes to labels `pointer-text pointer-events-none`.  add "cursor-text" on the label. -->
        <!-- One thing left in there I think, -- cursor => label in text area cause issue to override the cursor-text - so the solution is label default & peer-focus 'cursor-default' and in peer-placeholder-shown it should be cursor-text -->
        <!-- why not use display: flex and change order? P.s. If you ask about the parent div that wraps the input and label tags having a flex col-reverse attribute, I don't think it would fix the problem. This is because the peer will still be listening to the previous sibling in the DOM (that is, in the HTML structure and not necessarily the component you see in the screen).  -->
        <!-- You should never animate “physical” properties such as “top” in your example. It’s not browser-friendly. Use “transform: translateY” instead. -->
        <div class="relative">
            <input
                id="email-float"
                name="email"
                type="text"
                class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                placeholder="john@doe.com"
            />
            <label
                for="email-float"
                class="pointer-events-none absolute -top-3.5 left-0 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >Email address</label
            >
        </div>
        <div class="relative mt-10">
            <input
                id="password-float"
                type="password"
                name="password"
                class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
                placeholder="Password"
            />
            <label
                for="password-float"
                class="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                >Password</label
            >
        </div>
        <input
            type="sumbit"
            value="Sign in"
            class="mt-20 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2"
        />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
