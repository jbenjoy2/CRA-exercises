import fruits from './foods';
import { choice, remove } from './helpers';

let fruit = choice(fruits);
console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go! One ${fruit}`);
console.log(`Delicious! May I please have another?`);
let removed = remove(fruits, fruit);

console.log(
	`So sorry, we're all out of ${removed}. We have ${fruits.length} other fruits left, though!`
);
