import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Container } from './styles'
import { IconProps } from 'phosphor-react';

interface IProps {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  linkName: string
  isActive: boolean
}

export default function IconRouter({ icon: Icon, linkName, isActive }: IProps) {
  return (
    <Container isActive={isActive}>
      <Icon size={20} />
      <span>{linkName}</span>
    </Container>
  )
}
