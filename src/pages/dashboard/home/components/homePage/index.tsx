import { useEffect, useState } from "react";

import { CardContainer, Container, PaginationContainer } from "./styles";
import CardInfo from "../cardInfo";
import { Pagination } from "@/components/Pagination";
import { useStore } from "@/hooks/store";

export function HomePage() {
  const [page, setPage] = useState(1)
  const { characters, getAgents } = useStore()
  const limitPage = page * 12
  const limit = limitPage <= 100 ? page * 12 : 100

  useEffect(() => {
    getAgents({ limit })
  }, [page])

  const perPage = 10
  const pageStart = (page - 1) * perPage
  const pageEnd = (pageStart + perPage)

  const paginatedCharacter = characters.slice(pageStart, pageEnd)

  return (
    <Container>
      <CardContainer>
        <CardInfo infoCharacters={paginatedCharacter} />
      </CardContainer>
      <PaginationContainer>
        <Pagination total={100} page={page} setCurrentPage={setPage} />
      </PaginationContainer>
    </Container>
  );
}
