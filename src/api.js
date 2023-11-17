import axios from "axios";

export const getProject = async (memberId, projectId) => {
  /*
  try {
    const response = await axios.get(`api-address`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }*/
  return {
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
  };
};

export const getRecommendedMembers = async (memberId, projectId) => {
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

export const getResume = async (memberId) => {
  /*
    try {
      const response = await axios.get(`api-address`);
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }*/
  return {
    userImg: null, // 내가 추가함.
    userName: "JohnDoe",
    email: "johndoe@example.com",
    password: "123",
    phoneNum: "123",
    part: "Backend Developer",
    level: "SENIOR",
    point: null,
    introduction:
      "I'm a passionate developer with a strong background in Java and Spring Boot.",
    tech: "Java, Spring Boot, Hibernate",
    career: "5 years of experience in software development",
    userInMember: [],
    likes: [],
    uid: 1,
  };
};
