import React, { Component } from "react";
import _ from "lodash";
import Speedometer from "../components/chart/speedometer"
import GaugeBizcharts from "../components/chart/gaugeBizcharts"
import PieBizcharts  from "../components/chart/pieBizcharts"
import RadarBizcharts from "../components/chart/radarBizcharts"
import LineBizcharts from "../components/chart/lineBizcharts"
import BarBizcharts from "../components/chart/barBizcharts"
import TrafficLight from '../components/common/trafficLight';
import TLP from '../components/common/tlp';
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
import TableAnt from "../components/table/tableAnt";

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
      {/*<PageHeader*/}
      {/*  className="disable-back"*/}
      {/*  onBack={() => null}*/}
      {/*  backIcon={<Icon type="dashboard" />}*/}
      {/*  // title="سامانه اشتراک گذاری هشدارهای امنیتی"*/}
      {/*/>*/}
      <Row className="page-content">
        <Divider>
            <h4>"آگاهی وضعیتی"</h4>
        </Divider>
        <br />
        <Row  gutter={16} type="flex" justify="space-between" className="up-status">
          <Col span={10} className="text-center" style={{ marginBottom: 20 }}>
            <Card  bordered={false} title="تاثیر آگاهی وضعیتی بر پارامترهای PESTEL" className="card-progress box-shadow" >
              <RadarBizcharts data={this.state.data} />
            </Card>
          </Col>
          <Col span={10} className="text-center" style={{ marginBottom: 20 }}>
            <Card  bordered={false} title="برآیند آگاهی وضعیتی قلمروها" className="card-progress box-shadow"
                // style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}
                // headStyle={{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0 }}
                // bodyStyle={{backgroundColor: '#212529', border: 0 }}
            >
              <Speedometer/>
            </Card>
          </Col>
          <Col span={4} className="text-center"  >
            <Card  bordered={false} title="TLP" className="card-progress box-shadow">
              <TLP width="60"  height="250"/>
            </Card>
          </Col>
        </Row>
        <br />
        <Divider>
          <h4 className="no-margin">
           "تهدیدها"
          </h4>
        </Divider>
        <br />
        {/*<Row className="threat-list padding-side-20 component-background box-shadow">*/}
        {/*  <Table*/}
        {/*      size="small"*/}
        {/*      bordered*/}
        {/*      dataSource={this.state.dataSource}*/}
        {/*      rowKey="id"*/}
        {/*      columns={this.state.columns}*/}
        {/*      pagination={{ pageSize: 10 }}*/}
        {/*      scroll={{ x: 1300, y:240 }}*/}
        {/*  />*/}
        {/*  <br />*/}
        {/*</Row>*/}
        <Row className="threat-list padding-side-20 component-background box-shadow">
          <TableAnt />
        </Row>
        <br />
        <br />
        <Row gutter={16} type="flex" justify="space-between" className="up-status">
          <Col span={12} className="text-center" style={{ marginBottom: 20 }}>
            <Card  bordered={false} title="درصد رخداد انواع تهدید"  className="card-progress box-shadow">

              <PieBizcharts data={this.state.data}/>
            </Card>
          </Col>
          <Col span={12} className="text-center"  >
            <Card  bordered={false} title="تعداد کل تهدیدها بر حسب زمان" className="card-progress box-shadow">
              <LineBizcharts data={this.state.data}/>
            </Card>
          </Col>
        </Row>
        <br />
        <Divider>
          <h4 className="no-margin">
            "فراهشدارها"
          </h4>
        </Divider>
        <br />
        <Row gutter={16} type="flex" justify="space-between" className="up-status">
          <Col span={20}  offset={2}>
            <Card title="تعداد کل فراهشدارها برحسب زمان"  className="card-progress box-shadow">
              <BarBizcharts data={this.state.data}/>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  )
  }
}

export default Dashboard;
