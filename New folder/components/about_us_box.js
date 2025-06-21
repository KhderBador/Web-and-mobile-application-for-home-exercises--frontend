import React from 'react';

const AboutUsBox = ({ImageBox,DescriptionBox}) => {
  return (
    <div>
        <img src={ImageBox} alt="" ></img>
        <p>{DescriptionBox}</p>
    </div>
  );
}

export default AboutUsBox;
