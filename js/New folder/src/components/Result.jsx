import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var Result = React.createClass({
  render:function(){
    return (
       <Table showCheckboxes={false}>
        <TableHeader showCheckboxes={false}>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>result</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>{this.props.apiActive.id}</TableRowColumn>
            <TableRowColumn>{this.props.apiActive.name}</TableRowColumn>
            <TableRowColumn>XXXX</TableRowColumn>
          </TableRow>
        </TableBody>
        </Table>
      );
  }
});
export default Result;