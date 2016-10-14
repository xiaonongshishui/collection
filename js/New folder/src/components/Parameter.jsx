import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


var Parameter = React.createClass({
	render:function(){
		console.log(this.props.apiActive.parameter);
		return (
		<div>
		<h3 style={{marginBottom:"0"}}>填写参数</h3>
		{this.props.apiActive.parameter.map(function(ele,i){
			return (
				<TextField key={i} hintText="Hint Text" floatingLabelText={ele} style={{margin:"10px",marginTop:"0px"}}/>
				)
		})}
		<div>
		<RaisedButton label="submit" primary={true} />
		</div>
		</div>
			
			)
	}
});
export default Parameter;











