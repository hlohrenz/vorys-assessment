<script setup lang="ts">
import WidgetContent from '@/components/ui/widget/WidgetContent.vue';
import { LoaderCircle } from 'lucide-vue-next';

type Props = {
    isLoading?: boolean;
}

const { isLoading = false } = defineProps<Props>();
</script>

<template>
    <WidgetContent
        class="flex items-center justify-center"
        v-if="isLoading"
    >
        <LoaderCircle class="animate-spin" />
    </WidgetContent>
</template>
