import React, {Component} from "react";
import {Table, Popconfirm, Button, Row, Divider, Col, Card} from "antd";
import "./risksPage.css";
import TableAnt from "../components/table/tableAnt";
import { withTranslation } from "react-i18next";
import BarBizcharts from "../components/chart/barBizcharts";
class RisksPage extends Component {
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
        const { t } = this.props;
        return(
            <div className="page-content">
                <Row >
                        <Card title={t('dashboard.threatTableTitle')} bordered={false} className="cardStyle">
                            <TableAnt data={this.state.threatsdata} />
                        </Card>
                </Row>
                <Row>
                    <Card title="تعداد کل فراهشدارها برحسب زمان"  className="card-progress box-shadow">
                        <BarBizcharts data={this.state.data}/>
                    </Card>
                </Row>
            </div>
        );
    }
}

export default withTranslation()(RisksPage);
