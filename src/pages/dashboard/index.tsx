import SideBar from '@/components/SideBar'
import Header from '@/components/Header'

import { Content, StructurePage } from './styles'

interface IProps {
  component: any
}

export function Structure({ component: Component}:IProps) {
  return (
    <StructurePage>
      <SideBar />
      <Content>
        <Header />
        <Component />
      </Content>
    </StructurePage>
  )
}
