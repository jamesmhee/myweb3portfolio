import React, { useState } from "react";
import type { MenuProps } from "antd";
import { ConfigProvider, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import ConnectWalletButton from "../components/ConnectWalletButton";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: (
        <Link to="/">
            HOME
        </Link>
    ),
    key: "Home",
    icon: <GrHomeRounded />,
  },  
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("Home");

  const onClick: MenuProps["onClick"] = (e) => {    
    setCurrent(e.key);
  };

  return (
    <ConfigProvider theme={{        
        components: {            
            Menu: {
                colorBgContainer: 'transparent',
                colorText: 'white',
                colorPrimary: 'white',                
            }
        }
    }}>
        <Header className="bg-black backdrop-blur	flex items-center px-5 py-10 max-w-screen sticky top-0">
            <Menu                            
                onClick={onClick}                
                selectedKeys={[current]}
                mode="horizontal"        
                items={items}
                style={{ flex: 1, minWidth: 0, justifyContent: 'between', border: 'none'}}
            />      
            <ConnectWalletButton/>                  
        </Header>
    </ConfigProvider>
  );
};

export default App;
