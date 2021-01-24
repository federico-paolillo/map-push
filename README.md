# map-push

Pushes new items to Array entries of a Map

## Introduction

Sometimes you have a `Map` with entries of type `Array` and you want to push new items to those entries.  
You also want to create a new `Array` initialized with the item you want to push if an entry for a particular key does not exist yet.  

To do that, I always end up doing something along the lines of:  

```javascript

const myMap = new Map();
const anItem = toPush;
const aKey = "some-key";

if (myMap.Has(aKey)) {

  const arrayEntry = myMap.get(aKey);
	
  arrayEntry.push(anItem);

}
else {

  myMap.set(aKey, [anItem]);

}

```

Which is boring, long and does not handle edge cases.  
So I thought: maybe I can write an utility function for that. Enter `map-push`.  

`map-push` exposes is a function called `mapPush` that encapsulates the code above and handles a few edge cases.  
What edge cases does `mapPush` handles, you say ? Well...

- `mapPush` will check if the entry is in fact an `Array` before pushing, and if not will fallback to use `Map.set()`.  
- `mapPush` will check if the `Map` to change is actually a `Map` and is not `null` or `undefined`.  
- `mapPush` will create a new `Array` only if the `Map` does not have entries for the key given.

So, how do you use `mapPush` ?

## Usage 

`mapPush` has the following signature: `mapPush(map, key, value)`  
You have to pass a `Map`, the key of an entry (that might not exists) and a value.  
In return you will get new lenght of the `Array` (like `Array.push()`).  

The NPM package is hybrid, that means that you get both the ES Modules or the CommonJS version. 

### With CommonJS

`const mapPush = require('map-push/cjs');`

### With ES Modules

`import mapPush from 'map-push'`

## Installation

You can get `mapPush` on NPM by running `npm install map-push`.  
`mapPush` is written in TypeScript, so typings are shipped with the package.  

Given that this package is a small utility function I advise against installing the package, instead, simply copy/paste the function.  


