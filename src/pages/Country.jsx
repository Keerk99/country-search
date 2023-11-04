import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainContainer } from "../components/Main/style";
import {
  BtnBack,
  Section,
  Container,
  Img,
  ContainerData,
  Title,
  ListContainer,
  Ul,
  Li,
  ContainerBorder,
  P,
  BtnContiner,
  BtnCountry,
  Span,
} from "../components/Country/style";
import { BsArrowLeft } from "react-icons/bs";
import { SkeletonCountry } from "../components/Skeleton";

export default function Country() {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [borderNames, setBorderNames] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const urlAPI = "https://restcountries.com/v3.1/";

  const handleLoading = (time) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time);
  };

  useEffect(() => {
    const fetchCountry = async (countryName) => {
      try {
        const response = await fetch(
          `${urlAPI}name/${countryName}?fullText=true`
        );
        if (!response.ok) {
          navigate("*");
          throw new Error(`Error at getting country data: ${response.status}`);
        }
        const data = await response.json();
        if (data.length === 0) {
          navigate("/");
        } else {
          setCountry(data[0]);
          fetchBorderNames(data[0].borders);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry(countryName);
    handleLoading(500);
  }, [countryName, navigate]);

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;

  let commonName = "";
  if (name && name.nativeName) {
    for (let key in name.nativeName) {
      const item = name.nativeName[key];
      if (item.common) {
        commonName = item.common;
        break;
      }
    }
  }

  let currency = "";
  if (currencies) {
    for (let key in currencies) {
      const item = currencies[key];
      if (item.name) {
        currency = item.name;
        break;
      }
    }
  }

  let formattedLanguages = null;
  if (languages && Object.values(languages).length > 0) {
    formattedLanguages = Object.values(languages).join(", ") + "";
  }

  const fetchBorderNames = async (borderCodes) => {
    if (borderCodes && borderCodes.length > 0) {
      try {
        const response = await fetch(
          `${urlAPI}alpha?codes=${borderCodes.join(",") + ""}`
        );
        if (!response.ok) {
          throw new Error(
            `Error at getting border countries data: ${response.status}`
          );
        }
        const data = await response.json();
        const borderNames = data.map(
          (borderCountry) => borderCountry.name.common
        );
        setBorderNames(borderNames);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const RenderBorderCountries = () => {
    if (borderNames.length > 0) {
      return borderNames.map((border, index) => (
        <BtnCountry to={`/country/${border}`} key={index}>
          {border}
        </BtnCountry>
      ));
    } else {
      return <Span>N/A</Span>;
    }
  };

  return (
    <MainContainer>
      <Section>
        <BtnBack to={"/"}>
          <BsArrowLeft />
          Back
        </BtnBack>
        {loading ? (
          <SkeletonCountry />
        ) : (
          <Container>
            {flags && <Img src={flags.png} alt={name.common} />}
            <ContainerData>
              <Title>{name.common ? name.common : "N/A"}</Title>
              <ListContainer>
                <Ul>
                  <Li>
                    Native Name:<P>{commonName ? commonName : "N/A"}</P>
                  </Li>
                  <Li>
                    Population:
                    <P>{population && population.toLocaleString()}</P>
                  </Li>
                  <Li>
                    Region:<P>{region ? region : "N/A"}</P>
                  </Li>
                  <Li>
                    Sub Region:<P> {subregion ? subregion : "N/A"}</P>
                  </Li>
                  <Li>
                    Capital:
                    <P>{capital ? capital.join(", ") + "" : "N/A"}</P>
                  </Li>
                </Ul>
                <Ul>
                  <Li>
                    Top Level Domain:<P>{tld ? tld[0] : "N/A"}</P>
                  </Li>
                  <Li>
                    Currencies:<P>{currency ? currency : "N/A"}</P>
                  </Li>
                  <Li>
                    Languages:
                    <P>{formattedLanguages ? formattedLanguages : "N/A"}</P>
                  </Li>
                </Ul>
              </ListContainer>
              <ContainerBorder>
                <Li>Border Countries:</Li>
                <BtnContiner>{RenderBorderCountries()}</BtnContiner>
              </ContainerBorder>
            </ContainerData>
          </Container>
        )}
      </Section>
    </MainContainer>
  );
}
