import { useEffect } from "react";

import {
  CardContainer,
  Container,
  NotFoundItem,
  PaginationContainer,
} from "./styles";
import CardInfo from "../cardInfo";
import { Pagination } from "@/components/Pagination";
import { useStore } from "@/hooks/store";

export function HomePage() {
  const { characters, getAgents, loading, count, setPage, page } = useStore();
  const limitPage = page * 12;
  const perPage = 10;
  const limit = 100
  const pageStart = count <= limitPage ? 1 : (page - 1) * perPage;
  const pageEnd = count <= limitPage ? 10 : pageStart + perPage;

  useEffect(() => {
    getAgents({ limit });
  }, []);


  const paginatedCharacter = characters.slice(pageStart, pageEnd);

  return (
    <>
      {paginatedCharacter?.length > 0 && (
        <Container>
          <CardContainer>
            <CardInfo infoCharacters={paginatedCharacter} />
          </CardContainer>
          <PaginationContainer>
            <Pagination page={page} setCurrentPage={setPage} count={count} />
          </PaginationContainer>
        </Container>
      )}
      {paginatedCharacter?.length === 0 && !loading && (
        <NotFoundItem>
          <span>:(</span>{" "}
          <span>Nenhum Herói foi encontrado! Tente novamente!</span>
        </NotFoundItem>
      )}
    </>
  );
}
