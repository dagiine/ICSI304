import { cart, Item } from './data';

function totalFood(items: Item[]): number {
    return items
        .filter(item => item.category === 'food')
        .reduce((sum, item) => sum + item.price * item.qty, 0);
}

function mostExpensive(items: Item[]): Item | null {
    if (items.length === 0) return null;
    return items.reduce((max, item) => (item.price > max.price ? item : max), items[0]);
}

function applyVipIfNeeded(total: number): number {
    return total > 100_000 ? Math.round(total * 0.95) : total;
}

// “процедур” урсгал:
const foodSum = totalFood(cart);
const grandTotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
const maxItem = mostExpensive(cart);
const finalTotal = applyVipIfNeeded(grandTotal);
console.log({ foodSum, maxItem: maxItem?.name, grandTotal, finalTotal });