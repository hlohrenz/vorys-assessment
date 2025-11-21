<script setup lang="ts">
import Widget from '@/components/ui/widget/Widget.vue';
import WidgetContent from '@/components/ui/widget/WidgetContent.vue';
import WidgetContentLoading from '@/components/ui/widget/WidgetContentLoading.vue';
import { useWidgetData } from '@/composables/useWidgetData';
import { formatNumber } from '@/lib/number-utils';
import { AggSale } from '@/types/dashboard/agg';
import { computed } from 'vue';
import WidgetFocusedDataPoint from '@/components/ui/widget/WidgetFocusedDataPoint.vue';

const { data, isLoading } = useWidgetData<AggSale>(
    '/api/metrics/active-accounts',
);
const amount = computed(() => formatNumber(data.value?.value ?? 0, 0));
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
