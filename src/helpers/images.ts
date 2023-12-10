import first from "../assets/rockets/1.png";
import second from "../assets/rockets/2.png";
import third from "../assets/rockets/3.png";

export const images = [first, second, third];

export const getCardImage = (index: number):string => {
  if (index < 3) {
    return images[index];
  } else {
    return getCardImage(index - 3);
  }
};
