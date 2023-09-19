<template>
    <div class="space-y-8">
        <MoleculeFieldsetBox title="Basic Buttons">
            <AtomButton> Button </AtomButton>
            <AtomButton as="a" href="https://youtube.com" target="_blank">
                Link Button
            </AtomButton>
            <AtomButton as="router-link" :to="{ name: 'inputs' }">
                Router Link Button
            </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Button Sizes">
            <AtomButton size="badge"> Button badge </AtomButton>
            <AtomButton size="sm"> Button Sm </AtomButton>
            <AtomButton size="md"> Button Md </AtomButton>
            <AtomButton size="lg"> Button Lg </AtomButton>
            <AtomButton block> Button Block </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Theme Buttons">
            <AtomButton variant="primary"> Primary </AtomButton>
            <AtomButton variant="secondary"> Secondary </AtomButton>
            <AtomButton variant="success"> Success </AtomButton>
            <AtomButton variant="warning"> Warning </AtomButton>
            <AtomButton variant="danger"> Danger </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Outline Buttons">
            <AtomButton variant="primary" outline> Primary </AtomButton>
            <AtomButton variant="secondary" outline> Secondary </AtomButton>
            <AtomButton variant="success" outline> Success </AtomButton>
            <AtomButton variant="warning" outline> Warning </AtomButton>
            <AtomButton variant="danger" outline> Danger </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Icon Buttons (Via prop)">
            <AtomButton :leftIcon="IconTooling"> Icon Left </AtomButton>
            <AtomButton :rightIcon="IconSupport"> Icon Right </AtomButton>
            <AtomButton :leftIcon="IconCommunity" :rightIcon="IconEcosystem">
                Left Right Button
            </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Icon Buttons (Via slot)">
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
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Badge Buttons">
            <AtomButton size="badge" variant="primary"> Primary </AtomButton>
            <AtomButton size="badge" variant="secondary">
                Secondary
            </AtomButton>
            <AtomButton size="badge" variant="success"> Success </AtomButton>
            <AtomButton size="badge" variant="warning"> Warning </AtomButton>
            <AtomButton size="badge" variant="danger"> Danger </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Loading & Disabled Buttons">
            <AtomButton disabled :leftIcon="IconDocumentation">
                Disabled Button
            </AtomButton>
            <AtomButton isLoading>
                <IconEcosystem />
            </AtomButton>
            <AtomButton isLoading disabled>
                <IconEcosystem />
            </AtomButton>
            <AtomButton
                :isLoading="isButtonLoading"
                :disabled="isButtonLoading"
                @click.prevent="loadButton"
            >
                Loading Button
            </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Icon Loading Buttons">
            <AtomButton
                :leftIcon="IconEcosystem"
                :isLeftIconLoading="isButtonLoading"
                :disabled="isButtonLoading"
                @click.prevent="loadButton"
            >
                Disabled Button
            </AtomButton>
            <AtomButton
                :rightIcon="IconDocumentation"
                :isRightIconLoading="isButtonLoading"
                :disabled="isButtonLoading"
                @click.prevent="loadButton"
            >
                Disabled Button
            </AtomButton>
            <AtomButton
                :isLeftIconLoading="isButtonLoading"
                :disabled="isButtonLoading"
                @click.prevent="loadButton"
            >
                <template #left-icon>
                    <i class="fa-solid fa-envelope"></i>
                </template>
                Disabled Button
            </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Rounded Buttons">
            <AtomButton rounded> Rounded </AtomButton>
            <AtomButton rounded> SM </AtomButton>
            <AtomButton rounded>
                <IconEcosystem />
            </AtomButton>
        </MoleculeFieldsetBox>

        <MoleculeFieldsetBox title="Text Links">
            <AtomLink href="https://www.youtube.com/" target="_blank">
                A Tag Link
            </AtomLink>
            <AtomLink as="span" noTheme> Span Tag </AtomLink>
            <AtomLink as="router-link" to="/inputs"> Router Link </AtomLink>
            <AtomLink as="router-link" to="/inputs" noTheme>
                No Theme Link
            </AtomLink>
            <AtomLink as="router-link" to="/inputs" underline>
                Underline Link
            </AtomLink>
            <AtomLink as="router-link" to="/inputs" underline noTheme>
                Theme Underline Link
            </AtomLink>
        </MoleculeFieldsetBox>
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
import AtomLink from '@/components/atoms/AtomLink.vue'
import MoleculeFieldsetBox from '@/components/molecules/MoleculeFieldsetBox.vue'

let isButtonLoading = ref(false)

function loadButton() {
    isButtonLoading.value = true

    setTimeout(() => {
        isButtonLoading.value = false
    }, 2000)
}
</script>

<style scoped></style>
