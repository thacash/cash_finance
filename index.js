module.exports = {
  getContractPrice: function (contractPrice) {
    return parseFloat(contractPrice) * 100;
  },

  getContractIncomePercent: function (contractPrice, stockPrice) {
    return ((parseFloat(contractPrice) / parseFloat(stockPrice)) * 100).toFixed(
      2
    );
  },

  getStockPrice: function (stockPrice) {
    return parseFloat(stockPrice * 100).toFixed(2);
  },

  getContractDays: function (contractExpire, contractStart) {
    return Math.ceil(
      (new Date(contractExpire).getTime() - new Date(contractStart).getTime()) /
        (1000 * 3600 * 24)
    );
  },

  getContractDaysLeft: function (contractExpire) {
    return Math.ceil(
      (new Date(contractExpire).getTime() - new Date().getTime()) /
        (1000 * 3600 * 24)
    );
  },

  getAnnualizedReturn: function (
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
  },

  getStockIncreasePercent: function (stockPrice, strikePrice) {
    return (
      100 *
      ((parseFloat(strikePrice) - parseFloat(stockPrice)) /
        parseFloat(stockPrice))
    ).toFixed(2);
  },

  getSellerGenerates: function (contractPrice, stockPrice, strikePrice) {
    return (
      100 *
        ((parseFloat(strikePrice) - parseFloat(stockPrice)) /
          parseFloat(stockPrice)) +
      parseFloat((contractPrice / parseFloat(stockPrice)) * 100)
    ).toFixed(2);
  },

  getOriginalStockValue: function (stockPrice) {
    return (parseFloat(stockPrice) * 100).toFixed(2);
  },

  getNewStockValueITM: function getNewStockValueITM(
    contractPrice,
    strikePrice
  ) {
    return (
      (parseFloat(strikePrice) + parseFloat(contractPrice)) *
      100
    ).toFixed(2);
  },

  getSellerNetGainITM: function getSellerNetGainITM(
    contractPrice,
    stockPrice,
    strikePrice
  ) {
    return (
      ((parseFloat(strikePrice) + parseFloat(contractPrice)) * 100).toFixed(2) -
      (parseFloat(stockPrice) * 100).toFixed(2)
    );
  },
};
