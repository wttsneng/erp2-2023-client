export interface IAuthData {
  login: string;
  last_visit: string | null;
  settings: {
    lang: "en" | "ru";
  };
  uimodules: object[];
}

export interface IAuth {
  data: IAuthData;
}
