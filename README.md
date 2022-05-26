# @thacash/cash_finance

[![npm (scoped)](https://img.shields.io/npm/v/@thacash/cash_finance.svg)](https://www.npmjs.com/package/@thacash/cash_finance)
<!-- [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@thacash/cash_finance.svg)](https://www.npmjs.com/package/@thacash/cash_finance)
 -->
Tools for options sellers.

## Install

```
$ npm install @thacash/cash_finance
```

## Usage

```js
const cashfinance = require("@thacash/cash_finance");

cashfinance.getContractIncomePercent(contractPrice, stockPrice);
//=> 28.79

```

## Methods

```js
const cashfinance = require("@thacash/cash_finance");

console.log(cashfinance);

//=> {
//=>   getContractPrice: [Function: getContractPrice],
//=>   getContractIncomePercent: [Function: getContractIncomePercent],
//=>   getStockPrice: [Function: getStockPrice],
//=>   getContractDays: [Function: getContractDays],
//=>   getContractDaysLeft: [Function: getContractDaysLeft],
//=>   getAnnualizedReturn: [Function: getAnnualizedReturn],
//=>   getStockIncreasePercent: [Function: getStockIncreasePercent],
//=>   getSellerGenerates: [Function: getSellerGenerates],
//=>   getOriginalStockValue: [Function: getOriginalStockValue],
//=>   getNewStockValueITM: [Function: getNewStockValueITM],
//=>   getSellerNetGainITM: [Function: getSellerNetGainITM]
//=> }
```
