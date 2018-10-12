import React, { Component } from "react";
import "./App.css";
import newsFeed from "./NewsFeed";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  async componentDidMount() {
    try {
      const news = await newsFeed();
      this.setState({
        news
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { news } = this.state;

    return (
      <div className="App">
        <ul>
          {news.map(article => {
            return (
              <div key={article.title}>
                <br />
                <div>
                  <strong><h3>{article.title}</h3></strong>
                </div>
                <div>{article.author}</div>
                <div>{article.content}</div>
                <div>
                  <a href={article.url}>{article.url}</a>
                </div>
                <div>{article.source.name}</div>
                <img src={article.urlToImage} alt="" />
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
