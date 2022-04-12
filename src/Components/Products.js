import react, { component } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { Component } from 'react';

class Products extends Component {
    
    constructor(props){
        super(props);
        this.state={
            productsinfo:[]
        }
    }
    componentDidMount(){
        axios.get("http://rupa.hyderabadtechies.info/api/values")
        .then(
            prod=>{
                console.log(prod.data);
                this.setState({
                    productsinfo: prod.data
                });
            }
        )
    }

    render() {
        return (
            <div>
                 <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead >
                        <TableRow> 
                            <TableCell align="left">Product Name</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">ImageURL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.productsinfo.map((row) => (
                        <TableRow
                        key={row.Title}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        <TableCell align="left">{row.Title}</TableCell>
                        <TableCell align="left">{row.Description}</TableCell>
                        <TableCell align="left">{row.Price}</TableCell>
                        <TableCell align="left">
                            <img src={row.ImageURL} width="96" height="65" />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        );
    }
}

export default Products;




