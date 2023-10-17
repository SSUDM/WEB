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
  margin-bottom: 40px;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    margin: 0;
    font-size: 15px;
    margin-right: 10px;
  }
  span {
    font-size: 14px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 300;
  padding: 2px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Description = styled.div`
  h1 {
    font-size: 18px;
  }
`;

const Contents = styled.div`
  width: 480px;
  height: 400px;
  padding: 10px;
  border: solid 1px black;
  border-left-color: white;
  border-right-color: white;
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
        <TagContainer>
          <h1>모집 파트</h1>
          <Tag>프론트엔드</Tag>
        </TagContainer>
        <TagContainer>
          <h1>모집 인원</h1>
          <span>1명</span>
        </TagContainer>
        <TagContainer>
          <h1>기술 스택</h1>
          <Tag>react.js</Tag>
        </TagContainer>
        <TagContainer>
          <h1>개발 기간</h1>
          <span>2000.00.00 - 2000.00.00</span>
        </TagContainer>
        <TagContainer>
          <h1>모집 마감</h1>
          <span>2000.00.00</span>
        </TagContainer>
        <TagContainer>
          <h1>요구 숙련도</h1>
          <Tag>초급</Tag>
        </TagContainer>
      </Tags>
      <Description>
        <h1>프로젝트 소개</h1>
        <Contents>많은 관심 바람</Contents>
      </Description>
    </Container>
  );
};
export default Project;
