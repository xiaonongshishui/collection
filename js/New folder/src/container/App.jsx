import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Api from '../components/api.jsx';

var App = React.createClass({
	getInitialState:function(){
		return {
			api:[
			{
				id:1,
				name:"apiNo.1",
				parameter:["a1","b1","c1","d1"],
				table:{
					name:"",
					parameter:"",
					result:""
				}
			},
			{
				id:2,
				name:"apiNo.2",
				parameter:["a2","b2","c2","d2","e3"],
				table:{
					name:"",
					parameter:"",
					result:""
				}
			},
			{
				id:3,
				name:"apiNo.3",
				parameter:["e3","f3"],
				table:{
					name:"",
					parameter:"",
					result:""
				}
			},
			{
				id:4,
				name:"apiNo.4",
				parameter:["a4","b4","c4","d4"],
				table:{
					name:"",
					parameter:"",
					result:""
				}
			},
			{
				id:5,
				name:"apiNo.5",
				parameter:["a5","b5","c5"],
				table:{
					name:"",
					parameter:"",
					result:""
				}
			}
			]
		}
	},
	render:function(){
		console.log(this.state.api);
		return(
			<MuiThemeProvider>
				<Api api={this.state.api}/>
			</MuiThemeProvider>
			)
			
	}
});

export default App;