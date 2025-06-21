import React from 'react';
import { useNavigate } from "react-router-dom";

const BackButton = (path) => {
    const navigate =useNavigate()
    return (
        <li><div class="btn btn-primary " ><a href={path}>Profile</a></div></li>
    );
}

export default BackButton;
