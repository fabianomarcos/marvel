import { IInfoCharacters } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";

interface IProps {
  character: IInfoCharacters;
}

export function Powers({ character }: IProps) {
  return (
    <UL>
      <li>Agility</li>
      <li>Genius</li>
      <li>Precognitive</li>
    </UL>
  );
}
