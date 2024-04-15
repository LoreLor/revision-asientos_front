// eslint-disable-next-line no-unused-vars
import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Roboto, sans-serif',
        margin: '9px 24px 24px',
        padding: '25px 31px 36px 27px',
        backgroundColor: '#fff',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    textField: {
        width: '253px',
        height: '52px',
        margin: '24px 0 0.5px',
        padding: '16px 17px 15px 15px',
        bordeRadius: '6px',
    },
    input: {
        background: '#f7f7f7',
        fontSize: '16px',
        color:'#334054',
        padding: '16px 8px 12px 15px'
    },
    formControl: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    label: {
        width: '253px',
        height: '24px',
        margin: '0 0 0 15px',
        fontFamily: 'Roboto',
        fontSize: '14px',
        textAlign: 'left',
        color: '#707070' 
    },
    formControlSmall:{
        width: '253px',
        flexDirection:'row',
        marginBottom: theme.spacing(2),
    },
    inputSmall: {
        textAlign:'center',
        paddingLeft: '5px',
        paddingRight: '8px',
        color:'#334054',
        background: '#f7f7f7',
    },
    helperText: {
        marginLeft:0,
        fontSize: '11px',
        color: '#334054'
    },
    calendar: {
        width: '24px',
        height: '24px',
        margin: '50px 3px 0 0.5px',
        padding: '2px 3px',
        color: '#516b91'
    },
    slider: {
        width: '241px',
        height: '2px',
        margin: '50px 0 0 ',
        marginRight:'15px',
        marginTop: '30px',
        marginLeft:'-20px',
        color: '#3b86ff',
    },
    
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    mark: {
        marginTop:'-26px',
        
    },
    switch: {
        marginTop: '-90px',
        marginLeft:'180px',
        '& .Mui-checked':{
            color: '#3b86ff',
        }, 
    },
    select: {
        width: '253px',
        background: '#f7f7f7',
        marginTop:'25px'
    },
    labelSelect: {
        marginLeft: '-10px',
        marginTop: '-10px',
        fontSize: '14px',
        color: '#707070',
        shrink: 'none'
    }

}));

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 5,
        label: '+1 millon',
    },
];

