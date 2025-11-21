<script setup lang="ts">
import { formatCurrency } from '@/lib/number-utils';
import { AggDataPoint } from '@/types/dashboard/agg';
import FocusedDataPointWidget from '@/components/widget/FocusedDataPointWidget.vue';

const mutator = (data: AggDataPoint) => formatCurrency(data.value ?? 0, 0);
</script>

<template>
    <FocusedDataPointWidget endpoint="/api/metrics/monthly-sales"
                            :mutator="mutator"
    />
</template>
