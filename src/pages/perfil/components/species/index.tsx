import { ICreator, IInfoCharacters } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";
import { apiMarvel } from "@/lib/axios";
import { URLMarvelApi } from "@/utils/configMarvelApi";
import { useEffect, useState } from "react";
import { useParams } from "@/hooks/useParams";
import { Loader } from "@/components/Loader";

interface IProps {
  character: IInfoCharacters;
}

export function Species({ character }: IProps) {
  const [showLoader, setShowLoader] = useState(false);
  const [species, setSpecies] = useState<ICreator[]>([]);
  const id = useParams("id");

  useEffect(() => {
    const getSpecies = async () => {
      setShowLoader(true);
      const {
        data: {
          data: { results },
        },
      } = await apiMarvel.get(`/characters/${id}/stories${URLMarvelApi}`);

      setShowLoader(false);
    };
    setSpecies([
      { name: "Mutate" },
      { name: "Genius" },
      { name: "Precognitive" },
    ]);

    getSpecies();
  }, []);
  return (
    <UL>
      {showLoader && <Loader />}
      {!showLoader &&
        species?.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
    </UL>
  );
}
