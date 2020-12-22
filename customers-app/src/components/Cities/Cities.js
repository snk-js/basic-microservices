
import { Card, Avatar } from 'antd';
import React, { useEffect, useState } from 'react'
import Cards from '../Card'
import styled from "styled-components"

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Spin } from 'antd'

const query = gql`
    {
        totalCustomersByCity {
            city
            customers_total
        }
    }
`


const Container = styled.div`
    
`


const CitiesComponent = () => {
    const { data, loading, refetch } = useQuery(query);
    const [cities, setCities] = useState([{
          "city": "Bannister Acres, NC",
          "customers_total": 20
        }])
        
    if(loading) return <Spin />

    return (
        <Container className="container">
            <Cards cities={data.totalCustomersByCity || cities}/>
        </Container>)
}
 
export default CitiesComponent;

  