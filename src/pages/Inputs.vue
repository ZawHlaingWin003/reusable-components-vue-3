<template>
    <main class="space-y-8">
        <form @submit.prevent="submit">
            <fieldset class="mx-auto w-2/3 space-y-4 border p-4">
                <legend class="px-2 font-semibold">Normal Form Input</legend>
                <AtomInput
                    type="text"
                    placeholder="Name"
                    v-model="form.email"
                />
                <AtomInput
                    type="text"
                    placeholder="Email"
                    v-model="form.email"
                />
            </fieldset>
        </form>
        <form @submit.prevent="submit">
            <fieldset class="mx-auto w-2/3 space-y-4 border p-4">
                <legend class="px-2 font-semibold">Input with Label</legend>

                <div class="input-group">
                    <AtomLabel for="name" required>Username</AtomLabel>
                    <AtomInput
                        type="text"
                        v-model="form.name"
                        id="name"
                        required
                    />
                </div>

                <div class="input-group">
                    <AtomLabel for="password" required>Password</AtomLabel>
                    <AtomInput
                        type="password"
                        id="password"
                        v-model="form.password"
                        required
                    />
                    <AtomInputHelperMessage id="helper-password">
                        Should be at least 8 characters long.
                    </AtomInputHelperMessage>
                </div>
            </fieldset>
        </form>

        <form @submit.prevent="submit">
            <fieldset class="mx-auto w-2/3 space-y-4 border p-4">
                <legend class="px-2 font-semibold">Error Inputs</legend>

                <div class="input-group">
                    <AtomLabel for="name" required>Username</AtomLabel>
                    <AtomInput
                        type="text"
                        v-model="form.name"
                        :invalid="!!errors.name"
                        id="name"
                        required
                    />
                    <AtomInputErrorMessage v-if="errors.name">
                        {{ errors.name }}
                    </AtomInputErrorMessage>
                </div>

                <div class="input-group">
                    <AtomLabel for="password" required>Password</AtomLabel>
                    <AtomInput
                        type="password"
                        id="password"
                        v-model="form.password"
                        :invalid="!!errors.password"
                        required
                    />
                    <AtomInputErrorMessage v-if="errors.password">
                        {{ errors.password }}
                    </AtomInputErrorMessage>
                    <AtomInputHelperMessage id="helper-password">
                        Should be at least 8 characters long.
                    </AtomInputHelperMessage>
                </div>

                <AtomButton type="submit">Submit</AtomButton>
            </fieldset>
        </form>

        <form @submit.prevent="submit">
            <fieldset class="mx-auto w-2/3 space-y-4 border p-4">
                <legend class="px-2 font-semibold">Textarea</legend>
                <div class="input-group">
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
                <MoleculeInputGroup
                    label="Content"
                    required
                    :error="errors.content"
                >
                    <AtomAutosizeTextarea
                        :invalid="!!errors.content"
                        v-model="form.content"
                    />
                </MoleculeInputGroup>

                <AtomButton type="submit">Submit</AtomButton>
            </fieldset>
        </form>

        <form @submit.prevent="submit">
            <fieldset class="mx-auto w-2/3 space-y-4 border p-4">
                <legend class="px-2 font-semibold">All In One</legend>
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

                <AtomButton type="submit">Submit</AtomButton>
            </fieldset>
        </form>

        <form @submit.prevent="submit">
            <fieldset class="mx-auto w-2/3 space-y-4 border p-4">
                <legend class="px-2 font-semibold">Input With Icons</legend>
                <div class="input-group my-3">
                    <MoleculeIconInput>
                        <template #icon>
                            <IconCommunity />
                        </template>
                    </MoleculeIconInput>
                </div>

                <AtomButton type="submit">Submit</AtomButton>
            </fieldset>
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import AtomLabel from '../components/atoms/AtomLabel.vue'
import AtomInput from '@/components/atoms/AtomInput.vue'
import AtomButton from '@/components/atoms/AtomButton.vue'
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
    phone: '',
    password: '',
    title: '',
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
