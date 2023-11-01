import styled from "styled-components";
import { ImStarFull } from "react-icons/im";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 100px 0;
`;

const Title = styled.span`
  width: 700px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 80px;
`;

const User = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 70px;
`;

const UserInfo = styled.div`
  h1 {
    margin-bottom: 10px;
  }
`;

const Border = styled.div`
  width: 500px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
`;

const StarContainer = styled.div`
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
  margin-bottom: 20px;
`;

const Stars = styled.div`
  width: 500px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
`;

const Star = styled.div`
  display: flex;
  h1 {
    font-size: 16px;
    margin: 0;
  }
`;

const RatingBox = styled.div`
  margin: 0 auto;

  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }
  :hover svg {
    color: black;
  }
  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .black {
    color: black;
  }
`;

const Review = styled.div`
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
  textarea {
    width: 480px;
    height: 100px;
    border: solid 1.5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    font-family: "Pretendard-Regular";
    resize: none;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
  margin-bottom: 50px;
`;

const CompleteBtn = styled.button`
  width: 160px;
  height: 30px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  font-family: "Pretendard-Regular";
  cursor: pointer;
`;

const ReviewMember = () => {
  const stars = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <Container>
      <Title>유미라 팀원에 대해 평가해주세요.</Title>
      <User>
        <UserImg />
        <UserInfo>
          <h1>유미라</h1>
          <span>프론트엔드</span>
        </UserInfo>
      </User>
      <Border />
      <StarContainer>
        <h1>평가항목</h1>
        <Stars>
          <Star>
            <h1>1. 전문성</h1>
            <RatingBox>
              {stars.map((el) => (
                <ImStarFull
                  key={el}
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && "black"}
                  size="20"
                />
              ))}
            </RatingBox>
          </Star>
        </Stars>
      </StarContainer>
      <Review>
        <h1>리뷰</h1>
        <textarea placeholder="간단한 리뷰를 작성해주세요." />
      </Review>
      <CompleteBtn>평가 완료하기</CompleteBtn>
    </Container>
  );
};
export default ReviewMember;
