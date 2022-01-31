import { Col } from 'antd';
import React from 'react';
import{Row,col} from 'reactstrap'

import VerticalTabs from './Tab';
function Details(props) {
    return (
    <Row>
        <Col >
        <Row>
            <VerticalTabs/>
             
        </Row>
        </Col>

       
    </Row>
    );
}

export default Details;