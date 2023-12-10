import { FC } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { Icons } from "../../UI/Icons";

type ControlsProps = {
  inFavs?: boolean;
  itemId: string;
};

const Controls = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const CardControls: FC<ControlsProps> = ({ inFavs = false, itemId }) => {
  const handleBuy = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {};
  return (
    <Controls>
      <Button color="primary" handleClick={handleBuy}>
        Buy
      </Button>
      <Button handleClick={inFavs ? handleDelete : handleAdd}>
        {inFavs ? <Icons.trash /> : <Icons.heart />}
      </Button>
    </Controls>
  );
};

export default CardControls;
