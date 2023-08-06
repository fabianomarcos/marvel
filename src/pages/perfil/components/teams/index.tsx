import { IInfoCharacters } from "@/interfaces/types";
import { Container } from "../globalStylesComponents/styles";

interface IProps {
  character: IInfoCharacters;
}

export function Teams({ character }: IProps) {
  return (
    <Container>
      <li>Avengers</li>
      <li>Defenders</li>
      <li>Fantastic Four</li>
    </Container>
  );
}
