import React from "react";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/ArticlePage.css";

import TitleHead from "../components/title_head";
import { useLocation } from 'react-router-dom';

const ArticlePage = () => {
  const location=useLocation()
  const id =location.state.id
  const image =location.state.ImageBox
  const name=location.state.name
  const text=location.state.text
  const author=location.state.author
  

  return (
    <div>
      <NavBar />
      <Header />
      <div className="section_some_article">
        <div className="container">
        <div className="row">
            <TitleHead Tiltle={name} />
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="articleimage">
                <img src={image} alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 ">
              <div className="article_text">
                
                <p>
                  {text}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="author">
                  <h3><span>by:   </span>{author}</h3>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticlePage;
