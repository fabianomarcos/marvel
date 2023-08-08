import Image from "next/image";

import { IInfoCharacters } from "@/interfaces/types";
import { Container, DescriptionCard } from "./styles";
import Link from "next/link";

interface IProps {
  infoCharacters: IInfoCharacters[];
}

export default function CardInfo({ infoCharacters }: IProps) {
  return (
    <>
      {infoCharacters?.map((info) => {
        if (info?.id) {
          const formattedDescription =
            info.description.length > 150
              ? `${info.description.substring(0, 150)}...`
              : info.description;

          return (
            <Link href={`/perfil/${info.id}`}>
              <Container key={info.name}>
                <Image
                  src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
                  alt={info.name}
                  width={83}
                  height={119}
                  quality={100}
                />
                <DescriptionCard>
                  <strong>{info.name}</strong>
                  <span>{formattedDescription}</span>
                </DescriptionCard>
              </Container>
            </Link>
          );
        }
      })}
    </>
  );
}
