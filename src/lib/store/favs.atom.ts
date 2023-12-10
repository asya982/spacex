import { atom, selector } from "recoil";
import { RocketType } from "../../types/rockets";

const initialState = {
  favorites: [],
} as { favorites: Array<RocketType> };

export const favsState = atom({
  key: "favsState",
  default: initialState,
});

export const getAllItems = selector({
  key: "favsStateSelector",
  get: ({ get }) => {
    return get(favsState);
  },
});
