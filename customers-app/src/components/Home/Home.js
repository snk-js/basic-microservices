import { Spin, Card, Button } from 'antd'
import { useAuth0 } from '@auth0/auth0-react'
import Layout from '../Layout'
import styled from 'styled-components'
import CitiesComponent from '../Cities'
import CustomersComponent from '../Customers'
import CustomerComponent from '../Customer'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: pink;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
  }

  return (
    <div>
      {!isAuthenticated ? (
        <CardContainer>
          <Card size="large" title="Olá, visitante 😊" extra={<Spin />} style={{ width: 300 }}>
            <Button onClick={handleLogin}>Login</Button>
          </Card>
        </CardContainer>
      ) : (
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <CitiesComponent />
              </Route>
              <Route path="/customers">
                <CustomersComponent />
              </Route>
              <Route path="/customer">
                <CustomerComponent />
              </Route>
            </Switch>
          </Layout>
        </Router>
      )}
    </div>
  )
}

export default Home
