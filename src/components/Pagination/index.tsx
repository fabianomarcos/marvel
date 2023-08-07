import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Container } from "./styles";
import { useState } from "react";

interface IProps {
  page: number;
  total: number;
  setCurrentPage: any;
}

export function Pagination({ page, total, setCurrentPage }: IProps) {
  const goToUnderPage = () => setCurrentPage(page - 1);
  const goToUpperPage = () => setCurrentPage(page + 1);
  const goToSelectedPage = (_page: number) => setCurrentPage(_page);
  const last = Math.floor(total / 10);
  const pages = {
    last,
    penultimate: last - 1,
    antePenultimate: last - 2,
  };

  return (
    <Container>
      <button onClick={goToUnderPage}>
        <FiArrowLeft size={20} color="#747D94" />
        <span>Anterior</span>
      </button>
      <button onClick={() => goToSelectedPage(1)}>1</button>
      <button onClick={() => goToSelectedPage(2)}>2</button>
      <button onClick={() => goToSelectedPage(3)}>3</button>
      <span>...</span>
      <button onClick={() => goToSelectedPage(pages.antePenultimate)}>
        {pages.antePenultimate}
      </button>
      <button onClick={() => goToSelectedPage(pages.penultimate)}>
        {pages.penultimate}
      </button>
      <button onClick={() => goToSelectedPage(pages.last)}>{pages.last}</button>
      <button onClick={goToUpperPage}>
        <span>Próxima</span>
        <FiArrowRight size={20} color="#747D94" />
      </button>
    </Container>
  );
}
