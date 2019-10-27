import React, {Component} from "react";
import {getThreats} from "../services/threatService";
import {Card, Col, Divider, Row} from "antd";
import RadarBizcharts from "../components/chart/radarBizcharts";
import Speedometer from "../components/chart/speedometer";
import PieBizcharts from "../components/chart/pieBizcharts";

class SAPage extends Component {
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
                            <Col span={8} className="text-center"  >
                                <Card  bordered={false} title="آگاهی وضعیتی قلمرو اول" className="card-progress box-shadow">
                                    <PieBizcharts data={this.state.data}/>
                                </Card>
                            </Col>
                            <Col span={8} className="text-center" style={{ marginBottom: 20 }}>
                                <Card  bordered={false} title="تاثیر آگاهی وضعیتی قلمرو اول بر پارامترهای PESTEL" className="card-progress box-shadow" >
                                    <RadarBizcharts data={this.state.data} />
                                </Card>
                            </Col>
                            <Col span={8} className="text-center" style={{ marginBottom: 20 }}>
                                <Card  bordered={false} title="تاثیر آگاهی وضعیتی قلمرو اول بر دفاع، امنیت و تاب آوری" className="card-progress box-shadow"
                                    // style={{backgroundColor: 'rgba(255, 255, 255, 0.0)', border: 0 }}
                                    // headStyle={{backgroundColor: 'rgba(255, 255, 255, 0.4)', border: 0 }}
                                    // bodyStyle={{backgroundColor: '#212529', border: 0 }}
                                >
                                    <Speedometer/>
                                </Card>
                            </Col>

                        </Row>
                    </Row>
                </div>
            )
        }
    }

export default SAPage;
