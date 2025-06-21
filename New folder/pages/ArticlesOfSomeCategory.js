import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
// import "../css/ArticlesOfSomeCategory.css";
import ArticleBox from "../components/article_box";
import TitleHead from "../components/title_head";
import axios from "axios";
import { apiUrl } from "./cap";

const ArticlesOfSomeCategory = () => {
  const location = useLocation();
  //  console.log(location)
  const id = location.state.id;
  console.log(id);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl+"/getArticlesOfCategory/" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        withCredentials: true,
      })
      .then((res) => setArticles(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <div id="section_article_ofcatigory">
        <div className="container">
          <TitleHead Tiltle="choose from multiple articles :" />

          <div className="row">
            {articles.map((article) => (
              <div class="col-md-4 ">
                <ArticleBox
                  ImageBox={"http://localhost:8000" + article.ArticleImage}
                  name={article.ArticleName}
                  text={article.ArticleText}
                  author={article.ArticleAuthor}
                  id={article.id}
                  
                  // progress={program.ProgressRate}
                />
              </div>
            ))}
            {/* <ArticleBox/>
                  <ArticleBox/>
                  <ArticleBox/> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticlesOfSomeCategory;
