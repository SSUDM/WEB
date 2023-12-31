import { useEffect, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import {
  levelOptionState,
  periodOptionState,
  positionOptionState,
  techOptionState,
  tokenState,
} from "../components/atom";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProject } from "../api";

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
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const PreviewImg = styled.img`
  width: 500px;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 40px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 18px;
  }
  input {
    width: 580px;
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
  width: 540px;
  border: solid 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const Options = styled(Select)`
  width: 450px;
`;

const MemberCount = styled.input`
  width: 429px;
  height: 38px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  font-family: "Pretendard-Regular";
`;

const Date = styled.input`
  width: 429px;
  height: 38px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  font-family: "Pretendard-Regular";
`;

const Description = styled.div`
  width: 580px;
  h1 {
    font-size: 18px;
  }
  margin-bottom: 50px;
`;

const Contents = styled.textarea`
  width: 560px;
  height: 400px;
  border: solid 1.5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
  font-family: "Pretendard-Regular";
  resize: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const Button = styled.button`
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: white;
  background-color: #4754a3;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: "Pretendard-Regular";
`;

const EditProject = () => {
  const positionOption = useRecoilValue(positionOptionState);
  const techOption = useRecoilValue(techOptionState);
  const periodOption = useRecoilValue(periodOptionState);
  const levelOption = useRecoilValue(levelOptionState);
  const [projectImg, setProjectImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const [positions, setPositions] = useState([]);
  const [techs, setTechs] = useState("");
  const [period, setPeriod] = useState();
  const [endDate, setEndDate] = useState(null);
  const [level, setLevel] = useState("");
  const [content, setContent] = useState("");
  const authToken = useRecoilValue(tokenState);
  const { projectId } = useParams();

  const navigate = useNavigate();

  const { data: project } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProject(projectId.toString()),
  });

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setCount(project.maximumMember);
      if (
        project.projectImg !==
        "https://developermatching.s3.ap-northeast-2.amazonaws.com/"
      ) {
        setPreviewImg(project.projectImg);
      }
      setPositions(
        project.recPart.map((part) => ({
          label: part,
          value: part,
        }))
      );
      setTechs(
        project.recTech.map((tech) => ({
          label: tech,
          value: tech,
        }))
      );
      setLevel({
        label: project.recLevel,
        value: project.recLevel,
      });
      setPeriod({
        label: project.during,
        value: project.during,
      });
      setEndDate(project.due);
      setContent(project.content);
    }
  }, [project]);

  const insertImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProjectImg(file);
      let reader = new FileReader();
      reader.onload = () => {
        const fileURL = reader.result;
        setPreviewImg(fileURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !title ||
      !count ||
      !positions ||
      !techs ||
      !level ||
      !period ||
      !endDate ||
      !content
    ) {
      alert("필수 항목을 채워주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("maximumMember", count);
    if (projectImg) {
      formData.append("projectImg", projectImg);
    }
    formData.append(
      "recPart",
      positions.map((part) => part.value)
    );
    formData.append(
      "recTech",
      techs.map((tech) => tech.value)
    );
    formData.append("recLevel", level.value);
    formData.append("during", period.value);
    formData.append("due", endDate);
    formData.append("content", content);
    console.log(JSON.stringify([...formData.entries()]));

    try {
      const res = await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/api/articles/${projectId}`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        data: formData,
      });
      console.log(res);
      navigate(`/project/${res.data.aid}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <label for="file">
        {previewImg ? (
          <PreviewImg src={previewImg} />
        ) : (
          <ProjectImg>+ 이미지 추가</ProjectImg>
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        id="file"
        style={{ display: "none" }}
        onChange={insertImg}
      />
      <Title>
        <h1>프로젝트 명</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Title>
      <Tags>
        <Tag>
          <span>모집 파트</span>
          <Options
            onChange={(selectOptions) => setPositions(selectOptions)}
            options={positionOption}
            isMulti
            value={positions}
          />
        </Tag>
        <Tag>
          <span>모집 인원</span>
          <MemberCount
            value={count}
            type="number"
            min="0"
            onChange={(e) => setCount(e.target.value)}
          />
        </Tag>
        <Tag>
          <span>기술 스택</span>
          <Options
            onChange={(selectOptions) => setTechs(selectOptions)}
            options={techOption}
            isMulti
            value={techs}
          />
        </Tag>
        <Tag>
          <span>개발 기간</span>
          <Options
            onChange={(selectOptions) => setPeriod(selectOptions)}
            options={periodOption}
            value={period}
          />
        </Tag>
        <Tag>
          <span>모집 마감</span>
          <Date
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Tag>
        <Tag>
          <span>요구 숙련도</span>
          <Options
            onChange={(selectOptions) => setLevel(selectOptions)}
            options={levelOption}
            value={level}
          />
        </Tag>
      </Tags>
      <Description>
        <h1>프로젝트 소개</h1>
        <Contents
          placeholder="프로젝트 내용을 입력해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Description>
      <Button onClick={onSubmit}>프로젝트 수정하기</Button>
    </Container>
  );
};
export default EditProject;
