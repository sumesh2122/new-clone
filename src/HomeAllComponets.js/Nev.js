import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap';
import './nav.css';
import { Breadcrumb } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';


const { Search } = Input;



function Nev({ locationFromHome }) {
    const [locationObjectWithValues, setLocationObjectWithValues] = useState({});
    useEffect(() => {

        setLocationObjectWithValues(locationFromHome);

    }, [locationFromHome])
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }



    const menu = (
        <Menu onClick={handleMenuClick}>
            {Object.keys(locationObjectWithValues).length ?
            (locationObjectWithValues.results.map((e, index) => (
                <Menu.Item key={index} icon={<UserOutlined />}>
                    {e.formatted_address}
                </Menu.Item>

            )))
            :(<div></div>)
            }        
        </Menu>
    );








    return (
        <div >
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col>
                </Col>
                <Col lg={6} style={{ color: "white" }}>

                    <Row>
                        <Col>Blog</Col>
                        <Col className="paraUnder">Register As Professional</Col>
                        <Col>Login/Signup</Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{ marginTop: "11rem" }}>
                <Col>
                    <Breadcrumb style={{ color: "white" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item style={{ color: "white" }} >Chennai</Breadcrumb.Item>
                    </Breadcrumb></Col>
            </Row>
            <Row>

                <Col>
                    <h1 style={{ color: "white", fontSize: "3.4rem", fontWeight: "bold" }}>Search For All Your Need...!</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={4} style={{ display: "flex", justifyContent: "end" }}>  <Dropdown overlay={menu}>
                    <Button style={{ display: "flex", justifyContent: "center" }}>
                        <EnvironmentOutlined />  Button <DownOutlined />
                    </Button>
                </Dropdown></Col>
                <Col lg={5}> <Search placeholder="input search text" enterButton /></Col>
            </Row>
            <Row>
                <Col style={{ display: "flex", justifyContent: 'center', color: "white", fontSize: "1rem" }}><p><u>Massage For Men,Home Painting,Electricions</u> etc </p>
                </Col>
            </Row>
        </div>
    );
}

export default Nev;
