module.exports = getContractPrice = (contractPrice) => {
  return parseFloat(contractPrice) * 100;
};

module.exports = getContractIncomePercent = (contractPrice, stockPrice) => {
  return ((parseFloat(contractPrice) / parseFloat(stockPrice)) * 100).toFixed(
    2
  );
};

module.exports = getStockPrice = (stockPrice) => {
  return parseFloat(stockPrice * 100).toFixed(2);
};

module.exports = getContractDays = (contractExpire, contractStart) => {
  return Math.ceil(
    (new Date(contractExpire).getTime() - new Date(contractStart).getTime()) /
      (1000 * 3600 * 24)
  );
};

module.exports = getContractDaysLeft = (contractExpire) => {
  return Math.ceil(
    (new Date(contractExpire).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );
};

module.exports = getAnnualizedReturn = (
  contractExpire,
  contractPrice,
  contractStart,
  stockPrice
) => {
  return (
    parseFloat((contractPrice / parseFloat(stockPrice)) * 100) *
    (365 /
      Math.ceil(
        (new Date(contractExpire).getTime() -
          new Date(contractStart).getTime()) /
          (1000 * 3600 * 24)
      ))
  ).toFixed(2);
};

module.exports = getStockIncreasePercent = (stockPrice, strikePrice) => {
  return (
    100 *
    ((parseFloat(strikePrice) - parseFloat(stockPrice)) /
      parseFloat(stockPrice))
  ).toFixed(2);
};

module.exports = getSellerGenerates = (
  contractPrice,
  stockPrice,
  strikePrice
) => {
  return (
    100 *
      ((parseFloat(strikePrice) - parseFloat(stockPrice)) /
        parseFloat(stockPrice)) +
    parseFloat((contractPrice / parseFloat(stockPrice)) * 100)
  ).toFixed(2);
};

module.exports = getOriginalStockValue = (stockPrice) => {
  return (parseFloat(stockPrice) * 100).toFixed(2);
};

module.exports = getNewStockValueITM = (contractPrice, strikePrice) => {
  return ((parseFloat(strikePrice) + parseFloat(contractPrice)) * 100).toFixed(
    2
  );
};

module.exports = getSellerNetGainITM = (
  contractPrice,
  stockPrice,
  strikePrice
) => {
  return (
    ((parseFloat(strikePrice) + parseFloat(contractPrice)) * 100).toFixed(2) -
    (parseFloat(stockPrice) * 100).toFixed(2)
  );
};
