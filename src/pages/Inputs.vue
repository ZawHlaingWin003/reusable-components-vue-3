<template>
    <main>
        <form @submit.prevent="submit">
            <MoleculeInputGroup label="Name" required :error="errors.name">
                <AtomInput
                    type="text"
                    placeholder="Enter Your Name ..."
                    v-model="form.name"
                />
            </MoleculeInputGroup>
            <MoleculeInputGroup
                label="Email"
                id="email"
                required
                :error="errors.email"
                help="We'll not share your mail."
            >
                <AtomInput
                    type="text"
                    placeholder="Enter Your Email ..."
                    v-model="form.email"
                />
            </MoleculeInputGroup>

            <div class="input-group my-3">
                <MoleculeIconInput>
                    <template #icon>
                        <IconCommunity />
                    </template>
                </MoleculeIconInput>
            </div>

            <div class="input-group my-3">
                <MoleculePasswordInput></MoleculePasswordInput>
            </div>

            <div class="input-group my-3">
                <AtomLabel for="password" required>Password</AtomLabel>
                <AtomInput
                    type="text"
                    placeholder="Enter Your Password ..."
                    id="password"
                    v-model="form.password"
                    required
                    :invalid="!!errors.password"
                />
                <AtomInputErrorMessage v-if="errors.password">
                    {{ errors.password }}
                </AtomInputErrorMessage>
                <AtomInputHelperMessage id="helper-password">
                    Should be at least 8 characters long.
                </AtomInputHelperMessage>
            </div>

            <div class="input-group my-3">
                <AtomLabel for="content" required>Content</AtomLabel>
                <AtomTextarea
                    id="content"
                    v-model="form.content"
                    required
                    :invalid="!!errors.content"
                />
                <AtomInputErrorMessage v-if="errors.content">
                    {{ errors.content }}
                </AtomInputErrorMessage>
            </div>

            <div class="input-group my-3">
                <AtomLabel>Biography</AtomLabel>
                <AtomAutosizeTextarea rows="2" v-model="form.biography" />
            </div>

            <button
                type="submit"
                class="rounded-sm bg-blue-400 px-4 py-2 hover:bg-blue-300 active:bg-blue-500"
            >
                Submit
            </button>
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import AtomLabel from '../components/atoms/AtomLabel.vue'
import AtomInput from '@/components/atoms/AtomInput.vue'
import AtomInputErrorMessage from '../components/atoms/AtomInputErrorMessage.vue'
import AtomInputHelperMessage from '../components/atoms/AtomInputHelperMessage.vue'
import AtomTextarea from '@/components/atoms/AtomTextarea.vue'
import MoleculeInputGroup from '../components/molecules/MoleculeInputGroup.vue'
import AtomAutosizeTextarea from '../components/atoms/AtomAutosizeTextarea.vue'
import MoleculeIconInput from '../components/molecules/MoleculeIconInput.vue'
import IconCommunity from '@/components/icons/IconCommunity.vue'
import MoleculePasswordInput from '../components/molecules/MoleculePasswordInput.vue'

const form = ref({
    name: '',
    email: '',
    password: '',
    content: '',
    biography: ''
})

const errors: any = ref({})

function submit() {
    errors.value = {
        name: 'Name field is required',
        email: 'Email field is required',
        password: 'Password field is required',
        content: 'Content field is required'
    }
}
</script>
