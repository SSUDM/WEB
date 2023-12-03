import styled from "styled-components";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
import { getMyProceedingProject } from "../api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 558px;
  height: 240px;
  background-color: white;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
`;

const Title = styled.span`
  width: 450px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Delete = styled.div`
  margin-left: 520px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Options = styled(Select)`
  width: 450px;
  margin-bottom: 35px;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Pretendard-Regular";
  background-color: #ffcad5;
  border: none;
  cursor: pointer;
`;

const SelectProject = ({ setIsOpen }) => {
  const [myProjectsOptions, setMyProjectsOptions] = useState([]);
  const [project, setProject] = useState("");
  const { userId } = useParams();
  const { data: myproceedingproject } = useQuery({
    queryKey: ["myproceedingproject"],
    queryFn: () => getMyProceedingProject(),
  });

  const onDelete = () => {
    setIsOpen(false);
  };

  const formatMyProjectsOption = (id, title) => {
    return {
      value: id,
      label: title,
    };
  };

  const onSubmit = async () => {
    if (project) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/project/${project?.value}/${userId}/suggest-project`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(response.data);
        if (response.data === "이미 협업 요청이 존재합니다.") {
          alert("이미 협업을 요청하였습니다.");
        }
      } catch (error) {
        console.error(error);
      }
      setIsOpen(false);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (myproceedingproject) {
      const formattedOptions = myproceedingproject.map((data) =>
        formatMyProjectsOption(data?.pid, data?.title)
      );
      setMyProjectsOptions(formattedOptions);
    }
  }, [myproceedingproject]);

  return (
    <Container>
      <Delete onClick={onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#bcbcbc"
          width="20px"
          height="20px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Delete>
      <Title>프로젝트를 선택해주세요.</Title>
      <Options
        onChange={(data) => setProject(data)}
        style={{ width: "300px" }}
        options={myProjectsOptions}
      />
      <Button onClick={onSubmit}>확인</Button>
    </Container>
  );
};
export default SelectProject;
