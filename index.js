import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "option-contracts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    // let topicsArray = matterResult.data.topics.split(", ");

    return {
      id,
      ...matterResult.data,
      // topicsArray,
    };
  });
  // Sort posts by order number in md files
  return allPostsData.sort(({ order: b }, { order: a }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    markdown: matterResult.content,
    ...matterResult.data,
  };
}

export const getContractPrice = (data) => {
  return (parseFloat(data.contract_price) * 100).toString();
};

export const getContractIncomePercent = (data) => {
  return (
    (parseFloat(data.contract_price) / parseFloat(data.stock_price)) *
    100
  )
    .toFixed(2)
    .toString();
};

export const getStockPrice = (data) => {
  return parseFloat(data.stock_price * 100)
    .toFixed(2)
    .toString();
};

export const getContractDays = (data) => {
  return Math.ceil(
    (new Date(data.contract_expire).getTime() -
      new Date(data.contract_start).getTime()) /
      (1000 * 3600 * 24)
  );
};

export const getContractDaysLeft = (data) => {
  return Math.ceil(
    (new Date(data.contract_expire).getTime() - new Date().getTime()) /
      (1000 * 3600 * 24)
  );
};

export const getAnnualizedReturn = (data) => {
  return (
    parseFloat((data.contract_price / parseFloat(data.stock_price)) * 100) *
    (365 /
      Math.ceil(
        (new Date(data.contract_expire).getTime() -
          new Date(data.contract_start).getTime()) /
          (1000 * 3600 * 24)
      ))
  ).toFixed(2);
};

export const getStockIncreasePercent = (data) => {
  return (
    100 *
    ((parseFloat(data.strike_price) - parseFloat(data.stock_price)) /
      parseFloat(data.stock_price))
  )
    .toFixed(2)
    .toString();
};

export const getSellerGenerates = (data) => {
  return (
    100 *
      ((parseFloat(data.strike_price) - parseFloat(data.stock_price)) /
        parseFloat(data.stock_price)) +
    parseFloat((data.contract_price / parseFloat(data.stock_price)) * 100)
  )
    .toFixed(2)
    .toString();
};

export const getOriginalStockValue = (data) => {
  return (parseFloat(data.stock_price) * 100).toFixed(2);
};

export const getNewStockValueITM = (data) => {
  return (
    (parseFloat(data.strike_price) + parseFloat(data.contract_price)) *
    100
  ).toFixed(2);
};

export const getSellerNetGainITM = (data) => {
  return (
    (
      (parseFloat(data.strike_price) + parseFloat(data.contract_price)) *
      100
    ).toFixed(2) - (parseFloat(data.stock_price) * 100).toFixed(2)
  );
};
