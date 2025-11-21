import axios from 'axios';
import { onMounted, ref } from 'vue';

export const useWidgetData = <T>(url: string) => {
    const data = ref<T | null>(null);
    const isLoading = ref(true);

    const fetchData = async () => {
        isLoading.value = true;
        try {
            const response = await axios.get(url);
            data.value = response.data;
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(() => {
        fetchData();
    });

    return { data, isLoading };
};
