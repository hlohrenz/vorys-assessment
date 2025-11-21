<template>
    <span class="mb-2 text-5xl font-black">
        <slot />
    </span>
    <span v-if="$slots.label" class="text-muted-foreground">
        <slot name="label" />
    </span>
</template>
