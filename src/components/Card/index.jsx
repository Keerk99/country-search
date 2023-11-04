import { LinkCard, Li, Img, TextContainer, H2, H3, P } from "./style";

export default function Card({ country }) {
  const { name, flags, population, region, capital } = country;
  return (
    <LinkCard to={`/country/${name.common}`}>
      <Li>
        <Img src={flags.png} alt={name.common} />
        <TextContainer>
          <H2>{name.common}</H2>
          <H3>
            Population: <P>{population.toLocaleString()}</P>
          </H3>
          <H3>
            Region: <P>{region}</P>
          </H3>
          <H3>
            Capital: <P>{capital ? capital[0] : "N/A"}</P>
          </H3>
        </TextContainer>
      </Li>
    </LinkCard>
  );
}
