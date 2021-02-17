// returns a randomly selected item from array of items

const choice = (items) => {
	const randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
};

/**
 * removes the first matching item from items, if item exists, and returns it. 
 * Otherwise returns undefined.
 */

const remove = (items, choice) => {
	for (let i = 0; i < items.length; i++) {
		if (items[i] === choice) {
			items.splice(items.indexOf(choice), 1);
			return choice;
		}
	}
};

export { choice, remove };
