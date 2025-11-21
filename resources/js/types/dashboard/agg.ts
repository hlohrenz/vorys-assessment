export type AggDataPoint = {
    label: string;
    value: number;
}

export type AggDataPoints = {
    label: string;
    values: {
        [key: string]: number;
    }
}
