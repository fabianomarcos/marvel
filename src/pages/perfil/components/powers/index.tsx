import { IInfoCharacters } from "@/interfaces/types";
import { Container } from "../globalStylesComponents/styles";

interface IProps {
  character: IInfoCharacters;
}

export function Powers({ character }: IProps) {
  return (
    <Container>
      <li>Agility</li>
      <li>Genius</li>
      <li>Precognitive</li>
    </Container>
  );
}
