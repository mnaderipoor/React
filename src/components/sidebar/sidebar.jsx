import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "antd";
import logo from "../../assets/logo/logo2.png";
import "./sidebar.css";
import { useTranslation } from 'react-i18next';
const SideBar = () => {

    const { SubMenu } = Menu;
    //these 4 line is used for translation
    const { t, i18n } = useTranslation();
    const changeLanguage = (event) => {
        i18n.changeLanguage(event)
    }
    const menuInfo = [
        { id: "1", icon: "home", route: "/dashboard", name: t('sidebar.home') },
        { id: "2", icon: "warning", route: "/risks", name: t('sidebar.metaAlert') },
        { id: "3", icon: "fund", route: "/sa", name: t('sidebar.situationalAwareness') },
        { id: "4", icon: "border-outer", route: "/threats", name: t('sidebar.threats') },
        { id: "5", icon: "user", route: "#", name: t('sidebar.users') },
        { id: "6", icon: "setting", route: "#", name: t('sidebar.setting') },
        { id: "7", icon: "global", route: "#", name: t('sidebar.language') ,submenu:[{id: "8", value:"en", name: t('sidebar.chosenLanguage2')},{id: "9",value:"fa", name: t('sidebar.chosenLanguage1')}]}
    ];
  return (
    <React.Fragment>
      {/* <i className="fas fa-home"></i> */}


      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}

      >
        {menuInfo.map(item => {
            if (item.name == t('sidebar.language') )
                return(
                    <SubMenu
                        key={item.id}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.name}</span>
                            </span>
                        }
                    >
                        <Menu.Item key={item.submenu[0].id}>
                            <NavLink  onClick={() => {
                                changeLanguage(item.submenu[0].value)
                            }} to="#">
                                <span>{item.submenu[0].name}</span>
                                {console.log("-------------------")}

                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key={item.submenu[1].id}>
                            <NavLink onClick={() => {
                                changeLanguage(item.submenu[1].value)
                            }}  to="#">
                                <span>{item.submenu[1].name}</span>

                            </NavLink>
                        </Menu.Item>

                    </SubMenu>

                );
            return(
                <Menu.Item key={item.id}>
                <NavLink to={item.route}>
                    <Icon type={item.icon}/>
                    <span>{item.name}</span>

                </NavLink>
            </Menu.Item>
            )
        })}
      </Menu>
    </React.Fragment>
  );
};

export default SideBar;
