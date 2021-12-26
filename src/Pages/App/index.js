import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Row, Col, Input, Space, Button, Dropdown, Radio } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons/lib/icons';
import Nav1 from '../nav1'
import Nav2 from '../nav2'
import User from '../User'
const { Header, Content, Footer } = Layout;

function App() {
  const [menu, setMenu] = useState("Nav1")
  const [value, setValue] = useState("教师")
  const [user, setUser] = useState({
    username: null,
    passwd: null
  })
  const [flag, setFlag] = useState(0)
  const login = () => {
    if (user.username === 'wang' && user.passwd === '123') {
      setFlag(1)
    }
  }
  const menu1 = (
    <Menu>
      <Menu.Item onClick={() => { setFlag(0) }}>
        退出
      </Menu.Item>
    </Menu>
  )
  return (
    flag === 1 && user.username === 'wang' && user.passwd === '123' ?
      <Layout className="layout">
        <Header>
          <Row>
            <Col span={20}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {new Array(2).fill(null).map((_, index) => {
                  const key = index + 1;
                  return <Menu.Item style={{ margin: '0 20px' }} key={`nav ${key}`} onClick={() => setMenu(`Nav${key}`)}>{`nav ${key}`}</Menu.Item>;
                })}
              </Menu>
            </Col>
            <Col span={4}>
              <Dropdown overlay={menu1}>
                <span style={{ color: 'white' }} ><UserOutlined style={{ marginRight: '20px' }} />{value}</span>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px', height: '600px', background: '#fff' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{menu}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            {(
              () => {
                switch (menu) {
                  case "Nav1":
                    return <Nav1 value={value} />
                  case "Nav2":
                    return <Nav2 value={value} />
                  default:
                    return <User user={user} />
                }
              }
            )()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by wanglong</Footer>
      </Layout> :
      <>
        <Row span={24}>
          <Col span={4} justify='center' offset={10} style={{ marginTop: '200px' }} >
            <Space direction="vertical">
              <Input placeholder="input username" prefix={<UserOutlined />} onChange={(e) => {
                setUser({
                  ...user, username: e.target.value,
                })
              }} />
              <Input.Password
                placeholder="input password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(e) => {
                  setUser({
                    ...user, passwd: e.target.value,
                  })
                }}
              />
              <Radio.Group onChange={(e) => { setValue(e.target.value) }} value={value}>
                <Radio value={"教师"}>教师</Radio>
                <Radio value={"学生"}>学生</Radio>
              </Radio.Group>
              <Button onClick={login}>登录</Button>
            </Space>
          </Col>
        </Row>
      </>
  )

}
export default App;
