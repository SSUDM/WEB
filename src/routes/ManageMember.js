import styled from "styled-components";
import { getApplicants, getMembers } from "../api";
import { useQuery } from "react-query";

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
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const CardsContainer = styled.div`
  margin-bottom: 50px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Cards = styled.div`
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

const Border = styled.div`
  width: 800px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 7px;
  margin-top: 12px;
`;

const AcceptBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  width: 45px;
  height: 24px;
  font-size: 14px;
  border: none;
  border-radius: 15px;
  font-family: "Pretendard-Regular";
  cursor: pointer;
`;

const DenyBtn = styled.button`
  background-color: white;
  width: 45px;
  height: 24px;
  font-size: 14px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-family: "Pretendard-Regular";
  cursor: pointer;
`;

const ManageMember = () => {
  const { data: members } = useQuery({
    queryKey: ["members"],
    queryFn: () => getMembers(),
  });

  const { data: applicants } = useQuery({
    queryKey: ["applicants"],
    queryFn: () => getApplicants(),
  });

  const onAccept = () => {
    /*
    try {
      const response = await axios.get(`api-address`);
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }*/
    console.log("수락되었습니다.");
  };

  const onDeny = () => {
    /*
    try {
      const response = await axios.get(`api-address`);
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }*/
    console.log("거절되었습니다.");
  };

  return (
    <Container>
      <Title>캡스톤 디자인1 > 팀원 관리</Title>
      <CardsContainer>
        <Name>팀원</Name>
        <Cards>
          {members?.map((data) => (
            <Card>
              <User>
                <CardImg />
                <span>{data?.userName}</span>
              </User>
              <span>{data?.introduction}</span>
            </Card>
          ))}
        </Cards>
      </CardsContainer>
      <Border />
      <CardsContainer>
        <Name>지원자</Name>
        <Cards>
          {applicants?.map((data) => (
            <Card>
              <User>
                <CardImg />
                <span>{data?.userName}</span>
              </User>
              <span>{data?.introduction}</span>
              <Buttons>
                <AcceptBtn onClick={onAccept}>수락</AcceptBtn>
                <DenyBtn onClick={onDeny}>거절</DenyBtn>
              </Buttons>
            </Card>
          ))}
        </Cards>
      </CardsContainer>
    </Container>
  );
};
export default ManageMember;
