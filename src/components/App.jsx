import React from 'react';
import {Col, Row, Input, Button, Icon} from 'react-materialize'

export default class App extends React.Component {
  render() {
    return (
        <div className="container">
            <Row className=""> 
                <Col s={6} className="login-container offset-s3 z-depth-1">
                    <Row>
                        <Input type="email" placeholder="emailid" m={12} l={12} s={12} label="Email Id" />
                    </Row>
                    <Row>
                        <Input type="password" placeholder="password" m={12} l={12} s={12} label="Password" />                                        
                    </Row>
                    <Row>
                        <Col className="right">
                            <Button node="div" m={12} l={12} s={12} className="white blue-text" waves='red'>Login</Button>
                        </Col>
                    </Row> 
                </Col>
            </Row>
        </div>
    );
  }
}