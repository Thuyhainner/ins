import React from "react";
import { Avatar, Typography, Row, Col, Divider, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const { Title, Text } = Typography;

export const UserDetail = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col span={8} style={{ textAlign: "center" }}>
          <Avatar size={120} icon={<UserOutlined />} />
          <Title level={4} style={{ marginTop: "10px" }}>
            John Doe
          </Title>
          <Row  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Col>
              <Title style={{margin: '0 10px'}} level={5}>Post: 1</Title>
            </Col>
            <Col>
            <Title style={{margin: '0 10px'}} level={5}>Follower: 1</Title>

            </Col>
            <Col>
            <Title style={{margin: '0 10px'}} level={5}>Following: 1</Title>

            </Col>
          </Row>  
        </Col>
        <Col span={16}>
          <Card>
            <Title level={5}>About Me</Title>
            <Divider />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis vel arcu eu facilisis. Integer et tortor eu orci
              fermentum finibus. Mauris a ex nec justo aliquam euismod a vel
              nibh. Curabitur nec enim sed justo fermentum lobortis non nec
              eros.
            </Text>
          </Card> 
          <Card>
            <ImageList sx={{ width: 700, height: 450 }} cols={5} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDetail;
