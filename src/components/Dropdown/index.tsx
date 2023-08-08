import React, { ChangeEventHandler, DetailedHTMLProps, OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { Container } from "./styles";

interface IOptions {
  name: string
  id: string
}

type SelectedProps = DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> & {
  options: IOptions[];
  name: string
  onChange: ChangeEventHandler<HTMLSelectElement>
};

export function Dropdown({ options, name, onChange = () => ({}), ...rest }: SelectedProps) {
  return (
    <Container>
      <select id={name} name={name} onChange={onChange}>
        <option value="">Selecione um agente...</option>
        {options?.map(({ name, id }) => {
          return (
            <option key={id} value={id} {...rest}>{name}</option>
          )
        })}
      </select>
    </Container>
  );
}
