export type AggSale = {
    label: string;
    value: number;
}

export type AggDateSales = {
    label: string;
    values: {
        [key: string]: number;
    }
}
