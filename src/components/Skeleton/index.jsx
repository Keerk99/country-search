import { Li } from "../Card/style";
import { Container, ContainerData } from "../Country/style";
import { Skeleton } from "@mui/material";

export function SkeletonCard() {
  return (
    <Li>
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          width: "100%",
          height: "160px",
          "@media (max-width: 1023px)": { height: "130px" },
          "@media (max-width: 639px)": { height: "120px" },
          "@media (max-width: 424px)": { height: "110px" },
        }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1.5rem", width: "80%", marginLeft: "1rem" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: "60%", marginLeft: "1rem" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: "50%", marginLeft: "1rem" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: "40%", marginLeft: "1rem" }}
      />
    </Li>
  );
}

export function SkeletonCountry() {
  return (
    <Container>
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{
          width: "40%",
          height: "300px",
          "@media (max-width: 1023px)": { height: "250px" },
          "@media (max-width: 639px)": { width: "100%", height: "200px" },
          "@media (max-width: 424px)": { height: "110px" },
        }}
      />
      <ContainerData>
        <Skeleton
          variant="text"
          sx={{
            fontSize: "2rem",
            width: "60%",
            "@media (max-width: 424px)": { fontSize: "1.5rem" },
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: "80%",
            "@media (max-width: 424px)": { fontSize: "1rem" },
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: "70%",
            "@media (max-width: 424px)": { fontSize: "1rem" },
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: "75%",
            "@media (max-width: 424px)": { fontSize: "1rem" },
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: "65%",
            "@media (max-width: 424px)": { fontSize: "1rem" },
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "1.5rem",
            width: "85%",
            "@media (max-width: 424px)": { fontSize: "1rem" },
          }}
        />
      </ContainerData>
    </Container>
  );
}
