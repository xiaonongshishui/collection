import React from 'react';
import ReactDOM from 'react-dom';
import AddApi from './AddApi.jsx';
import Parameter from './Parameter.jsx';
import Result from './Result.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';


const apiStyle = {
  margin:10,
};
 const paperStyle={
    width: "100%",
    height:"auto",
    marginTop:"20px",
    marginBottom:"50px",
    padding:"20px",
    textAlign: 'left',
    display: 'inline-block'
 };

var Api = React.createClass({
  getInitialState:function(){
    return {
      id:1,
      apiActive:this.props.api[0],
    }
  },
  handleClick:function(ele,i){
    //拿到id
    console.log(i);
    var id = i;
    var apiActive = this.props.api[i];
    var _this = this;
    $.get(apiActive.source,function(result){
        _this.setState()
    })
    this.setState(function(state){
      return {
        id:id,
        apiActive:apiActive,
      }
    });
  },
  render:function(){
    console.log("api-----");
    console.log(this.state);
    
    return (
        <div>
        <section>
          {this.props.api.map(function(ele,i){
            return (
                
                <RaisedButton key={i+1} label={ele.name} primary={true} style={apiStyle} onClick={this.handleClick.bind(this,ele,i)} />
              
              )
          },this)}

          <AddApi />
        </section>
        <section>
            <Paper style={paperStyle} children={<Parameter apiActive={this.state.apiActive}/>}/>
            
        </section>
        <section>
          <Result  apiActive={this.state.apiActive} apiDataTable={this.props.apiDataTable}/>
        </section>
        </div>
     
      );
    }
});
 



export default Api;
