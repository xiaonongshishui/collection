import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var Result = React.createClass({
  render:function(){
    console.log("result");
    console.log(this.props.apiDataTable[0]);
    return (
       <Table showCheckboxes={false}>
         <TableBody showRowHover={true} displayRowCheckbox={false}> 
         {
          this.props.apiDataTable.map(function(ele,i){
            
            return (
              <TableRow key={i}>
              {
                ele.map(function(ele,i){
                    return <TableRowColumn key={i}>{ele}</TableRowColumn>
                  })
              }

              </TableRow>
              )
          })
         }
        
         </TableBody>
        </Table>
      );
  }
});
export default Result;