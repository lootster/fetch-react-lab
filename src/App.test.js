import React from "react";
import App from "./App";
import { render, waitForElement } from "react-testing-library";

beforeEach(() => {
  fetch.resetMocks();
});

it("renders with 3 news articles", async () => {
  const mockNewsFeedResponse = {
    articles: [
      {
        source: {
          id: "hacker-news",
          name: "Hacker News"
        },
        author: "throwawaygoaway",
        title:
          "Ask HN: Cheap places to live with a good intellectual atmosphere?",
        description:
          "I'm a software engineer in the bay area and have been thinking about moving somewhere cheaper (in USA or aboard) where I can live cheaply and focus on my own intellectual pursuits. I'd love to be in a place where the living costs are low and where there exist…",
        url: "https://news.ycombinator.com/item?id=18164189",
        urlToImage: null,
        publishedAt: "2018-10-08T04:44:40Z",
        content:
          "Kuala Lumpur, Malaysia is an option to consider. Strategically located in growing Southeast Asia and well connected. Most folks in the city speaks English in the city, so you wont have issues getting around. There is a growing tech community here as well with… [+128 chars]"
      },
      {
        source: {
          id: "hacker-news",
          name: "Hacker News"
        },
        author: "oormicreations",
        title:
          "Show HN: PredictEd Update 1.1 released: An open sourced predictive text editor",
        description:
          "PredictEd 1.1 update can be downloaded from: https://github.com/oormicreations/PredictEd/releases (Windows only) What's new in this version: - Contexts - Different databases for different subjects or languages. - Spell checks - With custom dictionaries. - Re-…",
        url: "https://news.ycombinator.com/item?id=18162746",
        urlToImage: null,
        publishedAt: "2018-10-07T21:33:24Z",
        content:
          "PredictEd 1.1 update can be downloaded from: https://github.com/oormicreations/PredictEd/releases (Windows only) What's new in this version: - Contexts - Different databases for different subjects or languages. - Spell checks - With custom dictionaries. - Re-… [+902 chars]"
      },
      {
        source: {
          id: "hacker-news",
          name: "Hacker News"
        },
        author: null,
        title: "Ask HN: What is it like to run a VPN as a business?",
        description: "Comments",
        url: "https://news.ycombinator.com/item?id=18160618",
        urlToImage: null,
        publishedAt: "2018-10-07T14:11:28Z",
        content:
          "Hello, I'm going to set up my own VPN on some cloud hosting provider, and I'm toying with the idea of turning it into a small business. Is there anything I need to know beforehand? Is it really that easy, or are there legal issues I need to handle? Cheers"
      }
    ]
  };

  fetch.mockResponseOnce(JSON.stringify(mockNewsFeedResponse));

  const { container, getByText } = render(<App />);

  await waitForElement(() => getByText("Article Number:"));
  const articleList = container.querySelectorAll("ul li");
  expect(articleList).toHaveLength(3);
});
