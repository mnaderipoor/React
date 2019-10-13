import React, { Component } from "react";
import RadarChart from "../components/chart/radarChart";
import Radar from "../components/chart/radar";
import _ from "lodash";
import Speedometer from "../components/chart/speedometer"
import PieBizcharts  from "../components/chart/pieBizcharts"
import RadarBizcharts from "../components/chart/radarBizcharts"
import LineBizcharts from "../components/chart/lineBizcharts"
import BarBizcharts from "../components/chart/barBizcharts"
import {
  Button,
  Card,
  Col,
  Divider,
  Icon,
  PageHeader,
  Progress,
  Row,
  Table
} from "antd";
import {getThreats} from "../services/threatService";
import {Link} from "react-router-dom";

class Dashboard extends Component {
  state = {
     data : [
      {
        item: "a",
        value: 40
      },
      {
        item: "b",
        value: 61
      },
      {
        item: "c",
        value: 27
      },
      {
        item: "d",
        value: 83
      },
      {
        item: "e",
        value: 9
      }
    ],
    threats: [],
    dataSource : [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      }
  ],
    columns : [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }
    ]
  };
  async componentDidMount() {
    const { data: threats } = await getThreats();
    this.setState({ threats });
  }


  render() {
    return(
    <div id="dashboard">
      <PageHeader
        className="disable-back"
        onBack={() => null}
        backIcon={<Icon type="dashboard" />}
        // title="سامانه اشتراک گذاری هشدارهای امنیتی"
      />
      <Row className="page-content">
        <Divider>
            <h2>"آگاهی وضعیتی"</h2>
        </Divider>
        <br />
        <Row gutter={16} type="flex" justify="space-between" className="up-status">
          <Col span={12} className="text-center" style={{ marginBottom: 20 }}>
            <Card title="تاثیر آگاهی وضعیتی بر پارامترهای PESTEL"  className="card-progress box-shadow">

              <BarBizcharts data={this.state.data}/>
            </Card>
          </Col>
          <Col span={12} className="text-center"  >
            <Card  title="برآیند آگاهی وضعیتی قلمروها" className="card-progress box-shadow">
              {/*<Speedometer />*/}
              <BarBizcharts data={this.state.data}/>
            </Card>
          </Col>
        </Row>
        <br />
        <Divider>
          <h2 className="no-margin">
           "تهدیدها"
          </h2>
        </Divider>
        <br />
        <Row className="threat-list padding-side-20 component-background box-shadow">
          <Table
              size="small"
              bordered
              dataSource={this.state.dataSource}
              rowKey="id"
              columns={this.state.columns}
              pagination={{ pageSize: 10 }}
              scroll={{ x: 1300, y:240 }}
          />
          <br />
        </Row>
        <Row gutter={16} type="flex" justify="space-between" className="up-status">
          <Col span={12} className="text-center" style={{ marginBottom: 20 }}>
            <Card title="درصد رخداد انواع تهدید"  className="card-progress box-shadow">

              <PieBizcharts data={this.state.data}/>
            </Card>
          </Col>
          <Col span={12} className="text-center"  >
            <Card  title="تعداد کل تهدیدها بر حسب زمان" className="card-progress box-shadow">
              <PieBizcharts data={this.state.data}/>
            </Card>
          </Col>
        </Row>
        <br />
        <Divider>
          <h2 className="no-margin">
            "فراهشدارها"
          </h2>
        </Divider>
        <br />
        <Row gutter={16} type="flex" justify="space-between" className="up-status">
          <Col span={18}  offset={3}>
            <Card title="تعداد کل فراهشدارها برحسب زمان"  className="card-progress box-shadow">
              <LineBizcharts data={this.state.data}/>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  )
  }
}

export default Dashboard;
