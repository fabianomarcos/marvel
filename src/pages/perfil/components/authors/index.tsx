import { IInfoCharacters } from "@/interfaces/types";
import { Container } from "../globalStylesComponents/styles";

interface IProps {
  character: IInfoCharacters;
}

export function Authors({ character }: IProps) {
  return (
    <Container>
      <li>Stan Lee</li>
      <li>Steve Ditko</li>
    </Container>
  );
}
