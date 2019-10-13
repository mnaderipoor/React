import React, { Component } from "react";
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

class ThreatsPage extends Component {
   state = {
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
render() {
    return(

    <div id="threats">
        <PageHeader
          onBack={() => this.history.push("/")}
          title="threats"
        />
        <Row className="page-content">
            <Divider>
                <h2>"لیست تهدیدها"</h2>
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
              <Divider/>
               <br />
               <Row gutter={16} type="flex" justify="space-between" className="up-status">
                    <Col span={18}  offset={3}>
                   "hhhhhhhh"
                    </Col>
               </Row>

            </Row>
        </Row>
    </div>
    );
    }
}
export default ThreatsPage;