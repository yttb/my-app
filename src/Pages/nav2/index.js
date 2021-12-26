import React from "react"
import { Table } from 'antd'
import { Column } from '@ant-design/charts'
const Index = (props) => {
  const { value } = props
  const columns = [
    {
      title: '报名人员',
      dataIndex: 'username'
    },
    {
      title: '报名时间',
      dataIndex: 'date'
    },
    {
      title: '报名费用',
      dataIndex: 'pay'
    }
  ]
  const columns1 = [
    {
      title: '报名人员',
      dataIndex: 'username'
    },
    {
      title: '学习时间',
      dataIndex: 'learntime'
    },
    {
      title: '花费费用',
      dataIndex: 'consume'
    },
  ]
  const data = [
    {
      username: 'zhangsan',
      date: '2021-12-10',
      pay: '100'
    },
    {
      username: 'lisi',
      date: '2021-12-10',
      pay: '100'
    },
    {
      username: 'wangwu',
      date: '2021-12-10',
      pay: '100'
    },
    {
      username: 'wangl',
      date: '2022-1-1',
      pay: '400'
    },
  ]
  const data1 = [
    {
      type: '1月',
      values: 400,
    },
    {
      type: '2月',
      values: 0,
    },
    {
      type: '3月',
      values: 0,
    },
    {
      type: '4月',
      values: 0,
    },
    {
      type: '5月',
      values: 0,
    },
    {
      type: '6月',
      values: 0,
    },
    {
      type: '7月',
      values: 0,
    },
    {
      type: '8月',
      values: 0,
    },
    {
      type: '9月',
      values: 0,
    },
    {
      type: '10月',
      values: 0,
    },
    {
      type: '11月',
      values: 0,
    },
    {
      type: '12月',
      values: 300,
    }
  ]
  const data2 = [
    {
      username: 'wang',
      learntime: '2021-12-1',
      consume: '100'
    },
    {
      username: 'wang',
      learntime: '2021-12-2',
      consume: '100'
    },
    {
      username: 'wang',
      learntime: '2021-12-2',
      consume: '100'
    },
    {
      username: 'wang',
      learntime: '2022-1-1',
      consume: '400'
    }
  ]
  const config = {
    data: data1,
    xField: 'type',
    yField: 'values',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '月份',
      },
      values: {
        alias: '收入',
      },
    },
  };
  return (
    value === '教师' ?
      <>
        <Table columns={columns} dataSource={data}></Table>
        <Column {...config} height={200} />
      </>
      :
      <>
        <Table columns={columns1} dataSource={data2} />
      </>
  )
}

export default React.memo(Index);