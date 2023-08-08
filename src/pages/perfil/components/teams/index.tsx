import { IInfoCharacters } from "@/interfaces/types";
import { UL } from "../globalStylesComponents/styles";

interface IProps {
  character: IInfoCharacters;
}

export function Teams({ character }: IProps) {
  return (
    <UL>
      <li>Avengers</li>
      <li>Defenders</li>
      <li>Fantastic Four</li>
    </UL>
  );
}
