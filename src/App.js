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
    console.log(this.state.news);
    const { news } = this.state;

    return (
      <div className="App">
        <ul>
          {news.map(article => {
            return (
              <li key={article.title}>
                <span>Article Number: </span>
                <span>{article.title}</span>
                <span>{article.content}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
