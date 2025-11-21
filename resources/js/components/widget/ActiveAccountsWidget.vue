<script setup lang="ts">
import { formatNumber } from '@/lib/number-utils';
import { AggDataPoint } from '@/types/dashboard/agg';
import FocusedDataPointWidget from '@/components/widget/FocusedDataPointWidget.vue';

const mutator = (data: AggDataPoint) => formatNumber(data.value, 0);
</script>

<template>
    <FocusedDataPointWidget endpoint="/api/metrics/active-accounts"
                            :mutator="mutator"
    />
</template>
