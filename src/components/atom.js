import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const positionOptionState = atom({
  key: "positionOptionState",
  default: [
    { value: "PM", label: "PM" },
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Design", label: "Design" },
    { value: "Android", label: "Android" },
    { value: "IOS", label: "IOS" },
  ],
});

export const techOptionState = atom({
  key: "techOptionState",
  default: [
    { value: "AWS", label: "AWS" },
    { value: "C", label: "C" },
    { value: "Docker", label: "Docker" },
    { value: "Express", label: "Express" },
    { value: "Figma", label: "Figma" },
    { value: "Firebase", label: "Firebase" },
    { value: "Flutter", label: "Flutter" },
    { value: "Git", label: "Git" },
    { value: "Go", label: "Go" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Jest", label: "Jest" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "MySQL", label: "MySQL" },
    { value: "Nestjs", label: "Nestjs" },
    { value: "Nextjs", label: "Nextjs" },
    { value: "Nodejs", label: "Nodejs" },
    { value: "PHP", label: "PHP" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "Reactnative", label: "ReactNative" },
    { value: "Svelte", label: "Svelte" },
    { value: "Swift", label: "Swift" },
    { value: "Typescript", label: "TypeScript" },
    { value: "Unity", label: "Unity" },
    { value: "Vue", label: "Vue" },
    { value: "Zeplin", label: "Zeplin" },
  ],
});

export const periodOptionState = atom({
  key: "periodOptionState",
  default: [
    { value: "1개월미만", label: "1개월 미만" },
    { value: "3개월", label: "3개월" },
    { value: "6개월", label: "6개월" },
    { value: "1년이상", label: "1년 이상" },
  ],
});

export const levelOptionState = atom({
  key: "levelOptionState",
  default: [
    { value: "JUNIOR", label: "JUNIOR" },
    { value: "SENIOR", label: "SENIOR" },
    { value: "MASTER", label: "MASTER" },
  ],
});

export const tokenState = atom({
  key: "tokenState",
  default: "",
});

export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE:[persistAtom],
});

export const userIdState = atom({
  key: "userIDState",
  default: "",
  effects_UNSTABLE:[persistAtom],
})

export const nickNameState = atom({
  key: "nickNameState",
  default: "",
  effects_UNSTABLE:[persistAtom],
})

export const likeState = atom({
  key: "likeState",
  default: false,
  effects_UNSTABLE:[persistAtom],
})

export const ProjectActiveState = atom({
  key: "activeState",
  default: [
    { value: "만든 프로젝트", label: "만든 프로젝트" },
    { value: "참여중인 프로젝트", label: "참여중인 프로젝트" },
    { value: "찜한 프로젝트", label: "찜한 프로젝트" },
    { value: "승인 대기중인 프로젝트", label: "승인 대기중인 프로젝트" },
    { value: "협업 요청 온 프로젝트", label: "협업 요청 온 프로젝트" },
  ],
});
