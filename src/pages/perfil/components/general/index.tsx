import Image from "next/image";
import { Container, Content, Description, Title } from "./styles";
import { IInfoCharacters } from "@/interfaces/types";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";

interface IProps {
  character: IInfoCharacters;
}

export function General({ character }: IProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoader(!character?.thumbnail?.path), 700);
  }, [character?.thumbnail?.path]);

  return (
    <Container>
      {showLoader && <Loader />}
      {!showLoader && (
        <>
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
        </>
      )}
    </Container>
  );
}
