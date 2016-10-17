import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

var AddApi = React.createClass({
  render:function(){
    return (
        <FloatingActionButton mini={true} style={{verticalAlign:"middle",marginLeft:"10px",marginTop:"-3px"}}>
          <ContentAdd />
        </FloatingActionButton>
      );
  }
});
export default AddApi;