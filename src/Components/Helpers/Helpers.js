const shortTitle = (title) => {
  const numberOfWordsToShow = 3;

  const wordsArray = title.split(" ");
  const shortenedTitle = wordsArray.slice(0, numberOfWordsToShow).join(" ");
  return shortenedTitle;
};

const searchQuery = (products, searchText) => {
  if (!searchText) return products;
  const result = products.filter((item) => {
    return item.title.toLowerCase().includes(searchText);
  });
  return result;
};
const seachCategory = (products, category) => {
  if (!category) return products;
  const result = products.filter((item) => {
    return item.category === category;
  });
  return result;
};

const queryAnalyse = (courentQuery, newQuery) => {
  //   console.log(courentQuery, newQuery);
  if (newQuery.search === "") {
    const { search, ...rest } = courentQuery;
    console.log(rest);
    return rest;
  }
  if (newQuery.category === "all") {
    const { category, ...rest } = newQuery;
    console.log(rest);
    return rest;
  }
  return { ...courentQuery, ...newQuery };
};

const saveQuery = (oldquery) => {
  const urlQuery = {};
  const search = oldquery.get("search");
  const category = oldquery.get("category");
  if (search) urlQuery.search = search;
  if (category) urlQuery.category = category;
  return urlQuery;
};
const checkCard = (selectproduct, payload) => {
  const result = selectproduct.find((data) => {
    return data.id === payload.id;
  });
  return result;
};

const sumCard = (products) => {
  const productCounter = products.reduce(
    (prev, curent) => prev + curent.selectCount,
    0
  );
  const total = products
    .reduce((prev, curent) => prev + curent.price * curent.selectCount, 0)
    .toFixed(2);
  return { productCounter, total };
};

export {
  shortTitle,
  searchQuery,
  seachCategory,
  queryAnalyse,
  saveQuery,
  checkCard,
  sumCard,
};
