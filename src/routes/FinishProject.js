import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMembers } from "../api";

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
  margin-bottom: 80px;
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
  background-color: #4754a3;
  color: white;
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

const Button = styled.button`
  width: 120px;
  height: 30px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  background-color: #4754a3;
  color: white;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  margin-top: 50px;
`;

const FinishProject = () => {
  const { projectId } = useParams();
  const { data: members } = useQuery({
    queryKey: ["members"],
    queryFn: () => getMembers(projectId.toString()),
  });

  return (
    <Container>
      <Title>프로젝트가 종료되었습니다.</Title>
      <SubTitle>
        팀원 평가를 진행해주세요. 해당 평가는 팀원의 별점에 영향을 줍니다.
      </SubTitle>
      <CardsContainer>
        <Name>팀원 평가하기</Name>
        <Cards>
          {members?.map((data) => (
            <Link
              to={`/profile/${data.uid}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card>
                <User>
                  <CardImg
                    src={
                      data.userImg !==
                      "https://developermatching.s3.ap-northeast-2.amazonaws.com/"
                        ? data.userImg
                        : "../../img/default_profile.png"
                    }
                  />
                  <span>{data?.nickName}</span>
                </User>
                <span>{data?.introduction}</span>
                <Link to="/reviewMember">
                  <ReviewBtn>평가 하기</ReviewBtn>
                </Link>
              </Card>
            </Link>
          ))}
        </Cards>
      </CardsContainer>
      <Link to={"/"}>
        <Button>메인으로</Button>
      </Link>
    </Container>
  );
};
export default FinishProject;
