import { atom } from "recoil";
export const $user = atom({
  key: "$user",
  default: {
    isAuth: false,
    user: null,
  },
});
