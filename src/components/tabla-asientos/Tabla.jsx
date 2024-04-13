/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid  from '@material-ui/core/Grid';
import CheckBox  from '@material-ui/core/Checkbox';
import TablePagination  from '@material-ui/core/TablePagination';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const style = {
    header: {
        color: '#334054',
        fontSize: '14px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
        height: '62px',
        minWidth: 200
    },
    row: {
        color: '#334054',
        fontSize: '14px',
        fontFamily: 'Roboto, sans-serif',
        height: '62px',
        minWidth: 200
    },
    nroDocumento: {
        color: '#334054',
        fontSize: '14px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
        height: '62px',
        minWidth: 200
    },
    buttonFooterLabel: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#334054',
        backgroundColor: '#f7f7f7',
        borderRadius: '4px',
        marginRight: '10px',
        height: '37px'
    },
    buttonFooterIcon: {
        color: '#f7f7f7'
    },
    icons: {
        fontSize: '24px'
    },
    table: {
        boxShadow: 'none'
    },
    smallIcon: {
        width: 24,
        height: 24
    },
    small: {
        padding: 0,
        with: 30
    }

};

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: 'fff'
    },
    clicked: {
        color: '#007cc3'
    },
    notClicked: {
        color: 'rgb(81, 107, 145)'
    },
    container: {
        padding: theme.spacing(2)
    },
    grid: {
        alignSelf: 'flex-end'
    },
    table: {
        '&::-webkit-scrollbar': {
            backgroundColor: '#fff',
            whidth: '16px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#fff'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#007cc3',
            borderRadius: '16px',
            border: '5px solid #fff'
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#007cc3',
            border: '4px solid #fff'
        },  
    },
    tableRow: {
        '&:hover': {
            backgroundColor: 'lightgrey'
        }
    },
    checkbox: {
        '&$checked': {
            color: 'blue',
        },
    },
    checked: {},
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    
];

const Tabla = props =>  {
    const { onSelectAllClick, numSelected, rowCount } = props;
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowPerPage] = useState(5);
    const [checked, setChecked] = useState(false);

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // manejo de checkbox
    const handleChecked = (event) => {
        setChecked(event.target.value);
    };
    


    return (
        <Grid container style={{ width: '100%'}}>
            <TableContainer component={Paper} style={style.table} className={classes.table}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ minWidth: '24px' }} align="center">
                                <CheckBox 
                                    checked={rowCount > 0 && numSelected === rowCount}
                                    onChange={onSelectAllClick}
                                    inputprops={{ 'aria-label': 'primary checked' }}
                                />
                            </TableCell>
                            
                            <TableCell align="center">Acciones</TableCell>
                            <TableCell align="center">Calories</TableCell>
                            <TableCell align="center">Fat&nbsp;(g)</TableCell>
                            <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="center">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} className={classes.tableRow}>
                                <TableCell align='center'>
                                    <CheckBox 
                                        checked={checked}
                                        onChange={handleChecked}
                                        className={classes.tableRow}
                                    />
                                </TableCell>
                                <TableCell align='center' >
                                    <VisibilityIcon fontSize='small' color='action'/>
                                    <MoreVertIcon fontSize='small' color='action'/>
                                </TableCell>

                                <TableCell align='center'>{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="center">{row.carbs}</TableCell>
                                <TableCell align="center">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container justify="flex-end" className={classes.paginationContainer}>
                <TablePagination 
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}  
                />
            </Grid>
        </Grid>
        
    );
};

export default Tabla;