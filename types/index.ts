import { IconType } from "react-icons";

export type SkillInfo = {
  title: string;
  icons: IconType[];
};

export type StageInfo = {
  title: string;
  stage: string;
};

export type AboutItem = {
  title: string;
  info: (SkillInfo | StageInfo)[];
};
