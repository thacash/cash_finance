module.exports = function getContractPrice(contractPrice) {
  return parseFloat(contractPrice) * 100;
};

module.exports = function getContractIncomePercent(contractPrice, stockPrice) {
  return ((parseFloat(contractPrice) / parseFloat(stockPrice)) * 100).toFixed(
    2
  );
};

module.exports = function getStockPrice(stockPrice) {
  return parseFloat(stockPrice * 100).toFixed(2);
};

module.exports = function getContractDays(contractExpire, contractStart) {
  return Math.ceil(
    (new Date(contractExpire).getTime() - new Date(contractStart).getTime()) /
      (1000 * 3600 * 24)
  );
};

module.exports = function getContractDaysLeft(contractExpire) {
  return Math.ceil(
    (new Date(contractExpire).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );
};

module.exports = function getAnnualizedReturn(
  contractExpire,
  contractPrice,
  contractStart,
  stockPrice
) {
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

module.exports = function getStockIncreasePercent(stockPrice, strikePrice) {
  return (
    100 *
    ((parseFloat(strikePrice) - parseFloat(stockPrice)) /
      parseFloat(stockPrice))
  ).toFixed(2);
};

module.exports = function getSellerGenerates(
  contractPrice,
  stockPrice,
  strikePrice
) {
  return (
    100 *
      ((parseFloat(strikePrice) - parseFloat(stockPrice)) /
        parseFloat(stockPrice)) +
    parseFloat((contractPrice / parseFloat(stockPrice)) * 100)
  ).toFixed(2);
};

module.exports = function getOriginalStockValue(stockPrice) {
  return (parseFloat(stockPrice) * 100).toFixed(2);
};

module.exports = function getNewStockValueITM(contractPrice, strikePrice) {
  return ((parseFloat(strikePrice) + parseFloat(contractPrice)) * 100).toFixed(
    2
  );
};

module.exports = function getSellerNetGainITM(
  contractPrice,
  stockPrice,
  strikePrice
) {
  return (
    ((parseFloat(strikePrice) + parseFloat(contractPrice)) * 100).toFixed(2) -
    (parseFloat(stockPrice) * 100).toFixed(2)
  );
};
