import React, { useState } from 'react';
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

const SelectListWrapper = styled.div`
    position: relative;
    display: inline-block;
`;
const DropdownIcon = styled(FaAngleDown)`
    position: absolute;
    right: 10px;
    top: 20px; 
    transform: translateY(-50%);
    cursor: pointer;
    &:hover{
        color: #c8c8c8;
    }
`;
const Category = styled.div`
    width: 120px;
    padding: 8px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 20px;
    cursor: pointer;
    &:hover{
        border-color: #c8c8c8;
    }
`;
const Box = styled.div`
    width: 100px;
    padding: 10px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 20px;
    background-color: white;
    color: gray;
`;
const SelectBox = () => {
    const recruitment = [
        '전체',
        '프론트엔드',
        '백엔드',
        '안드로이드',
        'IOS',
        '디자인',
    ];
    const technique = [
        'React',
        'TypeScript',
        'JavaScript',
        'Vue',
        'Nextjs',
        'Nodejs',
        'Java',
        'Spring',
        'MySQL',
        'Python',
        'MongoDB',
        'Python',
        'Django',
        'php',
        'Figma',
        'ReactNative',
        'Kotlin',
        'Swift',
    ]
    const proficiency = [
        '초급',
        '중급',
        '상급',
    ];

    const [ isClicked, setIsClicked] = useState(false);
    const showList =() =>{
        setIsClicked(!isClicked);
    }

  return (
    <div>
        {/* <SelectListWrapper>
            <SelectList>
                {recruitment.map((item)=>(<option>{item}</option>))}
            </SelectList>
            <DropdownIcon/>
        </SelectListWrapper> */}
        <SelectListWrapper>
            <Category>기술 스택</Category>
            <DropdownIcon onClick={showList}/>
            {isClicked?<Box>{recruitment.map((item)=>(<div>{item}</div>))}</Box>:<div></div>}
        </SelectListWrapper>
    </div>
  )
}

export default SelectBox