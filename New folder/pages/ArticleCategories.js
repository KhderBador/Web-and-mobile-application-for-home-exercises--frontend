import React, { useEffect, useState } from "react";
import ArticleCategoryBox from "../components/article_category_box";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/ArticleCategories.css";
import TitleHead from "../components/title_head";
import axios from "axios";
import MustLoginMessage from "../components/must_login_message";
import LoginForm from "../components/log_in_form";
import { apiUrl } from "./cap";

const ArticleCategories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    console.log("this is the token :" + localStorage.getItem("token"));
    axios
      .get(apiUrl+"/getArticleCategorires")
      .then(
        (res) => setcategories(res.data)
        //res=>console.log(res.data[0].id)
      )
      .catch((error) => console.log(error));
  }, []);

  return localStorage.getItem("token") === "" ? (
    <div>
      <NavBar />
      <Header />
      <MustLoginMessage />
      <LoginForm />
      <Footer />
    </div>
  ) : (
    <div>
      <NavBar />
      <Header />
      <div id="section_article_catigories">
        <div className="container">
          <TitleHead Tiltle="choose from multiple article categories :" />

          <div className="row">
            {categories.map((category) => (
              <div class="col-md-4">
                <ArticleCategoryBox
                  name={category.CategoryName}
                  imagebox={"http://localhost:8000" + category.CategoryImage}
                  id={category.id}
                />
              </div>
            ))}
            {/* <ArticleCategoryBox />
<ArticleCategoryBox />
<ArticleCategoryBox /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleCategories;
