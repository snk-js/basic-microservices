import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { useAuth0 } from "@auth0/auth0-react";
import './styles.css'
import { Button, Space } from 'antd'
import Card from '../Card'

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    const [breadcumbState, setBreadcumbState] = useState(1)

    const handleLogin = () => {
      loginWithRedirect()
    }

    const handleLogout = () => {
      logout()
    }

    return (<Layout className="layout">
    <Header>
      <Menu theme="dark" style={{display: 'flex', justifyContent:"space-between"}} inlineCollapsed={false}  mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item className='menuitem' key="1" >Customers</Menu.Item>
          <Menu.Item className='menuitem' selectable={false} key="2"style={{width: '100%'}}>
            <Space style={{display:'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                { isAuthenticated ? 
                  <Space>
                    <span>{user.name}</span>
                    <Button onClick={handleLogout}  type="primary">
                      Logout
                    </Button>
                  </Space> : 
                  <Space>
                    <Button onClick={handleLogin} type="primary">
                      Login
                    </Button>
                  </Space>
                }
            </Space>
          </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>List cities</Breadcrumb.Item>
        { breadcumbState > 1 ? <Breadcrumb.Item>List Customers by city</Breadcrumb.Item> :null  }
        { breadcumbState > 2 ? <Breadcrumb.Item>List Customers by city</Breadcrumb.Item> :null  }
      </Breadcrumb>
      <div className="site-layout-content">
        <Card/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Created in (JS) "Juliano Silva"</Footer>
  </Layout>);
}
 
export default LayoutComponent;