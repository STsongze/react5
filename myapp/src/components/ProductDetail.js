import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {

        let products={
            "1":[
                {name:"海尔冰箱"},
                {name:"北京冰箱"}
            ],
            "2":[
                {name:"电视机1"},
                {name:"电视机2"}
            ],
            "3":[
                {name:"空调1"},
                {name:"空调2"}
            ],
            "4":[
                {name:"机器人1"},
                {name:"机器人2"}
            ],
            "5":[
                {name:"洗衣机1"},
                {name:"洗衣机2"}
            ]
        }
        let arr = products[this.props.match.params.id];
        let divs = arr.map((item,i)=>{
            return <div key={i}>{item.name}</div>
        });
        return (
            <div>
                {divs}
            </div>
        );
    }
}

export default ProductDetail;