export function formatCurrency(
    value: number,
    decimals: number = 2,
    locale: string = 'en-US',
    currency: string = 'USD',
): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}

export function formatNumber(
    value: number,
    decimals: number = 2,
    locale: string = 'en-US',
): string {
    return value.toLocaleString(locale, { maximumFractionDigits: decimals });
}
