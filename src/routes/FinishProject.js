import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 100px 0;
`;

const Title = styled.span`
  width: 800px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const SubTitle = styled.span`
  width: 800px;
  font-size: 14px;
  padding-left: 20px;
  margin-bottom: 100px;
`;

const CardsContainer = styled.div`
  margin-bottom: 50px;
`;

const Name = styled.div`
  width: 800px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Cards = styled.div`
  width: 740px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 120px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  span {
    font-size: 14px;
    font-weight: 400;
    height: 30px;
    padding-right: 5px;
  }
  padding-bottom: 10px;
  padding-right: 10px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    padding-right: 0;
    height: auto;
    font-size: 16px;
    font-weight: 700;
  }
  padding-right: 5px;
`;

const CardImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const ReviewBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  width: 75px;
  height: 22px;
  font-size: 13px;
  border: none;
  border-radius: 15px;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  cursor: pointer;
  margin-left: 130px;
  margin-top: 18px;
`;

const FinishProject = () => {
  return (
    <Container>
      <Title>프로젝트가 종료되었습니다.</Title>
      <SubTitle>
        팀원 평가를 진행해주세요. 해당 평가는 팀원의 별점에 영향을 줍니다.
      </SubTitle>
      <CardsContainer>
        <Name>팀원 평가하기</Name>
        <Cards>
          <Card>
            <User>
              <CardImg />
              <span>이름</span>
            </User>
            <span>간단한 자기소개</span>
            <Link to="/reviewMember">
              <ReviewBtn>평가 하기</ReviewBtn>
            </Link>
          </Card>
          <Card>
            <User>
              <CardImg />
              <span>이름</span>
            </User>
            <span>간단한 자기소개</span>
            <ReviewBtn>평가 하기</ReviewBtn>
          </Card>
          <Card>
            <User>
              <CardImg />
              <span>이름</span>
            </User>
            <span>간단한 자기소개</span>
            <ReviewBtn>평가 하기</ReviewBtn>
          </Card>
          <Card>
            <User>
              <CardImg />
              <span>이름</span>
            </User>
            <span>간단한 자기소개</span>
            <ReviewBtn>평가 하기</ReviewBtn>
          </Card>
        </Cards>
      </CardsContainer>
    </Container>
  );
};
export default FinishProject;
