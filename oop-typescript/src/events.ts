import { EventEmitter } from 'events';
import { cart, Item } from './data';

class CartEvents extends EventEmitter {}
const bus = new CartEvents();

// Хэрэглэх
bus.on('ITEM_ADDED', (item: Item) => console.log('Нэмэгдсэн:', item.name));
bus.on('CHECKOUT', (total: number) => console.log('Нийт checkout:', total));
bus.on('FOOD_SUM', (total: number) => console.log('Нийт үнэ:', total)); 

// энгийн cart “модуль”
let items: Item[] = [...cart];

function addItem(item: Item) {
    items = [...items, item];
    bus.emit('ITEM_ADDED', item);
}

function checkout(): number {
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    bus.emit('CHECKOUT', total);
    return total;
}

function foodSum(): number {
    const total = items
        .filter(i => i.category === 'food')
        .reduce((sum, i) => sum + i.price * i.qty, 0);
    bus.emit('FOOD_SUM', total); 
    return total;
}

// ажиллуулах
addItem({ name: 'Chocolate', price: 4200, qty: 3, category: 'food' });
checkout();
foodSum();
