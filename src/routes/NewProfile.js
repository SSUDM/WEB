import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 70px 0;
`;

const UserInfoContainer = styled.div`
  display: flex;
  margin-bottom: 70px;
`;

const UserImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 50px;
  color: white;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 0px;
    width: 50px;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Name = styled.input`
  width: 150px;
  height: 20px;
  border: none;
  border-bottom: solid 1px rgb(133, 133, 133);
  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  width: 150px;
  height: 30px;
  padding: 5px;
  border: solid 1px rgb(0, 0, 0, 0.3);
  border-radius: 20px;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 15px;
  }
  input {
    width: 650px;
    height: 30px;
    font-size: 15px;
    font-family: "Pretendard-Regular";
    border: none;
    border-bottom: solid 1px rgb(133, 133, 133);
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
  margin-bottom: 50px;
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 15px;
  }
  input {
    width: 650px;
    font-size: 15px;
    font-family: "Pretendard-Regular";
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
  margin-bottom: 50px;
`;

const Career = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 15px;
  }
  margin-bottom: 50px;
`;

const CareerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  width: 620px;
  height: 40px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  h1 {
    margin: 0;
    font-size: 14px;
  }
`;

const Date = styled.input`
  font-family: "Pretendard-Regular";
`;

const CareerInfo = styled.input`
  width: 250px;
  height: 20px;
  border: none;
  border-bottom: solid 1px rgb(133, 133, 133);
  &:focus {
    outline: none;
  }
`;

const CareerBtn = styled.button`
  width: 45px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 20px;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  cursor: pointer;
`;

const ProjectContainer = styled.div`
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 620px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 15px;
  padding-bottom: 10px;
  margin-bottom: 50px;
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 15px;
    margin: 0;
    margin-right: 20px;
  }
  input {
    width: 510px;
    border: none;
    border-bottom: solid 1px rgb(133, 133, 133);
    &:focus {
      outline: none;
    }
  }
  margin-bottom: 20px;
`;

const ProjectContent = styled.div`
  display: flex;
  h1 {
    font-size: 15px;
    margin: 0;
    margin-right: 20px;
  }
  textarea {
    width: 500px;
    height: 90px;
    resize: none;
    padding: 5px;
    &::placeholder {
      font-family: "Pretendard-Regular";
      color: rgba(0, 0, 0, 0.3);
    }
  }
  margin-bottom: 10px;
`;

const ProjectBtn = styled.button`
  width: 50px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 20px;
  margin-left: 570px;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  cursor: pointer;
`;

const ProfileBtn = styled.button`
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

const NewProfile = () => {
  return (
    <Container>
      <UserInfoContainer>
        <label for="file">
          <UserImg>이미지 선택</UserImg>
        </label>
        <input
          type="file"
          accept="image/*"
          id="file"
          style={{ display: "none" }}
        />
        <UserInfo>
          <Content>
            <h1>이름</h1>
            <Name />
          </Content>
          <Content>
            <h1>파트</h1>
            <Select>
              <option value="none">선택</option>
              <option value="PM">PM</option>
              <option value="프론트엔드">프론트엔드</option>
              <option value="백엔드">백엔드</option>
              <option value="디자인">디자인</option>
              <option value="안드로이드">안드로이드</option>
              <option value="ios">ios</option>
            </Select>
          </Content>
          <Content>
            <h1>숙련도</h1>
            <Select>
              <option value="none">선택</option>
              <option value="초급">초급</option>
              <option value="중급">중급</option>
              <option value="고급">고급</option>
            </Select>
          </Content>
        </UserInfo>
      </UserInfoContainer>
      <Introduction>
        <h1>자기 소개</h1>
        <input type="text" maxlength="5" placeholder="자유롭게 입력해주세요." />
      </Introduction>
      <TechStack>
        <h1>기술 스택</h1>
        <input type="text" maxlength="5" placeholder="자유롭게 입력해주세요." />
      </TechStack>
      <Career>
        <h1>경력</h1>
        <CareerInput>
          <h1>날짜</h1>
          <Date type="date" />
          {" ~ "}
          <Date type="date" />
          <CareerInfo type="text" />
          <CareerBtn>추가</CareerBtn>
        </CareerInput>
      </Career>
      <ProjectContainer>
        <h1>프로젝트</h1>
        <Project>
          <ProjectTitle>
            <h1>프로젝트 이름</h1>
            <input type="text" />
          </ProjectTitle>
          <ProjectContent>
            <h1>프로젝트 소개</h1>
            <textarea placeholder="프로젝트 내용 및 역할" />
          </ProjectContent>
          <ProjectBtn>추가</ProjectBtn>
        </Project>
      </ProjectContainer>
      <ProfileBtn>이력서 생성하기</ProfileBtn>
    </Container>
  );
};
export default NewProfile;
