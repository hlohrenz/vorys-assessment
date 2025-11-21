<script setup lang="ts">
import { Chart } from 'highcharts-vue';

type Props = {
    options: Highcharts.Options;
}

const { options } = defineProps<Props>()
</script>

<template>
    <div class="relative w-full h-full">
        <Chart :options="options" class="absolute h-full w-full" />
    </div>
</template>
