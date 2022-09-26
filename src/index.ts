// @ts-expect-error
import Surreal from 'surrealdb.js';

const db = new Surreal('http://127.0.0.1:8000/rpc');
const log = (object: unknown, showLog: boolean = true) => {
	if (showLog) { 
		console.log(JSON.stringify(object, undefined, 2)) 
	}
};

async function main() {

	try {
		// signIn as a namespace, database, or root user
		await db.signin({
			user: 'root',
			pass: 'root',
		});

		// Select a specific namespace / database
		await db.use('test', 'test');

		// Create a new person with a random id
		let created = await db.create("person", {
			title: 'Founder & CEO',
			name: {
				first: 'Tobie',
				last: 'Morgan Hitchcock',
			},
			marketing: true,
			identifier: Math.random().toString(36).slice(2, 10),
		});
		log(created);

		// Update a person record with a specific id
		let updated = await db.change("person:jaime", {
			marketing: true,
		});
		log(updated);

		// Select all people records
		let people = await db.select("person");
		log(people);

		// Perform a custom advanced query
		let groups = await db.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', {
			tb: 'person',
		});
		log(groups);
	} catch (e) {
		console.error('ERROR', e);
	}
}

main();