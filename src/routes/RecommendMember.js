import React from 'react'
import MemberCard from '../component/MemberCard'
import styled from 'styled-components'

const RecommendMember = () => {
  return (
    <RecMemWrap>
        <Title>추천 팀원</Title>
        <CardWrap>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
        </CardWrap>
    </RecMemWrap>
  )
}

const RecMemWrap = styled.div`
    position: relative;
    width: 80%;
    text-align: center;
    margin: 50px auto 0 auto;
    font-family: "Pretendard-Regular";
`;
const Title = styled.h3`
    position: absolute;
    left: 140px;
`;
const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3,300px);
    position: absolute;
    top: 60px;
    left: 120px;
`;

export default RecommendMember