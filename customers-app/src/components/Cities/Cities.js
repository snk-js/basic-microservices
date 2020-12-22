import React, { useState } from 'react'
import Cards from '../Card'
import styled from 'styled-components'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Spin } from 'antd'

const LIST_CITIES = gql`
  {
    totalCustomersByCity {
      city
      customers_total
    }
  }
`

const Container = styled.div``

const CitiesComponent = () => {
  const { data, loading } = useQuery(LIST_CITIES)
  const [cities] = useState([
    {
      city: 'Bannister Acres, NC',
      customers_total: 20
    }
  ])

  if (loading) return <Spin />

  if(!data && !data?.totalCustomersByCity) return <div> Databse must be filled!</div>

  return (
    <Container className="container">
      <Cards cities={data.totalCustomersByCity || cities} />
    </Container>
  )
}

export default CitiesComponent
