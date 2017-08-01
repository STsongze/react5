import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { Nav,NavItem } from 'react-bootstrap';




class Product extends Component {
    render() {
        let {url} = this.props.match;
        return (
            <div>
                 <Nav bsStyle="pills" stacked activeKey={1} >
                    <NavItem eventKey={1} href="/"><Link to={`${url}/1`}>冰箱</Link></NavItem>
                    <NavItem eventKey={2} title="Item"><Link to={`${url}/2`}>电视机</Link></NavItem>
                    <NavItem eventKey={3} href="/"><Link to={`${url}/3`}>空调</Link></NavItem>
                    <NavItem eventKey={4} href="/"><Link to={`${url}/4`}>机器人</Link></NavItem>
                    <NavItem eventKey={5} href="/"><Link to={`${url}/5`}>洗衣机</Link></NavItem>
                </Nav>
                    
           
                <Route path={`${url}/:id`} component={ProductDetail}/>
            </div>
        );
    }
}

export default Product;