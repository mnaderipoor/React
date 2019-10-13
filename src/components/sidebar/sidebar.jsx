import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from "antd";
import logo from "../../asset/logo/logo2.png";
import "./sidebar.css";

const SideBar = () => {
  const menuInfo = [
    { id: "1", icon: "home", route: "/dashboard", name: "صفحه اصلی" },
    { id: "2", icon: "warning", route: "/risks", name: "فراهشدارها" },
    { id: "3", icon: "fund", route: "/sa", name: "آگاهی وضعیتی" },
    { id: "4", icon: "border-outer", route: "/threats", name: "تهدیدها" },
    { id: "5", icon: "user", route: "#", name: "کاربران" },
    { id: "6", icon: "setting", route: "#", name: "تنظیمات" }
  ];
  return (
    <React.Fragment>
      {/* <i className="fas fa-home"></i> */}
      {/* <i className="fas fa-exclamation-triangle"></i> */}
      {/* <i className="fas fa-traffic-light"></i> */}
      {/* <i className="fas fa-radiation-alt"></i> */}
      {/* <i className="fas fa-user-cog"></i> */}
      {/* <i className="fas fa-cog"></i> */}
      <div className="logo" style={{ textAlign: "center" }}>
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-center"
          alt="logo"
        />
        <span>وزارت دفاع</span>
      </div>

      <Menu
        className="menu"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
      >
        {menuInfo.map(item => (
          <Menu.Item key={item.id}>
            <NavLink to={item.route}>
              {/* <i className="fas fa-home"></i> */}
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default SideBar;
