import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  MainContainer,
  Section,
  ContainerSearchFilter,
  Search,
  Input,
  Ul,
} from "./style";
import Card from "../Card";
import FilterByRegion from "../FilterSelect";
import { SkeletonCard } from "../Skeleton";

export default function Main() {
  const urlAPI = "https://restcountries.com/v3.1/";

  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [showNoResult, setShowNoResult] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLoading = (time) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time);
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(`${urlAPI}all`);
      if (!response.ok) {
        throw new Error(`Error at getting API data: ${response.status}`);
      }
      const data = await response.json();
      setAllCountries(data);
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCountries();
    handleLoading(800);
  }, []);

  const handleSearch = (e) => {
    const searchCountry = e.target.value;
    setSearchKey(searchCountry);

    if (searchCountry === "") {
      setCountries(allCountries);
      setShowNoResult(false);
    } else {
      const filtered = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      );
      setCountries(filtered);
      setShowNoResult(filtered.length === 0);
      handleLoading(500);
    }
  };

  const handleRegionChange = async (regionValue) => {
    setSelectedRegion(regionValue);
    if (regionValue === "All") {
      fetchCountries();
      handleLoading(500);
    } else {
      try {
        const response = await fetch(`${urlAPI}region/${regionValue}`);
        if (!response.ok) {
          throw new Error(`Error at getting API data: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
        handleLoading(500);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <MainContainer>
      <Section>
        <ContainerSearchFilter>
          <form>
            <Search>
              <AiOutlineSearch />
              <Input
                type="text"
                placeholder="Search for a country..."
                value={searchKey}
                onChange={handleSearch}
                onKeyDown={handleKeyPress}
                id="countryName"
              />
            </Search>
          </form>
          <FilterByRegion
            selectedRegion={selectedRegion}
            handleRegionChange={handleRegionChange}
          />
        </ContainerSearchFilter>
        <Ul>
          {loading ? (
            countries.map((_, index) => <SkeletonCard key={index} />)
          ) : showNoResult ? (
            <div>No hay resultado</div>
          ) : (
            countries.map((country, index) => (
              <Card country={country} key={index} />
            ))
          )}
        </Ul>
      </Section>
    </MainContainer>
  );
}
