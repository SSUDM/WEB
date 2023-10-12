import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 50px 0;
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
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const Tags = styled.div`
  width: 500px;
  border: solid 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Tag = styled.div``;

const Description = styled.div`
  h1 {
    font-size: 18px;
  }
`;

const Contents = styled.div`
  width: 500px;
  height: 600px;
  border: solid 1px black;
`;

const Project = () => {
  return (
    <Container>
      <ProjectImg />
      <Title>캡스톤 디자인 1</Title>
      <User>
        <UserImg />
        <span>김OO</span>
      </User>
      <Tags>
        <Tag>
          <span>모집파트</span>
        </Tag>
        <Tag>
          <span>모집 파트</span>
        </Tag>
        <Tag>
          <span>모집 인원</span>
        </Tag>
        <Tag>
          <span>기술 스택</span>
        </Tag>
        <Tag>
          <span>개발 기간</span>
        </Tag>
        <Tag>
          <span>모집 마감</span>
        </Tag>
        <Tag>
          <span>요구 숙련도</span>
        </Tag>
      </Tags>
      <Description>
        <h1>프로젝트 소개</h1>
        <Contents>많은 관심 바람</Contents>
      </Description>
    </Container>
  );
};
export default Project;
