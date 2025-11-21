<script setup lang="ts">
import Widget from '@/components/ui/widget/Widget.vue';
import WidgetContent from '@/components/ui/widget/WidgetContent.vue';
import WidgetContentLoading from '@/components/ui/widget/WidgetContentLoading.vue';
import WidgetHeader from '@/components/ui/widget/WidgetHeader.vue';
import { useWidgetData } from '@/composables/useWidgetData';
import { AggDateSales } from '@/types/dashboard/agg';
import { computed } from 'vue';
import Chart from '@/components/ui/chart/Chart.vue';

const { data, isLoading } = useWidgetData<AggDateSales>(
    '/api/metrics/daily-sales',
);
const categories = computed(() => Object.keys(data.value?.values || {}));
const values = computed(() => Object.values(data.value?.values || {}));

const chartOptions = computed<Highcharts.Options>(() => {
    return {
        chart: {
            type: 'line',
        },
        xAxis: {
            categories: categories.value,
            gridLineWidth: 0,
        },
        yAxis: {
            title: {
                text: 'Revenue ($)',
            },
            gridLineDashStyle: 'Dash',
        },
        series: [
            {
                name: 'Daily Sales',
                data: values.value,
                color: '#4F46E5',
                type: 'line',
            } as Highcharts.SeriesOptionsType,
        ],
    };
});
</script>

<template>
    <Widget class="min-h-[100vh] flex-1 md:min-h-min">
        <template v-if="data">
            <WidgetHeader>{{ data.label }}</WidgetHeader>
            <WidgetContent>
                <Chart :options="chartOptions" />
            </WidgetContent>
        </template>
        <WidgetContentLoading :is-loading="isLoading" />
    </Widget>
</template>
