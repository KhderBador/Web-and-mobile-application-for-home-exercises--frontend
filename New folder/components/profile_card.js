import React, { useState ,useEffect} from "react";
import image from "../images/t3.jpg";
import "../css/ProfileCard.css";
import TitleHead from "./title_head";
import axios from "axios";
import { apiUrl } from "../pages/cap.js";

const ProfileCard = () => {
  useEffect(() => {
    axios
    .get(apiUrl+"/getPersonalInformation", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        
      })
    // id=dayid
    .then(
      (res) => {
       setAvatar(res.data['image'])
       setName(res.data['name'])
       console.log('this is image :'+res.data);
      }

    )
    .catch((error) => console.log(error));
  }, []);






  

  const [selectedFile, setSelectedFile] = useState(null);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", selectedFile);
    try {
      const response = await axios.post(apiUrl+
        "/uplodeAvatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Avatar uploaded successfully:", response.data);
      axios
    .get(apiUrl+"/getAvatar", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        
      })
    // id=dayid
    .then(
      (res) => {
       setAvatar(res.data['image'])
       console.log('this is image :'+res.data);
      }

    )
    .catch((error) => console.log(error));

    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div className="profile_card">
      <div className="container">
      <div className="row">
        <TitleHead Tiltle={name} />
      </div>
      <div className="profile_down">
        <div className="row">
          <div className="col-md-6">
            <img src={apiUrl+avatar} alt="" />
          </div>
          <div className="col-md-6">
           
            <form onSubmit={handleFormSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} className="change_image_button"/>
              
              <button type="submit" className="upload_avatar_button">Set Avatar</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ProfileCard;
