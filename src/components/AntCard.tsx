import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

type CardType = {
    description: string
    brand: string
    price: number
    stock: number
}

const AntCard:React.FC<CardType> = ({description,brand, price, stock}:CardType) => (
    <Card
        style={{ width: 200 }}
        cover={
            <img
                alt="example"
                src="https://a0.muscache.com/4ea/air/v2/pictures/7ea52b34-8177-45ab-b5ad-d1cb83b6f006.jpg?t=r:w1200-h720-sfit,e:fjpg-c90"
            />
        }
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            title={description}
            description={price}
        />
    </Card>
);

export default AntCard;
