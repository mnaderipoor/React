import React, { Component } from "react";
import BarBizcharts from "../components/chart/barBizcharts"
import TableAnt from "../components/table/tableAnt";
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

class ThreatPage extends Component {
    state = {
        threats: [],
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
    render() {
        return(

            <div id="threats">
                {/*         <PageHeader */}
                {/*           onBack={() => this.history.push("/")} */}
                {/*           title="threats" */}
                {/*         /> */}
                <Row className="page-content">
                    <Divider>
                        <h4>"لیست تهدیدها"</h4>
                    </Divider>
                    <br />
                    <Row className="threat-list padding-side-20 component-background box-shadow">
                        <Col span={22}  offset={1}>
                            <TableAnt />
                        </Col>

                    </Row>
                    <br />
                    <Divider/>
                    <br />
                    <Row gutter={16} type="flex" justify="space-between" className="up-status">
                        <Col span={22}  offset={1}>
                            <Card title="تعداد کل تهدیدها برحسب زمان"  className="card-progress box-shadow">
                                <BarBizcharts data={this.state.data}/>
                            </Card>
                        </Col>
                    </Row>

                </Row>
            </div>
        );
    }
}
export default ThreatPage;