import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { useAuth0 } from '@auth0/auth0-react'
import './styles.css'
import { Button, Space, message } from 'antd'
import { useLocation } from 'react-router-dom'
const { Header, Content, Footer } = Layout

const LayoutComponent = ({ children }) => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0()

  const success = () => {
    message.success('database filled with success!')
  }

  const error = () => {
    message.error('something goes wrong :(')
  }

  const { pathname } = useLocation()
  const [breadcumbState, setBreadcumbState] = useState(1)

  useEffect(() => {
    if (pathname === '/') setBreadcumbState(1)
    if (pathname === '/customers') setBreadcumbState(2)
    if (pathname === '/customer') setBreadcumbState(3)
  }, [pathname])

  const handleLogin = () => {
    loginWithRedirect()
  }

  const refreshPage = () => {
    window.location.reload()
  }

  const handleMockDB = () => {
    const mock = async () => {
      try {
        await fetch('http://localhost:7100/mock')
        success()
        setTimeout(refreshPage, 300)
      } catch (err) {
        error()
        setTimeout(refreshPage, 300)
      }
    }
    mock()
  }

  const handleClearDatabase = () => {
    const clear = async () => {
      try {
        await fetch('http://localhost:7100/clear-database')
        success()
        setTimeout(refreshPage, 300)
      } catch (err) {
        error()
        setTimeout(refreshPage, 300)
      }
    }

    clear()
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <Layout className="layout">
      <Header>
        <Menu
          theme="dark"
          style={{ display: 'flex', justifyContent: 'space-between' }}
          inlineCollapsed={false}
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item className="menuitem" key="1">
            Customers
          </Menu.Item>
          <Menu.Item className="menuitem" selectable={false} key="2" style={{ width: '100%' }}>
            <Space style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {isAuthenticated ? (
                <Space>
                  <span>{user.name}</span>
                  <Button onClick={handleLogout} type="primary">
                    Logout
                  </Button>
                </Space>
              ) : (
                <Space>
                  <Button onClick={handleLogin} type="primary">
                    Login
                  </Button>
                </Space>
              )}
            </Space>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>List cities</Breadcrumb.Item>
          {breadcumbState > 1 ? <Breadcrumb.Item>List Customers by city</Breadcrumb.Item> : null}
          {breadcumbState > 2 ? <Breadcrumb.Item>List Customers by city</Breadcrumb.Item> : null}
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Created in (JS) "Juliano Silva"
        <Button style={{ marginLeft: '30px' }} onClick={handleMockDB} type="primary">
          Mock database with 1000 entries
        </Button>
        <Button style={{ marginLeft: '30px' }} onClick={handleClearDatabase} type="primary">
          clear database
        </Button>
      </Footer>
    </Layout>
  )
}

export default LayoutComponent
