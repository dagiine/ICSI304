import { Item, cart } from './data';

class ShoppingCart {
    #items: Item[] = []; //# private

    constructor(items: Item[] = []) {
        this.#items = [...items]; 
    } // иммутабилити-Дотроо өөрчлөх бус гаднаас өөрчлөх

    add(item: Item) {
        this.#items = [...this.#items, item];
    }

    get items(): readonly Item[] {
        return this.#items;
    }

    totalFood(): number {
        return this.#items
            .filter(i => i.category === 'food')
            .reduce((sum, i) => sum + i.price * i.qty, 0);
    }

    mostExpensive(): Item | null {
        if (this.#items.length === 0) return null;
        return this.#items.reduce(
            (max, current) => (max.price > current.price ? max : current)
        );
    }

    grandTotal(): number {
        return this.#items.reduce((sum, i) => sum + i.price * i.qty, 0);
    }

    finalTotal(): number {
        const total = this.grandTotal();
        return total > 100_000 ? Math.round(total * 0.95) : total;
    }
}

const sc = new ShoppingCart(cart);

console.log({
    foodSum: sc.totalFood(),
    maxItem: sc.mostExpensive()?.name,
    grandTotal: sc.grandTotal(),
    finalTotal: sc.finalTotal(),
});