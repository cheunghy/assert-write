assert-write
============

This simple utility module is useful when you want to test a function's
output.

## Install

``` bash
npm install assert-write --saveDev
```

## Usage

``` js
var assertWrite = require('assert-write');
assertWrite(process.stdout, 'expected\n', function(){
  console.log("expected");
});
```
