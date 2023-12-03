import { useState } from "react";
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
import { useNavigate } from "react-router-dom";

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
  color: black;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: "Pretendard-Regular";
`;

const NewProject = () => {
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

  const navigate = useNavigate();

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
  console.log(authToken);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("maximumMember", count);
    if (projectImg) {
      formData.append("projectImg", projectImg);
    }
    formData.append("recPart", positions);
    formData.append("recTech", techs);
    formData.append("recLevel", level);
    formData.append("during", period);
    formData.append("due", endDate);
    formData.append("content", content);

    try {
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/articles`,
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
            onChange={(selectOptions) =>
              setPositions(selectOptions.map((option) => option.value))
            }
            options={positionOption}
            isMulti
          />
        </Tag>
        <Tag>
          <span>모집 인원</span>
          <MemberCount
            type="number"
            min="0"
            onChange={(e) => setCount(e.target.value)}
          />
        </Tag>
        <Tag>
          <span>기술 스택</span>
          <Options
            onChange={(selectOptions) =>
              setTechs(selectOptions.map((option) => option.value))
            }
            options={techOption}
            isMulti
          />
        </Tag>
        <Tag>
          <span>개발 기간</span>
          <Options
            onChange={(selectOptions) => setPeriod(selectOptions.value)}
            options={periodOption}
          />
        </Tag>
        <Tag>
          <span>모집 마감</span>
          <Date type="date" onChange={(e) => setEndDate(e.target.value)} />
        </Tag>
        <Tag>
          <span>요구 숙련도</span>
          <Options
            onChange={(selectOptions) => setLevel(selectOptions.value)}
            options={levelOption}
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
      <Button onClick={onSubmit}>프로젝트 생성하기</Button>
    </Container>
  );
};
export default NewProject;
