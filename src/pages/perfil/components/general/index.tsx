import Image from "next/image";
import { Container, Content, Description, Title } from "./styles";
import { IInfoCharacters } from "@/interfaces/types";

interface IProps {
  character: IInfoCharacters;
}

export function General({ character }: IProps) {
  return (
    <Container>
      <Image
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        width={121}
        height={91}
        quality={100}
      />
      <Content>
        <Title>{character.name}</Title>
        <Description>{character.description}</Description>
      </Content>
    </Container>
  );
}
