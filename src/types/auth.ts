export type TAuthState = {
  user: {
    name: string;
    email: string;
  } | null;
  isAppLoading: boolean;
  darkMode: boolean;
};
