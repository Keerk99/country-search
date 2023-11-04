import { useState } from "react";
import { Container, Select, ContainerOptions, P, Ul, Li } from "./style";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function FilterByRegion({ selectedRegion, handleRegionChange }) {
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const RenderText = () => {
    return (
      <P onClick={handleToggle}>
        {selectedRegion === "All" || !selectedRegion
          ? "Filter by Region"
          : selectedRegion}
        {toggle ? <AiOutlineDown /> : <AiOutlineUp />}
      </P>
    );
  };

  return (
    <Container>
      <Select>{RenderText()}</Select>
      {toggle ? (
        <ContainerOptions>
          <Ul>
            {regions.map((region) => (
              <Li
                key={region}
                onClick={() => {
                  handleRegionChange(region);
                  handleToggle();
                }}
              >
                {region}
              </Li>
            ))}
          </Ul>
        </ContainerOptions>
      ) : null}
    </Container>
  );
}
