export type TAuthState = {
  user: {
    name: string;
    email: string;
    password: string;
  } | null;
  isAppLoading: boolean;
};
