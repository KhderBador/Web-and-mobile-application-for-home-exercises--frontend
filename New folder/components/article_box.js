import React from "react";
import image from "../images/t3.jpg"
import { useNavigate } from "react-router-dom";

const ArticleBox = ({ImageBox,name,id,text,author}) => {
  const navigate = useNavigate();
  return (
    <div className="article" onClick={() => {
      navigate("/articlepage", {state:{ ImageBox, name, id,text,author }}
      );
    }}>
      <div className="overlay"></div>
      <img src={ImageBox} className="article_image" alt="" />
      <h3>{name}</h3>
      
    </div>
  );
};

export default ArticleBox;
