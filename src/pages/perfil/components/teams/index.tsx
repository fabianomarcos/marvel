import { ICreator, IInfoCharacters } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";
import { useEffect, useState } from "react";
import { useParams } from "@/hooks/useParams";
import { apiMarvel } from "@/lib/axios";
import { URLMarvelApi } from "@/utils/configMarvelApi";
import { Loader } from "@/components/Loader";

export function Teams() {
  const [showLoader, setShowLoader] = useState(false);
  const [teams, setTeams] = useState<ICreator[]>([]);
  const id = useParams("id");

  useEffect(() => {
    const getTeams = async () => {
      setShowLoader(true);
      const {
        data: { data: { results } },
      } = await apiMarvel.get(`/characters/${id}/stories${URLMarvelApi}`);

      setShowLoader(false);
    };
    setTeams([
      { name: 'Avengers' },
      { name: 'Defenders' },
      { name: 'Fantastic Four' },
    ])

    getTeams();
  }, []);
  return (
    <UL>
      {showLoader && <Loader />}
      {!showLoader && teams?.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </UL>
  );
}
