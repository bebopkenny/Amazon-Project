export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2);
}

export default formatCurrency; // Each file must only have 1 export file