import React, { Component } from 'react';
import OneItem from './OneItem'
import data from './datbase'
import Display from './Display'
import axios from '../node_modules/axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data : [...data] ,
      
    }
  }

//修改state里面的data中的某个对象的count
  getChildInformation(count,index){ 
    let new_data = this.state.data;
    new_data[index].count = count;
    this.setState({
      data:new_data
    })
}

  //通过该方法查看购物车，生成textarea内容
  getTextContain(){
  let result = ``;//name * count
  let result2 = ``; // barcode * count
  for(let a of this.state.data)
  {
    if(a.count > 0)
    {result += a.name + ` * ` + a.count + `
`;
    result2 += a.barcode + `*` + a.count+ `  ` ;}
  }
  this.setState({
    text:result,
    list:result2
  })
  
}
  //发送数据
  postData(){
    let list = {list : this.state.list} ;
    axios.post('http://localhost:3001/data',list)
      .then(function(res){
        if(res.data){alert("添加成功");}
      })
      .catch(function(err){console.log(err)})
  }

  render() {
    return (
      <div>
        
          {this.state.data.map((item,index)=>
          {
            return (
              <div key = {index}>
                <Display item = {item} index= {index}/>
                <OneItem communicate = {this.getChildInformation.bind(this)} index = {index}  />
                <br/> <br/>
              </div>
            )
          }
          )}
          <textarea rows="10" cols="50" value = {this.state.text}></textarea>
          <button onClick = {this.getTextContain.bind(this)} >查看购物车</button>
          <button onClick={this.postData.bind(this)}>确认并提交</button>
        
      </div>
    );
  }
}

export default App;
