import axios from 'axios';
import React from 'react'
import { useTable } from 'react-table'
import { useState, useEffect } from 'react';
 
 function Employee() {
    const employees = require('./employees.json')
    console.log(employees);
   const data = React.useMemo(
     () => employees,
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'Employee',
         accessor: 'name', // accessor is the "key" in the data
       },
       {
         Header: 'Location',
         accessor: 'loc',
       },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
       <div className=''>
           <h1>Employee Details</h1>
           <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
       </div>
     
   )
return (<></>)
 }
 export default Employee;