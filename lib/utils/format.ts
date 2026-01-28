/**
 * Formats a date string or number into a readable format.
 * Default format: YYYY/MM/DD
 */
export function formatDate(date: string | number | Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
}

/**
 * Formats a number as a price with currency.
 */
export function formatPrice(amount: number, currency: string = "Rs"): string {
    return `${currency} ${amount.toLocaleString()}`;
}
