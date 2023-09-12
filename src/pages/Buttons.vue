<template>
    <div class="space-y-8">
        <fieldset
            class="mx-auto flex w-2/3 flex-wrap items-center gap-4 border p-4"
        >
            <legend class="px-2 font-semibold">Basic Button Tags</legend>
            <AtomButton> Button </AtomButton>
            <AtomButton as="a" href="https://youtube.com" target="_blank">
                Link Button
            </AtomButton>
            <AtomButton as="router-link" :to="{ name: 'inputs' }">
                Router Link Button
            </AtomButton>
            <AtomButton
                as="a"
                href="https://youtube.com"
                :isLoading="isButtonLoading"
                :disabled="isButtonLoading"
                @click.prevent="loadButton"
            >
                Loading Button
            </AtomButton>
        </fieldset>

        <fieldset
            class="mx-auto flex w-2/3 flex-wrap items-center gap-4 border p-4"
        >
            <legend class="px-2 font-semibold">Button Sizes</legend>
            <AtomButton size="badge"> Button badge </AtomButton>
            <AtomButton size="sm"> Button Sm </AtomButton>
            <AtomButton size="md"> Button Md </AtomButton>
            <AtomButton size="lg"> Button Lg </AtomButton>
        </fieldset>

        <fieldset
            class="mx-auto flex w-2/3 flex-wrap items-center gap-4 border p-4"
        >
            <legend class="px-2 font-semibold">Button Theme</legend>
            <AtomButton variant="primary"> Primary </AtomButton>
            <AtomButton variant="secondary"> Secondary </AtomButton>
            <AtomButton variant="success"> Success </AtomButton>
            <AtomButton variant="warning"> Warning </AtomButton>
            <AtomButton variant="danger"> Danger </AtomButton>
        </fieldset>

        <fieldset
            class="mx-auto flex w-2/3 flex-wrap items-center gap-4 border p-4"
        >
            <legend class="px-2 font-semibold">Button Outline Theme</legend>
            <AtomButton variant="primary" outline> Primary </AtomButton>
            <AtomButton variant="secondary" outline> Secondary </AtomButton>
            <AtomButton variant="success" outline> Success </AtomButton>
            <AtomButton variant="warning" outline> Warning </AtomButton>
            <AtomButton variant="danger" outline> Danger </AtomButton>
        </fieldset>

        <fieldset
            class="mx-auto flex w-2/3 flex-wrap items-center gap-4 border p-4"
        >
            <legend class="px-2 font-semibold">Button Icon Placement</legend>
            <AtomButton :leftIcon="IconTooling"> Icon Left </AtomButton>
            <AtomButton :rightIcon="IconSupport"> Icon Right </AtomButton>
            <AtomButton :leftIcon="IconCommunity" :rightIcon="IconEcosystem">
                Left Right Button
            </AtomButton>

            <AtomButton>
                <template #left-icon>
                    <i class="fa-brands fa-searchengin"></i>
                </template>
                Icon Left
            </AtomButton>
            <AtomButton>
                Icon Right
                <template #right-icon>
                    <i class="fa-solid fa-cart-shopping"></i>
                </template>
            </AtomButton>
            <AtomButton>
                <template #left-icon>
                    <i class="fa-solid fa-envelope"></i>
                </template>
                Icon Left Right
                <template #right-icon>
                    <i class="fa-brands fa-x-twitter"></i>
                </template>
            </AtomButton>
        </fieldset>

        <fieldset
            class="mx-auto flex w-2/3 flex-wrap items-center gap-4 border p-4"
        >
            <legend class="px-2 font-semibold">Button Varients</legend>
            <AtomButton rounded> Rounded </AtomButton>
            <AtomButton rounded> SM </AtomButton>
            <AtomButton disabled :leftIcon="IconDocumentation">
                Disabled Button
            </AtomButton>
            <AtomButton block> Button Block </AtomButton>
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import AtomButton from '@/components/atoms/AtomButton.vue'
import IconTooling from '@/components/icons/IconTooling.vue'
import IconSupport from '@/components/icons/IconSupport.vue'
import IconCommunity from '@/components/icons/IconCommunity.vue'
import IconEcosystem from '@/components/icons/IconEcosystem.vue'
import IconDocumentation from '@/components/icons/IconDocumentation.vue'

let isButtonLoading = ref(false)

function loadButton() {
    isButtonLoading.value = true

    setTimeout(() => {
        isButtonLoading.value = false
    }, 2000)
}
</script>

<style scoped></style>
