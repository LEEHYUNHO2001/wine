import { BeerCard, Error, Loading } from ".";
import { useBeerData } from "../hooks/useBeerData";
// import { Beer } from "../types/Beer";
import styled from "styled-components";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface Beer {
  price: string;
  name: string;
  rating: {
    average: number;
    reviews: number;
  };
  image: string;
  id: number;
}

interface BeerContainerProps {
  name: string;
}

export const BeerContainer = ({ name }: BeerContainerProps) => {
  const { data, error } = useBeerData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <BeerTitle>{name} Beer</BeerTitle>
      <BeerCardContainer>
        {data.map((beerData: Beer) => {
          return (
            <BeerCard
              key={`${name}-beer-data-${beerData.id}`}
              beerData={beerData}
            />
          );
        })}
      </BeerCardContainer>
    </div>
  );
};

const BeerTitle = styled.h1`
  line-height: 180%;
  border-bottom: 1px solid #eee;
`;
const BeerCardContainer = styled.main`
  display: grid;
  gap: 1em;
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
