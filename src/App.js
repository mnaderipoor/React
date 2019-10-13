// obj from third-parties library
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
// components from our application
import SiderMenu from "./components/sidebar/sidebar";
import auth from "./services/authService";
import { Layout } from "antd";
import Routes from "./config/routeLowLevel"
//css modules
import "./App.css";
import "react-toastify/dist/ReactToastify.css";


const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  state = { collapsed: false };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });

  }
  render() {
    return (
      <div>
          <ToastContainer />
        <Layout style={{ minHeight: "100vh", textAlign: "right" }}>
          <Layout>
            <Header
              style={{
                background: "#۲۱۲۵۲۹",
                padding: 0
              }}
            />
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
                <Routes/>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <SiderMenu />
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default App;
