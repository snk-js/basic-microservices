
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styled from "styled-components"

const { Meta } = Card;

const Container = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 300px;
    transform-style: preserve-3d;
    border-radius: 30px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`


const CardComponent = () => {


    return (
        <Container className="container">
            <Card
                className="card"
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://picsum.photos/200/100.jpg"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
        </Container>)
}
 
export default CardComponent;

  