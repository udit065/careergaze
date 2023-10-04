'use client'
import React from 'react'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import { styled} from '@mui/material/styles';
import styles from '../styles/PostSection.module.css'
const CustomizedButton = styled(Button)`
    color:black;
    font-weight:bold ;
    width:200px ;
    margin:30px 0px 30px ;
    background-color: #4dd783!important;
  :hover {
    background-color: #2e8b57!important;
    color:white ;
  }
`;
const CustomizedText = styled(Typography)`
    color:black;
    font-weight:bold ;
    font-size:15px ;
    margin:10px 0px 0px 0px;
    width:150px ;
  :hover {
    text-decoration:underline ;
  }
`;
const PostSection = () => {
  return (
    <div className={styles.parent}>
    <CustomizedButton><i className="fa-solid fa-plus"></i> Post</CustomizedButton>
    <h1 style={{fontWeight:'bold',fontSize:'20px',width:'100px'}}>My Bowls</h1>
    <CustomizedText>Career Advice for...</CustomizedText>
    <CustomizedButton> <i className="fa-regular fa-circle"></i> Explore Bowls</CustomizedButton>
    </div>
  )
}

export default PostSection