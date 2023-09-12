<template>
    <component
        :is="props.as"
        :class="[
            'inline-flex items-center justify-center',
            themeClass,
            sizeClass,
            roundedClass,
            blockClass
        ]"
        :disabled="props.disabled"
    >
        <AtomButtonLoader v-if="props.isLoading" class="absolute" />

        <component
            :is="props.leftIcon"
            :class="['mr-2 h-5 w-5', props.isLoading && 'invisible']"
        />

        <span v-if="$slots['left-icon']" class="left-icon flex items-center">
            <slot name="left-icon"> </slot>
        </span>

        <span :class="[props.isLoading && 'invisible']">
            <slot />
        </span>

        <span v-if="$slots['right-icon']" class="right-icon flex items-center">
            <slot name="right-icon" />
        </span>

        <component
            :is="props.rightIcon"
            :class="['ml-2 h-5 w-5', props.isLoading && 'invisible']"
        />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AtomButtonLoader from '@/components/atoms/AtomButtonLoader.vue'

const props: any = defineProps({
    leftIcon: Object,
    rightIcon: Object,
    isLoading: {
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
    variant: {
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

const themeClass = computed(() => {
    if (props.disabled) {
        return 'text-gray-300 border-none bg-gray-400 hover:bg-gray-400 active:bg-gray-400 cursor-not-allowed'
    } else if (props.outline) {
        switch (props.variant) {
            case 'primary':
                return 'text-blue-500 bg-white border border-blue-500 hover:text-white hover:bg-blue-500 active:bg-blue-600'
            case 'secondary':
                return 'text-gray-500 bg-white border border-gray-500 hover:text-white hover:bg-gray-500 active:bg-gray-600'
            case 'success':
                return 'text-green-500 bg-white border border-green-500 hover:text-white hover:bg-green-500 active:bg-green-600'
            case 'warning':
                return 'text-orange-500 bg-white border border-orange-500 hover:text-white hover:bg-orange-500 active:bg-orange-600'
            case 'danger':
                return 'text-red-500 bg-white border border-red-500 hover:text-white hover:bg-red-500 active:bg-red-600'
            default:
                return 'text-blue-500 bg-white border border-blue-500 hover:text-white hover:bg-blue-500 active:bg-blue-600'
        }
    } else {
        switch (props.variant) {
            case 'primary':
                return 'text-white bg-blue-500 border border-blue-500 hover:border-blue-400 hover:bg-blue-400 active:bg-blue-600'
            case 'secondary':
                return 'text-white bg-gray-500 border border-gray-500 hover:border-gray-400 hover:bg-gray-400 active:bg-gray-600'
            case 'success':
                return 'text-white bg-green-500 border border-green-500 hover:border-green-400 hover:bg-green-400 active:bg-green-600'
            case 'warning':
                return 'text-white bg-orange-500 border border-orange-500 hover:border-orange-400 hover:bg-orange-400 active:bg-orange-600'
            case 'danger':
                return 'text-white bg-red-500 border border-red-500 hover:border-red-400 hover:bg-red-400 active:bg-red-600'
            default:
                return 'text-white bg-blue-500 border border-blue-500 hover:border-blue-400 hover:bg-blue-400 active:bg-blue-600'
        }
    }
})

const sizeClass = computed(() => {
    switch (props.size) {
        case 'md':
            return 'px-4 py-2 text-sm'
        case 'sm':
            return 'px-2 py-1 text-xs'
        case 'lg':
            return 'px-4 py-3 text-lg'
        case 'badge':
            return 'px-1 text-xxs font-bold'
        default:
            return 'px-4 py-2 text-sm'
    }
})

const roundedClass = computed(() => {
    return props.rounded ? 'rounded-3xl' : 'rounded-sm'
})

const blockClass = computed(() => {
    return props.block ? 'w-full' : 'w-auto'
})
</script>

<style scoped>
.left-icon :slotted(i) {
    margin-right: 8px;
    font-size: 1rem;
}
.right-icon :slotted(i) {
    margin-left: 8px;
    font-size: 1rem;
}
</style>
