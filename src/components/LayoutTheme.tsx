import Navbar from "./Navbar"
import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { UserWallet } from "../hooks/UserWallet"

interface ILayoutProps {
    children: JSX.Element | JSX.Element[]
}

const LayoutTheme = ({children}: ILayoutProps) => {
  return (
    <UserWallet>
      <Layout className="max-w-screen max-h-screen">        
          <Navbar/>
          <Layout className="w-full h-screen overflow-auto">
            <Content>
              {children}
            </Content>
          </Layout>
      </Layout>
    </UserWallet>
  )
}

export default LayoutTheme