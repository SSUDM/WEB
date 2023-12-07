import styled from "styled-components";
import Select from "react-select";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  levelOptionState,
  nickNameState,
  positionOptionState,
  techOptionState,
  tokenState,
  userIdState,
} from "../components/atom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosClose } from "react-icons/io";
import { useQuery } from "react-query";
import { getResume } from "../api";

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

const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: 17px;
  margin-right: 50px;
  cursor: pointer;
  object-fit: cover;
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
    width: 55px;
    font-size: 16px;
    font-weight: 700;
  }
`;

const Name = styled.div`
  width: 140px;
  font-size: 15px;
  border: none;
  margin-left: 5px;
`;

const SmallSelect = styled(Select)`
  width: 150px;
  padding: 5px;
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

const TechSelect = styled(Select)`
  width: 650px;
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
  border: solid 1px rgba(0, 0, 0, 0.2);
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
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  &:focus {
    outline: none;
  }
`;

const CareerBtn = styled.button`
  width: 45px;
  height: 25px;
  background-color: #4754a3;
  color: white;
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
  margin-bottom: 10px;
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
    width: 500px;
    padding: 5px;
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
    font-family: "Pretendard-Regular";
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
  background-color: #4754a3;
  color: white;
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
  background-color: #4754a3;
  color: white;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  margin-top: 50px;
`;

const ViewCareers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const CareerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 640px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 5px;
  div {
    display: flex;
    h3 {
      width: 190px;
      margin: 0;
      font-size: 15px;
      margin-left: 20px;
      margin-right: 50px;
    }
    span {
      font-size: 15px;
    }
  }
  svg {
    justify-content: flex-end;
    width: 30px;
    height: 30px;
    margin: 5px;
    cursor: pointer;
  }
`;

const ViewProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectBox = styled.div`
  position: relative;
  width: 625px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  h1 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 15px;
  }
  span {
    font-size: 15px;
  }
  svg {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 3%;
    left: 96%;
  }
