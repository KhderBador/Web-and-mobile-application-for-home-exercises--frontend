import React, { useEffect, useState } from "react";
import Header from "../components/header";
import NavBar from "../components/nav-bar";
import Footer from "../components/footer";
import TitleHead from "../components/title_head";
import CategoryBox from "../components/Category_Box";
import axios from "axios";
import { apiUrl } from "./cap";
import { Http } from '@capacitor-community/http';
import LogIn from "./Log_in";


const ProgramCategories = () => {
  const token=window.localStorage.getItem("token");
  const [categories, setcategories] = useState([]);
  const options = {
    url: apiUrl+"/types",
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    
  };
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("this is the token :" + token);
    console.log(apiUrl);
    console.log(apiUrl+"/types");
    axios
      .get(apiUrl+"/types", {
        headers: { 'Authorization': `Bearer ${token}` },
      })
      .then(
        (res) => setcategories(res.data)
        //res=>console.log(res.data[0].id)
      )
      .catch((error) => console.log(error));
    // try {
    //   const response = await Http.request(options);
    //   console.log('Data:', response.data);
    //   setcategories(response.data)
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  }, [token]);
  
  return !token ? (
    <div>
     
      <LogIn/>
    </div>
  ) : (
    <div>
      <NavBar />
      <Header />
      <div className="programCategories">
      
      <div className="container">
        <TitleHead Tiltle="START A PLAN  OF MUILTIPLE CATEGORIES" />
        {/* <div class="row"><BackButton path='/'/></div> */}
        <div class="row">
          {categories.map((category) => (
            <div class="col-md-4">
              <CategoryBox
                name={category.TypeName}
                imagebox={apiUrl + category.TypeImage}
                description={category.TypeDescription}
                id={category.id}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    

      <Footer />
    </div>
  );
};

export default ProgramCategories;
