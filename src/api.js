import axios from "axios";

export const getProject = async (projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/articles/${projectId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
  /*return {
    articleOwnerId: 1,
    projectImg: null,
    title: "Project Title",
    maximumMember: 5,
    recPart: ["BackEnd", "Frontend"],
    recTech: ["Spring", "react", "php"],
    recLevel: "SENIOR",
    during: "2023-10-12",
    due: "2023-12-01",
    content: "This is a project description.",
  };*/
};

export const getRecommendedMembers = async (projectId) => {
  /*
    try {
      const response = await axios.get(`api-address`);
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }*/
  return [
    { name: "유미라", userImg: null, intorduction: "안녕하세요." },
    { name: "유미라", userImg: null, intorduction: "안녕하세요." },
    { name: "유미라", userImg: null, intorduction: "안녕하세요." },
  ];
};

export const getResume = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/resume/${userId}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMembers = async (projectId) => {
  /*
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/${projectId}/get-teammates`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }*/
  return [
    {
      nickName: "JohnDoe",
      introduction: "hello~",
    },
    {
      nickName: "mira",
      introduction: "good luck.",
    },
  ];
};

export const getApplicants = async (projectId) => {
  /*
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/project/{projectId}/get-apply-request`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }*/
  return [
    {
      nickName: "반더벤",
      part: "백엔드 개발자",
      level: "SENIOR",
      userImg: null,
      introduction:
        "Java와 Spring Boot에 강력한 경험을 가진 열정적인 개발자입니다.",
      tech: ["Java", "Spring Boot", "Hibernate"],
    },
  ];
};

export const getMyProject = async () => {
  /*
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/get-managing-projects`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }*/
  return [
    {
      title: "Project Title",
      projectImg: null,
      memberCnt: 1,
      projectStatus: "RECRUITING",
      likes: 0,
      pid: 1,
      aid: 1,
    },
    {
      title: "Test",
      projectImg: null,
      memberCnt: 1,
      projectStatus: "RECRUITING",
      likes: 0,
      pid: 2,
      aid: 2,
    },
  ];
};

export const getPopProject = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/get-pop-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRecommendProject = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/rec-project`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMyProjectList = async () =>{
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-managing-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response);
    return response.data;
  }catch(err){
    console.log(err);
  }
}

export const getMakeProject = async() =>{
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-managing-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  }catch(err){
    console.log(err);
  }
}
export const getJoinProject = async() =>{
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-proceeding-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  }catch(err){
    console.log(err);
  }
}
export const getLikeProject = async() =>{
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-like-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  }catch(err){
    console.log(err);
  }
}
export const getRequestProject = async() =>{
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-applied-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  }catch(err){
    console.log(err);
  }
}
export const getCooperateProject = async() =>{
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-suggested-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  }catch(err){
    console.log(err);
  }
}

export const getDoneProject = async() =>{
  try{
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-done-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response);
    return response.data;
  }catch(err){
    console.log(err);
  }
  
}
