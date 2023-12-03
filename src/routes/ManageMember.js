import styled from "styled-components";
import { getApplicants, getMembers } from "../api";
import { useQuery, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

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
  width: 780px;
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
  const navigate = useNavigate();
  const { projectId } = useParams();

  const queryClient = useQueryClient();

  const { data: members } = useQuery({
    queryKey: ["members"],
    queryFn: () => getMembers(projectId.toString()),
  });

  const { data: applicants } = useQuery({
    queryKey: ["applicants"],
    queryFn: () => getApplicants(projectId.toString()),
  });

  const onAccept = async (uid) => {
    if (window.confirm("요청을 수락하시겠습니까?")) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/project/${projectId}/${uid}/accept-join-project`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(response.data);
        queryClient.invalidateQueries("members");
        queryClient.invalidateQueries("applicants");
      } catch (error) {
        console.error(error);
        throw error;
      }
      console.log("수락되었습니다.");
    } else {
      console.log("요청 수락 취소");
    }
  };

  const onDeny = async (uid) => {
    if (window.confirm("요청을 거절하시겠습니까?")) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/project/${projectId}/${uid}/reject-join-project`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(response.data);
        queryClient.invalidateQueries("members");
        queryClient.invalidateQueries("applicants");
      } catch (error) {
        console.error(error);
        throw error;
      }
      console.log("거절되었습니다.");
    } else {
      console.log("요청 거절 취소");
    }
  };

  return (
    <Container>
      <Title>
        <Link
          to={`/project/${projectId}`}
          style={{
            marginRight: "10px",
            textDecorationLine: "none",
            color: "black",
          }}
        >
          <IoMdArrowRoundBack />
        </Link>
        팀원 관리
      </Title>
      <CardsContainer>
        <Name>팀원</Name>
        <Cards>
          {members?.length !== 0 ? (
            members?.map((data) => (
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
                </Card>
              </Link>
            ))
          ) : (
            <span
              style={{
                fontSize: "15px",
                color: "rgba(0, 0, 0, 0.5)",
                marginTop: "30px",
              }}
            >
              팀원이 존재하지 않습니다.
            </span>
          )}
        </Cards>
      </CardsContainer>
      <Border />
      <CardsContainer>
        <Name>지원자</Name>
        <Cards>
          {applicants?.length !== 0 ? (
            applicants?.map((data) => (
              <Card onClick={() => navigate(`/profile/${data.uid}`)}>
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
                <Buttons>
                  <AcceptBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      onAccept(data.uid);
                    }}
                  >
                    수락
                  </AcceptBtn>
                  <DenyBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeny(data.uid);
                    }}
                  >
                    거절
                  </DenyBtn>
                </Buttons>
              </Card>
            ))
          ) : (
            <span
              style={{
                fontSize: "15px",
                color: "rgba(0, 0, 0, 0.5)",
                marginTop: "30px",
              }}
            >
              지원자가 존재하지 않습니다.
            </span>
          )}
        </Cards>
      </CardsContainer>
    </Container>
  );
};
export default ManageMember;
