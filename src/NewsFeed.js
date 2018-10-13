export default async function newsFeed() {
  const api = "";
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2018-10-11&to=2018-10-11&sortBy=popularity&apiKey=" + api
  );
  const data = await response.json();
  return data.articles;
}
