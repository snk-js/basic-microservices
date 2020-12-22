import React from 'react'
import styled from "styled-components"
import {Auth0Provider } from "@auth0/auth0-react";
import 'antd/dist/antd.css'; 
import Home from '../Home'

const Container = styled.div`
    display:flex;
    flex-flow: row nowrap;
    margin: 0 auto;
`

const Content = styled.div`
    flex: 1;
`

const Wrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
` 


const Root = () => {
    return (
        <Wrapper>
            <Container>
                <Content>
                <Auth0Provider
                    domain="dev-d1rwjit4.us.auth0.com"
                    clientId="hoLK3QR7CxbxxTNY2vRRDF5zE1f5DQhH"
                    redirectUri={window.location.origin}
                >
                    <Home />
                </Auth0Provider>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default Root