export const Filtros = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            {/* Número de Documento */}
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>N°Documento</InputLabel>
                <TextField
                    id="numDocumento"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Algo"
                    margin="dense"
                    variant="filled" 
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }} 
                    inputProps={{className:classes.input}}
                />  
            </FormControl>

            {/* Tipo de Documento */}
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>N°Documento</InputLabel>
                <TextField                        
                    id="filled-margin-dense"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Algo"
                    margin="dense"
                    variant="filled"
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                    inputProps={{className:classes.input}}
                />
                                      
            </FormControl>

            {/* N° Orden de Compra */}
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>N°Documento</InputLabel>
                <TextField
                    id="filled-margin-dense"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText='Algo'
                    margin="dense"
                    variant="filled"
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                    inputProps={{className:classes.input}}
                />
                {/* <FormHelperText style={{paddingLeft:0}}>Algo</FormHelperText>                       */}
            </FormControl>

            {/* N° Subledger*/}
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>N°Documento</InputLabel>
                <TextField
                    id="filled-margin-dense"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText='Algo'
                    margin="dense"
                    variant="filled"
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                    inputProps={{className:classes.input}}
                />
            </FormControl>

            {/* Centro de Costos */}
            <FormControl className={classes.formControlSmall}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>C. de Costos</InputLabel>
                <TextField
                    id="filled-margin-dense"
                    defaultValue="00"
                    className={classes.textField}
                    helperText="Negocio"
                    margin="dense"
                    variant="filled"
                    style={{width: '53px', height: '52px', paddingRight: '0'}}
                    inputProps={{maxLength:2, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                    
                />
                <TextField
                    id="filled-margin-dense"
                    defaultValue="00"
                    className={classes.textField}
                    helperText="Planta"
                    margin="dense"
                    variant="filled"
                    style={{width: '53px', height: '52px', paddingLeft: '8px', paddingRight: 0}}
                    inputProps={{maxLength:2, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <TextField
                    id="filled-margin-dense"
                    defaultValue="0000"
                    className={classes.textField}
                    helperText="C.Costo"
                    margin="dense"
                    variant="filled"
                    style={{width: '66px', height: '52px', paddingLeft: '8px', paddingRight: 0}}
                    inputProps={{maxLength:4, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <TextField
                    id="filled-margin-dense"
                    defaultValue="0000"
                    className={classes.textField}
                    helperText="Linea"
                    margin="dense"
                    variant="filled"
                    style={{width: '66px', height: '52px', paddingLeft: '8px', paddingRight: 0}}
                    inputProps={{maxLength:4, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
            </FormControl>

            {/* Cuenta y Sub Cuenta*/}
            <FormControl className={classes.formControlSmall} style={{marginLeft:'-20px'}}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>Cuenta</InputLabel>
                <TextField
                    id="filled-margin-dense"
                    defaultValue="000000"
                    className={classes.textField}
                    helperText="Cuenta objeto"
                    margin="dense"
                    variant="filled"
                    style={{width: '97px', height: '52px', paddingRight:'8px'}}
                    inputProps={{maxLength:6, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />

                {/* Sub Cuenta */}
                <InputLabel htmlFor='numDocumento' className={classes.label} style={{marginLeft: '120px'}}>Sub cuenta</InputLabel>
                <TextField
                    id="filled-margin-dense"
                    defaultValue="000000"
                    className={classes.textField}
                    helperText="Auxiliar"
                    margin="dense"
                    variant="filled"
                    style={{width: '97px', height: '52px', paddingLeft:0}}
                    inputProps={{maxLength:6, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
            </FormControl>

            {/* Fecha LM */}
            <FormControl className={classes.formControlSmall} style={{marginLeft:'-20px'}}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>Fecha LM</InputLabel>
                <TextField
                    id="filled-margin-dense"
                    defaultValue="  /   /  "
                    className={classes.textField}
                    helperText="Desde"
                    margin="dense"
                    variant="filled"
                    style={{width: '97px', height: '52px', paddingRight:0}}
                    inputProps={{className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <CalendarTodayIcon className={classes.calendar}/>
                <TextField
                    id="filled-margin-dense"
                    defaultValue="  /   /  "
                    className={classes.textField}
                    helperText="Hasta"
                    margin="dense"
                    variant="filled"
                    style={{width: '97px', height: '52px', paddingRight:0}}
                    inputProps={{className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <CalendarTodayIcon className={classes.calendar}/>
            </FormControl>

            {/* Slider */}
            <FormControl className={classes.formControl}>
                <Typography id="non-linear-slider" className={classes.label} style={{paddingTop:'20px', marginLeft:'-20px'}}>
                    Importe $Arg
                </Typography>
                <Slider
                    className={classes.slider}
                    defaultValue={5}
                    min={0}
                    max={5}
                    marks={marks}
                />
                <Switch
                    className={classes.switch}
                    color="primary"
                    name="checkedB"
                    defaultChecked
                />
            </FormControl>

            {/* Estado Proceso */}
            <FormControl variant="filled" className={classes.formControl} style={{marginLeft:'14px', marginTop:'10px'}}>
                <InputLabel id="demo-simple-select-filled-label" className={classes.labelSelect}>Estado Proceso</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    className={classes.select}

                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'pendiente'}>Pendiente</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            {/* Compañia */}
            <FormControl variant="filled" className={classes.formControl} style={{marginLeft:'14px', marginTop:'10px'}}>
                <InputLabel id="demo-simple-select-filled-label" className={classes.labelSelect}>Estado Proceso</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    className={classes.select}

                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'pendiente'}>Pendiente</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor='numDocumento' className={classes.label}>N°Documento</InputLabel>
                <TextField
                    id="numDocumento"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Algo"
                    margin="dense"
                    variant="filled" 
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }} 
                    inputProps={{className:classes.input}}
                />  
            </FormControl>
        </div>
    );
};

