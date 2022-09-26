# NOTES

https://khalilstemmler.com/blogs/typescript/node-starter-project/

https://discordapp.com/channels/902568124350599239/1013527402674139268/1021967332026896445

https://discordapp.com/channels/902568124350599239/1013527402674139268/1022266429103411282

Hey @koakh can you try... 
Add moduleResolution: "Node16" in your tsconfig. (Will be in updated docs)


cd ~/Development/@SurrealDB/NestJs9SurrealDbDynamicModule

git clone https://github.com/surrealdb/surrealdb.js.git
cd surrealdb.js
npm i -G rollup
npm run build

cd packages/app-lib
npm i ../../surrealdb.js/

fix is using
https://discordapp.com/channels/902568124350599239/1013527402674139268/1022283678010843176

tip
https://github.com/microsoft/TypeScript/issues/46213

@Tobie at SurrealDB 
already I already fix my problem of nodejs and TS imports with new 0.4.0
just use this import with // @ts-expect-error and it works
// @ts-expect-error
import Surreal from 'surrealdb.js';

const db = new Surreal('http://127.0.0.1:8000/rpc');

https://github.com/surrealdb/surrealdb.js/pull/39
