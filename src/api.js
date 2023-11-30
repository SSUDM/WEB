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
  /*
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/resume/${userId}`
      );
      console.log(data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }*/
  return {
    userName: "JohnDoe",
    part: "Backend",
    level: "MASTER",
    introduction: "Hello, I am a software developer.",
    tech: ["Java", "Spring Boot", "Hibernate", "React"],
    careerList: [
      {
        startDate: "2019-11-30",
        endDate: "2022-11-30",
        content: "sdf",
        cid: 1,
      },
      {
        startDate: "2019-11-30",
        endDate: "2022-11-30",
        content: "asd",
        cid: 2,
      },
    ],
    history: [
      {
        id: 1,
        title: "창의적 공학 설계",
        content: "숭실대학교 1학년 전공",
      },
      {
        id: 2,
        title: "캡스톤 디자인 3",
        content: "숭실대학교 4학년 전공",
      },
    ],
    userImg: null,
    uid: 1,
  };
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

export const getPopProject = async () =>{
  try{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/project/get-pop-projects`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    console.log(response);
    return response.data;
  }
  catch(err){
    console.log(err);
  }
};

export const getRecommendProject = async () =>{
  try{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/rec-project`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    console.log(response.data);
    return response.data;
  }catch(err){
    console.log(err);
  }
}