import { IInfoCharacters } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";

interface IProps {
  character: IInfoCharacters;
}

export function Species({ character }: IProps) {
  return (
    <UL>
      <li>Mutate</li>
      <li>Genius</li>
      <li>Precognitive</li>
    </UL>
  );
}
