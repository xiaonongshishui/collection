import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Api from '../components/api.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

var App = React.createClass({
	getInitialState:function(){
		return {
			api:[
			{
				id:1,
				name:"firstApi",
				parameter:["a1","b1","c1","d1"],
				source:"http://172.22.136.192/api/ASHARES/CompanyDesc",
				data:[[]]
			},
			{
				id:2,
				name:"secondApi",
				parameter:["a2","b2","c2","d2"],
				source:"http://172.22.136.192/api/ASHARES/CompanyDesc",
				data:[[]]
			}
			]
		}
	},
	componentDidMount:function(){
		var _this = this;
		$.get(_this.props.source,function(result){
			console.log(result);
			_this.setState({
				api:_this.state.api,
				result.datatable
			});
		})
	},
	render:function(){
		console.log("app--------");
		console.log(this.state);
		return(
			<MuiThemeProvider>
				<Api api={this.state.api} apiDataTable={this.state.apiDataTable}/>
			</MuiThemeProvider>
			)
	}
});

export default App;