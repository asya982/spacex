import { FC } from "react";
import { useRecoilState } from "recoil";
import { favsState } from "../lib/store/favs.atom";
import { getCardImage, images } from "../helpers/images";
import Card from "../components/card/Card";
import styled from "styled-components";

const TitleContainer = styled.article`
  position: relative;
  height: 60vh;
  width: 100%;

  img {
    object-fit: cover;
    height: 60vh;
    width: 100%;
  }
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(30, 30, 30, 0.48);
    color: white;
    align-items: center;
    justify-content: center;
    top: 0;
    font-size: xx-large;
  }
`;

const ClearBtn = styled.button`
  background-color: transparent;
  color: #556b84;
  padding: 10px;
  font-size: larger;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  &:hover {
    background-color: #dcdada;
  }
`;

const Aside = styled.aside`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const FavoritesPage: FC = () => {
  const [favsItems, setFavsItems] = useRecoilState(favsState);
  return (
    <section>
      <TitleContainer>
        <img src={images[2]} alt="Favorites" />
        <div>
          <h1>favorites</h1>
        </div>
      </TitleContainer>
      <Aside>
        <ClearBtn onClick={() => setFavsItems({ ...favsItems, favorites: [] })}>
          Clear all
        </ClearBtn>
        {favsItems?.favorites?.length ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            {favsItems?.favorites?.map((el, index) => (
              <Card {...el} inFavs key={index} image={getCardImage(index)} />
            ))}
          </div>
        ) : (
          <p>Nothing in here...</p>
        )}
      </Aside>
    </section>
  );
};

export default FavoritesPage;
