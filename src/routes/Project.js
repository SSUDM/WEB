import { useRecoilValue } from "recoil";
import { isProjectOwnerState } from "../components/atom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getProject, getRecommendedMembers } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 70px 0;
`;

const Menu = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 485px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const DropDown = styled.ul`
  position: relative;
  top: 3px;
  right: 85px;
  width: 100px;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  list-style: none;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  li {
    padding: 8px;
    font-size: 15px;
  }
`;

const ProjectImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 30px;
  object-fit: cover;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`;

const Title = styled.span`
  width: 500px;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  span {
    font-weight: 700;
  }
  margin-bottom: 40px;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 500px;
  border: solid 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px 0;
  margin-bottom: 30px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  h1 {
    width: 80px;
    margin: 0;
    font-size: 16px;
    margin-right: 10px;
  }
  span {
    font-size: 15px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 395px;
`;

const Tag = styled.div`
  font-size: 15px;
  font-weight: 300;
  padding: 2px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Description = styled.div`
  h1 {
    font-size: 18px;
  }
  margin-bottom: 70px;
`;

const Contents = styled.div`
  width: 480px;
  height: 400px;
  padding: 10px;
  border: solid 1px black;
  border-left-color: white;
  border-right-color: white;
`;

const Button = styled.button`
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: black;
  background-color: ${({ isApplied }) =>
    isApplied ? "rgba(0, 0, 0, 0.2)" : "#FFCAD5"};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: "Pretendard-Regular";
  display: ${({ isApplied }) => (isApplied ? "block" : "inline-block")};
`;

const Recommend = styled.div`
  width: 600px;
  h1 {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const UserCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserCard = styled.div`
  width: 150px;
  height: 90px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  div {
    max-height: 48px;
    font-size: 13px;
    overflow: hidden;
  }
  cursor: pointer;
  overflow: hidden;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    font-size: 15px;
    font-weight: 700;
  }
`;

const CardImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const Project = () => {
  const isProjectOwner = useRecoilValue(isProjectOwnerState);
  const memberId = 1;
  const projectId = 1;
  const isApplied = false;
  const [view, setView] = useState(false);
  const navigate = useNavigate();

  const { data: project } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProject(memberId.toString(), projectId.toString()),
  });

  const { data: recommandedMembers } = useQuery({
    queryKey: ["recommandedMembers"],
    queryFn: () =>
      getRecommendedMembers(memberId.toString(), projectId.toString()),
  });

  const onApply = () => {
    try {
      /*
      const res = await axios({
        method: "post",
        url: `api-address`,
      });

      console.log(res);
      */
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = async () => {
    /*
    try {
      const response = await axios.delete(`/api/projects/${projectId}`);
      console.log(response.data);
    } catch (error) {
      console.error("프로젝트 삭제 오류:", error);
    }
    */
  };

  const onConfirm = () => {
    if (window.confirm("프로젝트를 종료하시겠습니까?")) {
      console.log("프로젝트 종료");
      deleteProject();
      // navigate("내 프로젝트로");
    } else {
      console.log("프로젝트 종료 취소");
    }
  };

  return (
    <Container>
      {isProjectOwner && (
        <Menu onClick={() => setView(!view)}>
          <IoMenu />
          {view && (
            <DropDown>
              <Link
                to={"/manageMember"}
                style={{ textDecorationLine: "none", color: "black" }}
              >
                <li>팀원 관리</li>
              </Link>
              <li>프로젝트 수정</li>
              <li onClick={onConfirm}>프로젝트 종료</li>
            </DropDown>
          )}
        </Menu>
      )}
      <ProjectImg
        src={
          project?.projectImg ? project?.projectImg : "../../img/project.jpg"
        }
      />
      <Title>{project?.title}</Title>
      <User>
        <UserImg
          src={
            project?.userImg
              ? project?.userImg
              : "../../img/default_profile.png"
          }
        />
        <span>김OO</span>
      </User>
      <Info>
        <TagContainer>
          <h1>모집 파트</h1>
          <Tags>
            {project?.recPart.map((data) => (
              <Tag>{data}</Tag>
            ))}
          </Tags>
        </TagContainer>
        <TagContainer>
          <h1>모집 인원</h1>
          <span>1명</span>
        </TagContainer>
        <TagContainer>
          <h1>기술 스택</h1>
          <Tags>
            {project?.recTech.map((data) => (
              <Tag>{data}</Tag>
            ))}
          </Tags>
        </TagContainer>
        <TagContainer>
          <h1>개발 기간</h1>
          <span>1개월 미만</span>
        </TagContainer>
        <TagContainer>
          <h1>모집 마감</h1>
          <span>2000.00.00</span>
        </TagContainer>
        <TagContainer>
          <h1>요구 숙련도</h1>
          <Tag>초급</Tag>
        </TagContainer>
      </Info>
      <Description>
        <h1>프로젝트 소개</h1>
        <Contents>{project?.content}</Contents>
      </Description>
      {isProjectOwner ? (
        <Recommend>
          <h1>이런 팀원 어때요?</h1>
          <UserCards>
            {recommandedMembers?.map((member) => (
              <Link
                to="/profile"
                style={{ textDecorationLine: "none", color: "black" }}
              >
                <UserCard>
                  <CardUser>
                    <CardImg
                      src={
                        project?.recommendedUserImg
                          ? project?.recommendedUserImg
                          : "../../img/default_profile.png"
                      }
                    />
                    <span>{member?.name}</span>
                  </CardUser>
                  <div>{member?.intorduction}</div>
                </UserCard>
              </Link>
            ))}
          </UserCards>
        </Recommend>
      ) : (
        <Button isApplied={isApplied} onClick={onApply}>
          프로젝트 지원하기
        </Button>
      )}
    </Container>
  );
};
export default Project;
