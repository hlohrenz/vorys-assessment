<script setup lang="ts">
import WidgetContentLoading from '@/components/ui/widget/WidgetContentLoading.vue';
import Widget from '@/components/ui/widget/Widget.vue';
import WidgetContent from '@/components/ui/widget/WidgetContent.vue';
import WidgetFocusedDataPoint from '@/components/ui/widget/WidgetFocusedDataPoint.vue';
import { useWidgetData } from '@/composables/useWidgetData';
import { AggDataPoint } from '@/types/dashboard/agg';
import { computed } from 'vue';

type Props = {
    endpoint: string;
    mutator?: (data: AggDataPoint) => unknown;
}

const { endpoint, mutator } = defineProps<Props>();
const { data, isLoading } = useWidgetData<AggDataPoint>(endpoint);
const amount = computed(() => data.value ? mutator ? mutator(data.value) : data.value : 0)
</script>

<template>
    <Widget class="aspect-video">
        <WidgetContent
            class="flex flex-col items-center justify-center"
            v-if="data"
        >
            <WidgetFocusedDataPoint>
                {{ amount }}
                <template #label>{{ data.label }}</template>
            </WidgetFocusedDataPoint>
        </WidgetContent>
        <WidgetContentLoading :is-loading="isLoading" />
    </Widget>
</template>
