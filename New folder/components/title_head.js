import React from 'react';

const TitleHead = ({Tiltle}) => {
  return (
    <div class="row animate-box">
    <div class="col-md-8 col-md-offset-2 text-center section-heading">
        <h2 style={{fontWeight:'bold'}}>{Tiltle}</h2>
    </div>
    </div>
  );
}

export default TitleHead;
