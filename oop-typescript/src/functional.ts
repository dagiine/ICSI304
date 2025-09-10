import { cart, Item } from './data';

// 1) food нийлбэр (цэвэр функц)
export const totalFood = (items: readonly Item[]): number =>
    items
        .filter(i => i.category === 'food')
        .reduce((sum, i) => sum + i.price * i.qty, 0);

// 2) хамгийн үнэтэй (гадны төлөв өөрчлөхгүй)
export const mostExpensive = (items: readonly Item[]): Item | null =>
    items.reduce((max: Item | null, cur) => (max && max.price > cur.price ? max : cur), null);

// 3) VIP хөнгөлөлт (тасархай округлалтгүйгээр жишээ)
export const applyVipIfNeeded = (total: number): number =>
    total > 100_000 ? Math.round(total * 0.95) : total;

// нийлбэр:
const grandTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

// Гаралт
console.log({
    foodSum: totalFood(cart),
    maxItem: mostExpensive(cart)?.name,
    grandTotal,
    finalTotal: applyVipIfNeeded(grandTotal),
});