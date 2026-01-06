[![NPM version](https://img.shields.io/npm/v/@cookiehub/stub.svg?style=flat-square)](https://www.npmjs.com/package/@cookiehub/stub)
[![npm module downloads per month](http://img.shields.io/npm/dm/@cookiehub/stub.svg?style=flat)](https://www.npmjs.org/package/@cookiehub/stub)
[![InteractiveAdvertisingBureau](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es.svg?style=shield)](https://circleci.com/gh/InteractiveAdvertisingBureau/iabtcf-es)

# @cookiehub/stub

Cmp API Stub code.  Maybe included in commonjs loader or dropped directly on the page.

#### Installation

npm
```
npm install @cookiehub/stub
```

yarn
```
yarn add @cookiehub/stub
```
#### Using

##### include via module loading
```javascript
import * as cmpstub from '@cookiehub/stub';
```
or

```javascript
const cmpstub = require('@cookiehub/stub');
```

then execute:

```javascript
cmpstub();
```
this should generate the `__tcfapi()` window function with the queing functionality.

##### to drop on a page
```
git clone https://github.com/InteractiveAdvertisingBureau/iabtechlabtcf-es.git

cd iabtechlabtcf-es/modules/stub/

yarn // or npm install

yarn build // or npm run build
```

Built stub will be output to ./lib

##### Getting queue of commands

```javascript
const queue = __tcfapi();
console.log(queue); // [ ['command', 2, callback], ...]
```
