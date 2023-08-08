import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Container } from "./styles";

interface IProps {
  page: number;
  count: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Pagination({ page, setCurrentPage, count }: IProps) {
  const last = Math.floor(count / 10);
  const pages = {
    last,
    penultimate: last - 1,
    antePenultimate: last - 2,
  };

  const goToUnderPage = () => {
    if (page > 1) setCurrentPage(page - 1);
  };

  const goToUpperPage = () => {
    if (last > page) setCurrentPage(page + 1);
  };

  const goToSelectedPage = (_page: number) => setCurrentPage(_page);
  const disableButton = (pageComponent: number) => page === pageComponent;
  const show = (pageComponent: number) => count / 10 >= pageComponent;
  const showButton = (pageComponent: number) =>
    pageComponent > 3 && show(pageComponent);

  return (
    <Container>
      <button onClick={goToUnderPage} disabled={disableButton(1)}>
        <FiArrowLeft size={20} color="#747D94" />
        <span>Anterior</span>
      </button>

      <button onClick={() => goToSelectedPage(1)} disabled={disableButton(1)}>
        1
      </button>
      {show(2) && (
        <button onClick={() => goToSelectedPage(2)} disabled={disableButton(2)}>
          2
        </button>
      )}
      {show(3) && (
        <button onClick={() => goToSelectedPage(3)} disabled={disableButton(3)}>
          3
        </button>
      )}

      <span>...</span>

      {showButton(pages.antePenultimate) && (
        <button
          onClick={() => goToSelectedPage(pages.antePenultimate)}
          disabled={disableButton(pages.antePenultimate)}
        >
          {pages.antePenultimate}
        </button>
      )}
      {showButton(pages.penultimate) && (
        <button
          onClick={() => goToSelectedPage(pages.penultimate)}
          disabled={disableButton(pages.penultimate)}
        >
          {pages.penultimate}
        </button>
      )}
      {showButton(pages.last) && (
        <button
          onClick={() => goToSelectedPage(pages.last)}
          disabled={disableButton(pages.last)}
        >
          {pages.last}
        </button>
      )}

      <button onClick={goToUpperPage} disabled={disableButton(pages.last)}>
        <span>Próxima</span>
        <FiArrowRight size={20} color="#747D94" />
      </button>
    </Container>
  );
}
