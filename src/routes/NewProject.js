import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 50px 0;
`;

const ProjectImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 250px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 18px;
  }
  input {
    width: 500px;
    height: 30px;
    font-size: 15px;
    border: solid 1.5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    &:focus {
      outline: none;
    }
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
  }
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

const Tag = styled.div`
  margin-left: 15px;
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

const Description = styled.div`
  width: 500px;
  h1 {
    font-size: 18px;
  }
  margin-bottom: 50px;
`;

const Contents = styled.textarea`
  width: 480px;
  height: 600px;
  border: solid 1.5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  font-family: "Pretendard-Regular";
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const Button = styled.button`
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: black;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: "Pretendard-Regular";
`;

const NewProject = () => {
  return (
    <Container>
      <span for="file">
        <ProjectImg>+ 이미지 추가</ProjectImg>
      </span>
      <input type="file" id="file" style={{ display: "none" }} />
      <Title>
        <h1>프로젝트 명</h1>
        <input />
      </Title>
      <Tags>
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
        <Contents placeholder="프로젝트 내용을 입력해주세요." />
      </Description>
      <Button>프로젝트 생성하기</Button>
    </Container>
  );
};
export default NewProject;
