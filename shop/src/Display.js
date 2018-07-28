import React, { Component } from 'react';
import data from './datbase'


class Display extends Component{
    render(){
        return (
            <div>
                <img  width = "150px" height = "150px"  src = {data[this.props.index].post} alt = {data[this.props.index].name}/>
                <p>名称:{data[this.props.index].name}</p>
                <p>单位:{data[this.props.index].unit}</p>
                <p>价格:{data[this.props.index].price}</p>
                <p>优惠:{data[this.props.index].discount}</p>
            </div>
        )
    }


    
}



export default Display;