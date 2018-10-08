export default async function newsFeed() {
  const api = "9d4d4c918f5d42b5a26d213141acf626";
  const response = await fetch(
    "https://newsapi.org/v2/everything?sources=hacker-news&apiKey=" + api
  );
  const data = await response.json();
  return data.articles;
}
