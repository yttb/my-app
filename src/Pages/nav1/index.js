import React from "react";
import { DatePicker, Form, Input, Row, Col, Button, Table } from 'antd'
import { useState } from "react/cjs/react.development";

const Index = (props) => {
  const { value } = props
  const { RangePicker } = DatePicker;
  const [data, setData] = useState(
    [{
      username: '艺术修养',
      date: '周3 16:00 - 17:30',
      date1: '2021-12-02 2021-12-31',
      pay: '100-400'
    }]);
  const columns = [
    {
      title: '课程名称',
      dataIndex: 'username'
    },
    {
      title: '课程时间',
      dataIndex: 'date'
    },
    {
      title: '报名时间',
      dataIndex: 'date1'
    },
    {
      title: '课程费用',
      dataIndex: 'pay'
    }
  ]
  const onFinish = (fieldsValue) => {
    console.log(fieldsValue.pay)
    const rangeTimeValue = fieldsValue['date1'];
    setData([...data, {
      username: fieldsValue.username,
      date: fieldsValue.date,
      date1: rangeTimeValue[0].format('YYYY-MM-DD') + ' ' + rangeTimeValue[1].format('YYYY-MM-DD'),
      pay: fieldsValue.pay
    }])
  }
  const onFinish1 = (fieldsValue) => {
    if (fieldsValue.date1.format('YYYY-MM-DD') > '2021-12-1' && fieldsValue.date1.format('YYYY-MM-DD') < '2021-12-31')
      alert(fieldsValue.date1.format('YYYY-MM-DD') + '报名费用为100')
    else
      alert(fieldsValue.date1.format('YYYY-MM-DD') + '报名费用为400')
  }
  return (
    value === '教师' ?
      <>
        <Form onFinish={onFinish}>
          <Row>
            <Col span={4}>
              <Form.Item label="课程名称" name="username">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={6} offset={1}>
              <Form.Item label="课程时间" name="date" >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6} offset={1}>
              <Form.Item label="报名时间" name="date1" >
                <RangePicker showTime format="YYYY-MM-DD" />
              </Form.Item>
            </Col>
            <Col span={4} style={{ marginLeft: '20px' }}>
              <Form.Item label="课程费用" name="pay">
                <Input />
              </Form.Item>
            </Col>
            <Col style={{ marginLeft: '20px' }}>
              <Button htmlType="submit">发布</Button>
            </Col>
          </Row>
        </Form>
        <Table columns={columns} dataSource={data} />
      </> :
      <>
        <Form onFinish={onFinish1}>
          <Row>
            <Col span={4}>
              <Form.Item label="课程名称" name="username">
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={8} offset={1}>
              <Form.Item label="课程时间" name="date" >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6} offset={1}>
              <Form.Item label="报名时间" name="date1" >
                <DatePicker showTime format="YYYY-MM-DD" />
              </Form.Item>
            </Col>
            <Col style={{ marginLeft: '20px' }}>
              <Button htmlType="submit">报名</Button>
            </Col>
          </Row>
        </Form>
        <Table columns={columns} dataSource={data} />
      </>
  )
}

export default React.memo(Index);