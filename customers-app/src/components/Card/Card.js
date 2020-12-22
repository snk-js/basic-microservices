
import { Card, Avatar } from 'antd';
import React, { useEffect, useState } from 'react'
import {  EllipsisOutlined } from '@ant-design/icons';
import { Spin } from 'antd'
import styled from "styled-components"

const { Meta } = Card;

const Container = styled.div`
    max-width: 100%;
    flex-wrap: wrap;
    display: flex;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    
`

const CardComponent = (props) => {


    return (
        <Container>
            {props.cities.map((city, ind) => {
                const name = city.city
                const population = city.customers_total

                return  (<Card
                className="card"
                style={{ width: 300, margin: '20px' }}
                cover={
                <img
                    alt="example"
                    src={`https://picsum.photos/id/${ind+10}/200/100`}
                />
                }
                actions={[
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={`https://picsum.photos/id/${ind+50}/32/32`} />}
                    title={name}
                    description={`this city has ${population} customers`}
                />
            </Card>)
            })}
        </Container>
          
        )
}
 
export default CardComponent;

  