`;

const EditProfile = () => {
  const positionOption = useRecoilValue(positionOptionState);
  const levelOption = useRecoilValue(levelOptionState);
  const techOption = useRecoilValue(techOptionState);
  const [userImg, setUserImg] = useState(null);
  const [position, setPosition] = useState("");
  const [level, setLevel] = useState("");
  const [techs, setTechs] = useState([]);
  const [introduction, setIntroduction] = useState("");
  const [careers, setCareers] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [career, setCareer] = useState("");
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState();
  const [project, setProject] = useState();
  const userId = useRecoilValue(userIdState);
  const authToken = useRecoilValue(tokenState);
  const nickname = useRecoilValue(nickNameState);
  const navigate = useNavigate();

  const { data: resume } = useQuery({
    queryKey: ["resume"],
    queryFn: () => getResume(userId.toString()),
  });
  // console.log(resume);
  useEffect(() => {
    if (resume) {
      setPosition({
        label: resume.part,
        value: resume.part,
      });
      setLevel({
        label: resume.level,
        value: resume.level,
      });
      if (
        resume.userImg !==
        "https://developermatching.s3.ap-northeast-2.amazonaws.com/"
      ) {
        setUserImg(resume.userImg);
      }
      setTechs(
        resume.tech.map((data) => ({
          label: data,
          value: data,
        }))
      );
      setCareers(
        resume.careerList.map((data) => ({
          cid: data.cid,
          startDate: data.startDate,
          endDate: data.endDate,
          career: data.content,
        }))
      );
      console.log(careers);
      setProjects(
        resume.history.map((data) => ({
          id: data.id,
          title: data.title,
          content: data.content,
        }))
      );
      setIntroduction(resume.introduction);
    }
  }, [resume]);

  const insertImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserImg(file);
      let reader = new FileReader();
      reader.onload = () => {
        const fileURL = reader.result;
        setUserImg(fileURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (userImg) {
      formData.append("userImg", userImg);
    }
    formData.append("part", position.value);
    formData.append("level", level.value);
    formData.append(
      "tech",
      techs.map((data) => data.value)
    );
    formData.append("introduction", introduction);
    careers.forEach((data, index) => {
      formData.append(`careerList[${index}].cid`, data.cid);
      formData.append(`careerList[${index}].startDate`, data.startDate);
      formData.append(`careerList[${index}].endDate`, data.endDate);
      formData.append(`careerList[${index}].career`, data.career);
    });
    projects.forEach((data, index) => {
      formData.append(`history[${index}].id`, data.id);
      formData.append(`history[${index}].title`, data.title);
      formData.append(`history[${index}].content`, data.content);
    });
    console.log(JSON.stringify([...formData.entries()]));

    try {
      const res = await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/api/resume`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        data: formData,
      });
      console.log(res);
      navigate(`/profile/${userId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const addCareer = () => {
    setCareers(
      careers.concat({
        cid: careers.length + 1,
        startDate: startDate,
        endDate: endDate,
        career: career,
      })
    );

    setStartDate("");
    setEndDate("");
    setCareer("");
  };

  const deleteCareer = (cid) => {
    setCareers(
      careers
        .filter((item) => item.cid !== cid)
        .map((item, index) => ({ ...item, cid: index + 1 }))
    );
    console.log(cid);
  };

  const addProject = () => {
    console.log(title);
    setProjects(
      projects.concat({
        id: projects.length + 1,
        title: title,
        content: project,
      })
    );
    setTitle("");
    setProject("");
  };

  const deleteProject = (id) => {
    setProjects(
      projects
        .filter((item) => item.id !== id)
        .map((item, index) => ({ ...item, id: index + 1 }))
    );
    console.log(id);
  };
  console.log(authToken);
  console.log(careers);
  console.log(projects);
  return (
    <Container>
      <UserInfoContainer>
        <label for="file">
          <UserImg src={userImg ? userImg : "../../img/default_profile.png"} />
        </label>
        <input
          type="file"
          accept="image/*"
          id="file"
          style={{ display: "none" }}
          onChange={insertImg}
        />
        <UserInfo>
          <Content style={{ marginBottom: "10px" }}>
            <h1>닉네임</h1>
            <Name>{nickname}</Name>
          </Content>
          <Content>
            <h1>파트</h1>
            <SmallSelect
              value={position}
              options={positionOption}
              onChange={(data) => setPosition(data)}
            />
          </Content>
          <Content>
            <h1>숙련도</h1>
            <SmallSelect
              value={level}
              options={levelOption}
              onChange={(data) => setLevel(data)}
            />
          </Content>
        </UserInfo>
      </UserInfoContainer>
      <Introduction>
        <h1>자기 소개</h1>
        <input
          value={introduction}
          type="text"
          placeholder="자유롭게 입력해주세요."
          onChange={(e) => setIntroduction(e.target.value)}
        />
      </Introduction>
      <TechStack>
        <h1>기술 스택</h1>
        <TechSelect
          value={techs}
          options={techOption}
          onChange={(selectOptions) => {
            setTechs(selectOptions);
          }}
          isMulti
        />
      </TechStack>
      <Career>
        <h1>경력</h1>
        <CareerInput>
          <h1>날짜</h1>
          <Date
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          {" ~ "}
          <Date
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <CareerInfo
            type="text"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          />
          <CareerBtn onClick={addCareer}>추가</CareerBtn>
        </CareerInput>
        <ViewCareers>
          {careers?.map((data) => (
            <CareerBox>
              <div>
                <h3>
                  {data.startDate} ~ {data.endDate}
                </h3>
                <span>{data.career}</span>
              </div>
              <IoIosClose onClick={() => deleteCareer(data.cid)} />
            </CareerBox>
          ))}
        </ViewCareers>
      </Career>
      <ProjectContainer>
        <h1>프로젝트</h1>
        <Project>
          <ProjectTitle>
            <h1>프로젝트 이름</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </ProjectTitle>
          <ProjectContent>
            <h1>프로젝트 소개</h1>
            <textarea
              placeholder="프로젝트 내용 및 역할"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </ProjectContent>
          <ProjectBtn onClick={addProject}>추가</ProjectBtn>
        </Project>
        <ViewProjects>
          {projects.map((data) => (
            <ProjectBox>
              <IoIosClose onClick={() => deleteProject(data.id)} />
              <h1>{data.title}</h1>
              <span>{data.content}</span>
            </ProjectBox>
          ))}
        </ViewProjects>
      </ProjectContainer>
      <ProfileBtn onClick={onSubmit}>이력서 수정하기</ProfileBtn>
    </Container>
  );
};
export default EditProfile;
