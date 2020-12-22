import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CustomersTable from '../Table'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Spin } from 'antd'

const query = gql`
  query ListCustomers($city: String!, $page: Int!, $size: Int!) {
    customersByCity(city: $city, page: $page, size: $size) {
      id
      first_name
      last_name
      email
      gender
      company
      title
      lat
      long
    }
  }
`
const Customers = () => {
  let { search } = useLocation()

  const city = search.split('=').reverse()[0].split('%20').join(' ')
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(20)

  const model = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    company: '',
    title: '',
    lat: '',
    long: ''
  }

  const { data, loading } = useQuery(query, {
    variables: { city, page, size }
  })

  if (loading) return <Spin />

  return <CustomersTable data={data || [model]} />
}

export default Customers
