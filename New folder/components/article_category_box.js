import React from "react";

import { useNavigate } from "react-router-dom";

const ArticleCategoryBox = ({imagebox,name,id}) => {
  const navigate = useNavigate();
  return (
    
      <div className="article " onClick={() => {
        navigate("/articlesofsomecategory", {state:{id}}
        );
      }}>
        <div className="overlay"></div>
        <img src={imagebox} className="article_image" alt="aa"/>
        <h3>{name}</h3>
        
      </div>
    
  );
};

export default ArticleCategoryBox;
