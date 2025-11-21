<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import MonthlySalesWidget from '@/components/widget/MonthlySalesWidget.vue';
import OpenDealsWidget from '@/components/widget/OpenDealsWidget.vue';
import ActiveAccountsWidget from '@/components/widget/ActiveAccountsWidget.vue';
import DailySalesWidget from '@/components/widget/DailySalesWidget.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

// Todo: Allow user to control widgets on dashboard? Set cookie.
// Each widget is it's own component so you can map widget cookie array to a Vue component that calls their own API endpoint: ['monthly-sales', 'open-deals', 'active-accounts', 'daily-sales']
// Dynamically load components so they are lazy loaded and don't run fetch data right away until they are rendered
// Also agg data endpoint would be better than multiple API calls in individual widgets
// If using Inertia, just send data from controller instead of hitting API endpoints, then you could reuse widget components for different keys since they won't hit individual endpoints
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div
            class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4"
        >
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                <MonthlySalesWidget />
                <OpenDealsWidget />
                <ActiveAccountsWidget />
            </div>
            <DailySalesWidget />
        </div>
    </AppLayout>
</template>
