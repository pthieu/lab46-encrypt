# Overview

Simple encryption and decryption library you can use like a black box.

**NOTE: make sure your `KEY` is 32 characters (256-bit) as required by the AES-256 algorithm. If you're too lazy to create one, just use the included `randomKey()` function but remember to save your key somewhere**

**NOTE: make sure your `data` is a string, if you have an object, just `JSON.parse(data)` when using `encrypt`**

# Install

```
npm install --save lab46-ecrypt;
```

# Usage: Encrypt then Decrypt

```
const { encrypt, decrypt, randomKey } = require('lab46-encrypt');

const KEY = randomKey();
const data = {
  foo: 'bar',
  baz: 1,
};
const stringifiedData = JSON.stringify(data);

const encryptedData = encrypt({
  data: stringifiedData,
  KEY,
});

console.log(encryptedData)
// 71fcb290113dcb0290b08db29f13d94e:dc287290a465e011228e3ff64264b545883c40b8f43c0199d92f5da35fbb2046

const decryptedData = decrypt({ data: encryptedData, KEY });

console.log(JSON.parse(decryptedData));
// {
//   foo: 'bar',
//   baz: 1,
// };

```
