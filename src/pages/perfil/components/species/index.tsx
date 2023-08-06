import { IInfoCharacters } from "@/interfaces/types";
import { Container } from "../globalStylesComponents/styles";

interface IProps {
  character: IInfoCharacters;
}

export function Species({ character }: IProps) {
  return (
    <Container>
      <li>Mutate</li>
      <li>Genius</li>
      <li>Precognitive</li>
    </Container>
  );
}
