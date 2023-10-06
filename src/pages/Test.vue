<template>
    <button
        class="inline-flex w-auto items-center justify-center rounded-sm border border-blue-500 bg-blue-500 px-4 py-2 text-sm text-white transition hover:border-blue-400 hover:bg-blue-400 active:bg-blue-600"
        @click="loadButton"
    >
        <!-- <div
            class="flex h-5 w-5 items-center justify-center"
            v-if="!isButtonLoading"
        >
            <span class="left-icon text-base">
                <i class="fa-solid fa-envelope"></i>
            </span>
        </div> -->

        <div
            class="flex h-5 w-5 items-center justify-center"
            v-if="!isButtonLoading"
        >
            <IconDocumentation class="w-full" />
        </div>
        <AtomIconLoader v-else />
        <span class="ml-2"> Disabled Button </span>
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AtomIconLoader from '@/components/atoms/AtomIconLoader.vue'
import IconDocumentation from '@/components/icons/IconDocumentation.vue'
let isButtonLoading = ref(false)

function loadButton() {
    isButtonLoading.value = true

    setTimeout(() => {
        isButtonLoading.value = false
    }, 2000)
}
</script>
