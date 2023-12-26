export interface skillCardPropsIF {
  name: string;
  icon: any;
}

export interface projectCardProps {
  name: string;
  description: string;
  img: any;
  techStack: string[];
}

export type useToggleType = [boolean, () => void];

export interface darkModeTypes {
  system: string;
  dark: string;
  light: string;
}

export interface offCanvasProps {
  opanOffCanvas: boolean;
  hanldeOffCanvas: () => void;
}
