<template>
    <component :is="props.as" :class="buttonClass" :disabled="props.disabled">
        <AtomButtonLoader v-if="props.isLoading" class="absolute" />

        <template v-if="props.isLeftIconLoading">
            <AtomIconLoader />
        </template>
        <template v-else>
            <div
                v-if="props.leftIcon"
                class="mr-2 flex h-5 w-5 items-center justify-center"
            >
                <div class="h-full w-full">
                    <component
                        :is="props.leftIcon"
                        :class="[
                            props.isLoading || props.isLeftIconLoading
                                ? 'invisible'
                                : ''
                        ]"
                    />
                </div>
            </div>

            <div
                class="flex h-5 w-5 items-center justify-center"
                v-if="$slots['left-icon']"
            >
                <span class="text-lg">
                    <slot name="left-icon"> </slot>
                </span>
            </div>
        </template>

        <span
            :class="[
                props.isLoading && 'invisible',
                $slots['left-icon'] || props.isLeftIconLoading ? 'ml-2' : '',
                $slots['right-icon'] || props.isRightIconLoading ? 'mr-2' : ''
            ]"
        >
            <slot />
        </span>

        <template v-if="props.isRightIconLoading">
            <AtomIconLoader />
        </template>
        <template v-else>
            <div
                class="flex h-5 w-5 items-center justify-center"
                v-if="$slots['right-icon']"
            >
                <span class="text-lg">
                    <slot name="right-icon"> </slot>
                </span>
            </div>

            <div
                v-if="props.rightIcon"
                class="ml-2 flex h-5 w-5 items-center justify-center"
            >
                <div class="h-full w-full">
                    <component
                        :is="props.rightIcon"
                        :class="[
                            props.isLoading || props.isRightIconLoading
                                ? 'invisible'
                                : ''
                        ]"
                    />
                </div>
            </div>
        </template>
    </component>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { computed } from 'vue'
import AtomButtonLoader from '@/components/atoms/AtomButtonLoader.vue'
import AtomIconLoader from '@/components/atoms/AtomIconLoader.vue'

const props: any = defineProps({
    leftIcon: Object,
    rightIcon: Object,
    isLoading: {
        type: Boolean,
        default: false
    },
    isLeftIconLoading: {
        type: Boolean,
        default: false
    },
    isRightIconLoading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    },
    outline: {
        type: Boolean,
        default: false
    },
    as: {
        type: [String, Object],
        default: 'button'
    },
    intent: {
        type: String,
        validator(value: string) {
            return [
                'primary',
                'secondary',
                'success',
                'warning',
                'danger'
            ].includes(value)
        },
        default: 'primary'
    },
    size: {
        type: String,
        validator(value: string) {
            return ['badge', 'sm', 'md', 'lg'].includes(value)
        },
        default: 'md'
    }
})

const buttonClass = computed(() => {
    return cva('inline-flex items-center justify-center border transition', {
        variants: {
            disabled: {
                true: 'disabled:text-gray-300 disabled:border-gray-400 disabled:bg-gray-400 disabled:hover:border-gray-400 disabled:hover:bg-gray-400 disabled:active:bg-gray-400 disabled:cursor-not-allowed'
            },
            rounded: {
                true: 'rounded-3xl',
                false: 'rounded-sm'
            },
            block: {
                true: 'w-full',
                false: 'w-auto'
            },
            size: {
                lg: 'px-6 py-3 text-lg',
                md: 'px-4 py-2 text-sm',
                sm: 'px-2 py-1 text-xs',
                badge: 'px-1 text-xxs font-semibold'
            }
        },
        compoundVariants: [
            {
                intent: 'primary',
                outline: true,
                class: 'text-blue-500 bg-white border-blue-500 hover:text-white hover:bg-blue-500 active:bg-blue-600'
            },
            {
                intent: 'primary',
                outline: false,
                class: 'text-white bg-blue-500 border-blue-500 hover:border-blue-400 hover:bg-blue-400 active:bg-blue-600'
            },
            {
                intent: 'secondary',
                outline: true,
                class: 'text-gray-500 bg-white border-gray-500 hover:text-white hover:bg-gray-500 active:bg-gray-600'
            },
            {
                intent: 'secondary',
                outline: false,
                class: 'text-white bg-gray-500 border-gray-500 hover:border-gray-400 hover:bg-gray-400 active:bg-gray-600'
            },
            {
                intent: 'success',
                outline: true,
                class: 'text-green-500 bg-white border-green-500 hover:text-white hover:bg-green-500 active:bg-green-600'
            },
            {
                intent: 'success',
                outline: false,
                class: 'text-white bg-green-500 border-green-500 hover:border-green-400 hover:bg-green-400 active:bg-green-600'
            },
            {
                intent: 'warning',
                outline: true,
                class: 'text-orange-500 bg-white border-orange-500 hover:text-white hover:bg-orange-500 active:bg-orange-600'
            },
            {
                intent: 'warning',
                outline: false,
                class: 'text-white bg-orange-500 border-orange-500 hover:border-orange-400 hover:bg-orange-400 active:bg-orange-600'
            },
            {
                intent: 'danger',
                outline: true,
                class: 'text-red-500 bg-white border-red-500 hover:text-white hover:bg-red-500 active:bg-red-600'
            },
            {
                intent: 'danger',
                outline: false,
                class: 'text-white bg-red-500 border-red-500 hover:border-red-400 hover:bg-red-400 active:bg-red-600'
            }
        ],
        defaultVariants: {
            intent: 'primary',
            outline: false,
            rounded: false,
            block: false,
            size: 'md'
        }
    })({
        intent: props.intent,
        outline: props.outline,
        disabled: props.disabled,
        rounded: props.rounded,
        block: props.block,
        size: props.size
    })
})
</script>

<style scoped></style>
