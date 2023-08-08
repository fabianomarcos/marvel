import { useEffect, useState } from "react";

import { apiMarvel } from "@/lib/axios";
import { ICreator } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";
import { URLMarvelApi } from "@/utils/configMarvelApi";
import { useParams } from "@/hooks/useParams";

export function Authors() {
  const [creators, setCreators] = useState<ICreator[]>([]);
  const id = useParams("id");

  useEffect(() => {
    const getCreators = async () => {
      const {
        data: { data: { results } },
      } = await apiMarvel.get(`/characters/${id}/stories${URLMarvelApi}`);

      const creatorFormatted = results.map(
        (item: { creators: { items: ICreator[] } }) => item.creators.items
      )[0];

      setCreators(creatorFormatted);
    };

    getCreators();
  }, []);

  return (
    <UL>
      {creators?.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </UL>
  );
}
