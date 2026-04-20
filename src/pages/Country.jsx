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
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchBorderNames = async (borderCodes) => {
      if (!borderCodes || borderCodes.length === 0) {
        setBorderNames([]);
        return;
      }

      try {
        const response = await fetch(
          `${apiUrl}alpha?codes=${borderCodes.join(",")}`,
        );

        if (!response.ok) {
          throw new Error(
            `Error at getting border countries data: ${response.status}`,
          );
        }

        const data = await response.json();
        const names = data.map((borderCountry) => borderCountry.name.common);
        setBorderNames(names);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };

    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `${apiUrl}name/${countryName}?fullText=true`,
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
          await fetchBorderNames(data[0].borders);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (apiUrl && countryName) {
      setLoading(true);
      fetchCountry();
    }
  }, [apiUrl, countryName, navigate]);

  const RenderBorderCountries = () => {
    if (borderNames.length > 0) {
      return borderNames.map((border, index) => (
        <BtnCountry to={`/country/${border}`} key={index}>
          {border}
        </BtnCountry>
      ));
    }

    return <Span>N/A</Span>;
  };

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
    formattedLanguages = Object.values(languages).join(", ");
  }

  if (loading) {
    return (
      <MainContainer>
        <SkeletonCountry />
      </MainContainer>
    );
  }

  if (error) {
    navigate("*");
    return null;
  }

  return (
    <MainContainer>
      <Section>
        <BtnBack to={"/"}>
          <BsArrowLeft />
          Back
        </BtnBack>

        <Container>
          {flags && (
            <Img src={flags.png} alt={name?.common || "country flag"} />
          )}

          <ContainerData>
            <Title>{name?.common || "N/A"}</Title>

            <ListContainer>
              <Ul>
                <Li>
                  Native Name:<P>{commonName || "N/A"}</P>
                </Li>
                <Li>
                  Population:<P>{population?.toLocaleString() || "N/A"}</P>
                </Li>
                <Li>
                  Region:<P>{region || "N/A"}</P>
                </Li>
                <Li>
                  Sub Region:<P>{subregion || "N/A"}</P>
                </Li>
                <Li>
                  Capital:<P>{capital?.join(", ") || "N/A"}</P>
                </Li>
              </Ul>

              <Ul>
                <Li>
                  Top Level Domain:<P>{tld?.[0] || "N/A"}</P>
                </Li>
                <Li>
                  Currencies:<P>{currency || "N/A"}</P>
                </Li>
                <Li>
                  Languages:<P>{formattedLanguages || "N/A"}</P>
                </Li>
              </Ul>
            </ListContainer>

            <ContainerBorder>
              <Li>Border Countries:</Li>
              <BtnContiner>{RenderBorderCountries()}</BtnContiner>
            </ContainerBorder>
          </ContainerData>
        </Container>
      </Section>
    </MainContainer>
  );
}
