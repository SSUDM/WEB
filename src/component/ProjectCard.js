import React, { useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from "../Img/WishHeart.svg";

const Card = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    margin: 0 10px 0 30px;
    font-family: "Pretendard-Regular";
    border: 2px solid #c8c8c8;
    border-radius: 20px;
`;
const ProjectDetail = styled.div`
    width: 90%;
    height: 55%;
    background-color: #aaaaaa;
    margin: 15px auto 0 auto;
`;
const Title = styled.div`
    width: 90%;
    font-weight: bold;
    font-size: 15px;
    margin: 4px auto 10px auto;
    text-align: left;
`;
const LikedButton = styled.button`
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    bottom: 10px;
    right: 10px;
    background-color: white;
    border: none;
    &:hover{
        color: pink;
    }
`;
const ProjectCard = () => {
    const [isWished, setIsWished] = useState(false);
    const wishHandler =() =>{
        setIsWished(!isWished);
    }
    // const wishCountHandler =() => {
    //     wishAddHandler()
    //     if (!isWishAdd) {
    //       setWishCount(wishCount +1)
    //       fetch("http://10.58.0.148:8000/product/dip", {
    //         method: "POST",
    //         body: JSON.stringify({
    //           "user_id": 8,
    //           "product_id": 2
    //         })
    //       })
    //     } else if (isWishAdd) {
    //       setWishCount(wishCount -1)
    //       fetch("http://10.58.0.148:8000/product/dip", {
    //         method: "POST",
    //         body: JSON.stringigy({
    //           "user_id": 8,
    //           "product_id": 2,
    //         })
    //       })
    //     }
    //   }   
  return (
    <div>
        <Card>
            <ProjectDetail/>
            <Title>제목을 입력하세요</Title>
            <LikedButton onClick={wishHandler}>
                {isWished?<Heart width="20px" fill="red" stroke="red"/>:<Heart width="20px"/>}
            </LikedButton>
        </Card>
    </div>
  )
}

export default ProjectCard