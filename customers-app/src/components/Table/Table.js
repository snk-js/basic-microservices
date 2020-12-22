import { Table, Tag, Space } from 'antd'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: text => <a href="/">{text}</a>
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender'
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company'
  },
  {
    title: 'title',
    key: 'title',
    dataIndex: 'title',
    render: tag => {
      let color = tag.length > 10 ? 'geekblue' : 'green'
      if (tag.length > 20) color = 'volcano'

      return (
        <>
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        </>
      )
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link
          to={{
            pathname: '/customer',
            search: `?lat=${record.lat}&long=${record.long}`
          }}
        >
          <a href="/">View {record.name} Location</a>
        </Link>
      </Space>
    )
  }
]

const CustomersTable = ({ data: { customersByCity } }) => {
  if(!customersByCity) return <div>Database must be filled!</div>

  return <Table columns={columns} dataSource={customersByCity } />
}

export default CustomersTable
