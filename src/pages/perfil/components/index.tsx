import { useEffect, useState } from "react";
import { Container, Li, Title } from "./styles";
import { apiMarvel } from "@/lib/axios";
import { useRouter } from "next/router";

import { configMarvelApi } from "@/utils/configMarvelApi";

import { General } from "./general";
import { Teams } from "./teams";
import { Powers } from "./powers";
import { Species } from "./species";
import { Authors } from "./authors";
import { IInfoCharacters } from "@/interfaces/types";

export function Perfil() {
  const [activatedInfo, setActivatedInfo] = useState("general");
  const [character, setCharacter] = useState({} as IInfoCharacters);
  const router = useRouter();
  const { apiKey, hash, timestamp } = configMarvelApi;
  const id = router.query.id;

  useEffect(() => {
    const getAgent = async () => {
      const request = apiMarvel.get(
        `/characters/${id}?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limite=12`
      );
      const {
        data: {
          data: { results },
        },
      } = await request;
      console.log("data.results: ", results);
      setCharacter(results[0]);
    };
    if (id) getAgent();
  }, []);
  console.log("character: ", character);

  const isActivated = (tab: string) =>
    ({
      general: activatedInfo === "general",
      teams: activatedInfo === "teams",
      powers: activatedInfo === "powers",
      species: activatedInfo === "species",
      authors: activatedInfo === "authors",
    })[tab];

  return (
    <Container>
      <Title>
        Perfil <strong>/</strong> <span>{character.name}</span>
      </Title>

      <ul>
        <Li
          isActive={isActivated("general")}
          onClick={() => setActivatedInfo("general")}
        >
          Visão Geral
        </Li>
        <Li
          isActive={isActivated("teams")}
          onClick={() => setActivatedInfo("teams")}
        >
          Teams
        </Li>
        <Li
          isActive={isActivated("powers")}
          onClick={() => setActivatedInfo("powers")}
        >
          Powers
        </Li>
        <Li
          isActive={isActivated("species")}
          onClick={() => setActivatedInfo("species")}
        >
          Species
        </Li>
        <Li
          isActive={isActivated("authors")}
          onClick={() => setActivatedInfo("authors")}
        >
          Authors
        </Li>
      </ul>

      {isActivated("general") && character?.thumbnail && (
        <General character={character} />
      )}

      {isActivated("teams") && <Teams character={character} />}

      {isActivated("powers") && <Powers character={character} />}

      {isActivated("species") && <Species character={character} />}

      {isActivated("authors") && <Authors character={character} />}
    </Container>
  );
}
