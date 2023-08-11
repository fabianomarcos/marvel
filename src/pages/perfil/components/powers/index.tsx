import { ICreator, IInfoCharacters } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";
import { useEffect, useState } from "react";
import { apiMarvel } from "@/lib/axios";
import { URLMarvelApi } from "@/utils/configMarvelApi";
import { useParams } from "@/hooks/useParams";
import { Loader } from "@/components/Loader";

export function Powers() {
  const [showLoader, setShowLoader] = useState(false);
  const [powers, setPowers] = useState<ICreator[]>([]);
  const id = useParams("id");

  useEffect(() => {
    const getPowers = async () => {
      setShowLoader(true);
      const {
        data: { data: { results } },
      } = await apiMarvel.get(`/characters/${id}/stories${URLMarvelApi}`);

      setShowLoader(false);
    };
    setPowers([
      { name: 'Agility' },
      { name: 'Genius' },
      { name: 'Precognitive' },
    ])

    getPowers();
  }, []);

  return (
    <UL>
      {showLoader && <Loader />}
      {!showLoader && powers?.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </UL>
  );
}
