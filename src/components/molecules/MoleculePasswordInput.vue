<template>
    <div class="relative w-full">
        <AtomInput :type="showPassword ? 'text' : 'password'" class="peer" />
        <span
            class="border-l-1 absolute right-0 top-0 flex h-full w-12 cursor-pointer items-center justify-center rounded-r bg-purple-400 text-white hover:bg-purple-500 peer-focus:border-purple-800 peer-focus:text-gray-100"
            @click="showPassword = !showPassword"
            ><i
                class="fa-solid"
                :class="{
                    'fa-eye': showPassword,
                    'fa-eye-slash': !showPassword
                }"
            ></i
        ></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AtomInput from '../atoms/AtomInput.vue'
let password = ref('')
let showPassword = ref(false)

defineEmits(['update:modelValue'])
</script>

<style></style>
