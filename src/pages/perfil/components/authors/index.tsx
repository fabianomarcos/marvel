import { useEffect, useState } from "react";

import { apiMarvel } from "@/lib/axios";
import { ICreator } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";
import { URLMarvelApi } from "@/utils/configMarvelApi";
import { useParams } from "@/hooks/useParams";
import { Loader } from "@/components/Loader";

export function Authors() {
  const [showLoader, setShowLoader] = useState(false);
  const [creators, setCreators] = useState<ICreator[]>([]);
  const id = useParams("id");

  useEffect(() => {
    const getCreators = async () => {
      setShowLoader(true);
      const {
        data: { data: { results } },
      } = await apiMarvel.get(`/characters/${id}/stories${URLMarvelApi}`);

      const creatorFormatted = results.map(
        (item: { creators: { items: ICreator[] } }) => item.creators.items
      )[0];

      setCreators(creatorFormatted);
      setShowLoader(false);
    };

    getCreators();
  }, []);

  return (
    <UL>
      {showLoader && <Loader />}
      {creators?.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </UL>
  );
}
