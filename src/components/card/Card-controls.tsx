import { FC } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { Icons } from "../../UI/Icons";
import { RocketType } from "../../types/rockets";
import { useRecoilState } from "recoil";
import { favsState } from "../../lib/store/favs.atom";

type ControlsProps = {
  inFavs?: boolean;
  item: RocketType;
};

const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const CardControls: FC<ControlsProps> = ({ inFavs = false, item }) => {
  const [items, setItems] = useRecoilState(favsState);
  const itemInFavs = items.favorites?.find((el) => el.id === item.id);
  const handleBuy = () => {};
  const handleDelete = () => {
    setItems({
      ...items,
      favorites: items.favorites.filter((el) => el.id !== item.id),
    });
  };

  const handleAdd = () => {
    if (inFavs) return;

    setItems({ ...items, favorites: [...items.favorites, item] });
  };

  return (
    <Controls>
      <Button color="primary" handleClick={handleBuy}>
        Buy
      </Button>
      <Button
        handleClick={itemInFavs ? handleDelete : handleAdd}
        background={itemInFavs && !inFavs ? "#DD377D" : ""}
      >
        {inFavs ? (
          <Icons.trash />
        ) : (
          <Icons.heart fill={itemInFavs && "white"} />
        )}
      </Button>
    </Controls>
  );
};

export default CardControls;
