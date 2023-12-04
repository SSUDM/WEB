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
};

export const getResume = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/resume/${userId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMembers = async (projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/${projectId}/get-teammates`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getApplicants = async (projectId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/project/${projectId}/get-apply-request`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMyProceedingProject = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/get-managing-and-recruiting-projects`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
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

export const getMyProjectList = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export const getMakeProject = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};
export const getJoinProject = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};
export const getLikeProject = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};
export const getRequestProject = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};
export const getCooperateProject = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export const getDoneProject = async () => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};
