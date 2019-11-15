import React, { Component } from "react";
import _ from "lodash";
import Speedometer from "../components/chart/speedometer";
import GaugeBizcharts from "../components/chart/gaugeBizcharts";
import GaugeHighcharts from "../components/chart/gaugeHighcharts";
import PieBizcharts from "../components/chart/pieBizcharts";
import PieHighcharts from "../components/chart/pieHighcharts";
import RadarHighcharts from "../components/chart/radarHighcharts";
import LineHighcharts from "../components/chart/lineHighcharts";
import RadarBizcharts from "../components/chart/radarBizcharts";
import BarHighcharts from "../components/chart/barHighcharts";
import BarInteractiveHighcharts from "../components/chart/barInteractiveHighcharts";
import LineBizcharts from "../components/chart/lineBizcharts";
import BarBizcharts from "../components/chart/barBizcharts";
import TrafficLight from "../components/common/trafficLight";

import TLP from "../components/chart/tlp";

import "./dashboard.css";
import { Card, Col, Divider, Row } from "antd";
import { getThreats } from "../services/threatService";
import { Link } from "react-router-dom";
import TableAnt from "../components/table/tableAnt";
import { withTranslation } from "react-i18next";
import radarData from "../__mocks__/isacPestel";
import MapPestelFactor from "../__mocks__/customizeData/mapPestelFactor";
import ThreatTypePercent from "../__mocks__/threatTypePercent";
import pieData from "../__mocks__/customizeData/mapThreatTypePercent";
import barData from "../__mocks__/threatCount";
import mapThreatCount from "../__mocks__/customizeData/mapThreatCount"

class Dashboard2 extends Component {
    state = {
        data: [
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
        dataSource: [
            {
                key: "1",
                name: "Mike",
                age: 32,
                address: "10 Downing Street"
            },
            {
                key: "2",
                name: "John",
                age: 42,
                address: "10 Downing Street"
            }
        ],
        columns: [
            {
                title: "Name",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "Age",
                dataIndex: "age",
                key: "age"
            },
            {
                title: "Address",
                dataIndex: "address",
                key: "address"
            }
        ]
    };

    async componentDidMount() {
        const { data: threats } = await getThreats();
        this.setState({ threats });
    }
    // {t('dashboard.title')}

    render() {
        //this line is used for translation
        const { t } = this.props;
        return (
            <div className="content">
                <Row className="page-content">
                    <br />
                    <Row
                        gutter={16}
                        type="flex"
                        justify="space-between"
                        className="up-status"
                    >
                        <Col span={10}>
                            <Card bordered={false} className="cardStyle">
                                {/*title="تاثیر آگاهی وضعیتی بر پارامترهای PESTEL"*/}
                                <RadarBizcharts data={MapPestelFactor(radarData)} />
                            </Card>
                        </Col>
                        <Col span={10}>
                            <Card
                                bordered={false}
                                className="cardStyle"
                                // style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}
                                // headStyle={{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0 }}
                                // bodyStyle={{backgroundColor: '#212529', border: 0 }}
                                //    title="برآیند آگاهی وضعیتی قلمروها"
                            >
                                <GaugeBizcharts height={300} percent={97} />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card bordered={false} className="cardStyle">
                                <div className="tlpStyle">
                                    <TLP width="60" height="305" />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <br/>

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
                        <Card bordered={false} className="cardStyle">
                            <TableAnt />
                        </Card>
                    </Row>
                    <br/>
                    <Row
                        gutter={16}
                        type="flex"
                        justify="space-between"
                        className="up-status"
                    >
                        <Col span={8} className="text-center" style={{ marginBottom: 20 }}>
                            <Card bordered={false} className="cardStyle">
                                <PieHighcharts data= {pieData(ThreatTypePercent)}/>
                                {/*title="درصد رخداد انواع تهدید"*/}
                                {/*<PieBizcharts data={this.state.data} />*/}
                            </Card>
                        </Col>
                        <Col span={16} className="text-center">
                            <Card bordered={false} className="cardStyle">
                                {/*title="تعداد کل تهدیدها بر حسب زمان"*/}
                                {/*<LineBizcharts data={this.state.data}/>*/}
                                {/*<LineHighcharts />*/}
                                {/*<RadarHighcharts/>*/}
                                <BarInteractiveHighcharts  major={mapThreatCount(barData)[0]} minor={mapThreatCount(barData)[1]}/>

                            </Card>
                        </Col>
                    </Row>
                    {/*<Row*/}
                    {/*  gutter={16}*/}
                    {/*  type="flex"*/}
                    {/*  justify="space-between"*/}
                    {/*  className="up-status"*/}
                    {/*>*/}
                    {/*  <Col span={20} offset={2}>*/}
                    {/*    <Card bordered={false} className="cardStyle">*/}
                    {/*      /!*title="تعداد کل فراهشدارها برحسب زمان"*!/*/}
                    {/*      /!*<BarBizcharts data={this.state.data}/>*!/*/}
                    {/*      <BarInteractiveHighcharts  major={mapThreatCount(barData)[0]} minor={mapThreatCount(barData)[1]}/>*/}
                    {/*    </Card>*/}
                    {/*  </Col>*/}
                    {/*</Row>*/}
                </Row>
            </div>
        );
    }
}

export default withTranslation()(Dashboard2); //export default Dashboard;
