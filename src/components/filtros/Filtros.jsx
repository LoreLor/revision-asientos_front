
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
//import Slider from "@material-ui/core/Slider";
//import Typography from "@material-ui/core/Typography";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
//import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { filtrarAsientos } from "../../redux/actions";
import { useDispatch } from "react-redux";



const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Roboto, sans-serif",
        padding: "25px 31px 36px 27px",
        backgroundColor: "#fff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width:"100%",
        gap: "0.5rem",
    },
    textField: {
        width: "100%",
        height: "53px",
        margin: "24px 0 0.5px",
        padding: "16px 17px 15px 15px",
        bordeRadius: "6px",
    },
    input: {
        background: "#f7f7f7",
        fontSize: "16px",
        color:"#334054",
        padding: "16px 8px 12px 15px"
    },
    formControl: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    label: {
        width: "16rem",
        height: "24px",
        margin: "0 0 0 15px",
        fontFamily: "Roboto",
        fontSize: "14px",
        textAlign: "left",
        color: "#707070" 
    },
    formControlSmall:{
        width: "16rem",
        flexDirection:"row",
        marginBottom: theme.spacing(2),
    },
    inputSmall: {
        textAlign:"center",
        paddingLeft: "5px",
        paddingRight: "8px",
        color:"#334054",
        background: "#f7f7f7",
    },
    helperText: {
        marginLeft:0,
        fontSize: "11px",
        color: "#334054"
    },
    calendar: {
        width: "24px",
        height: "24px",
        margin: "50px 3px 0 0.5px",
        padding: "2px 3px",
        color: "#516b91"
    },
    slider: {
        width: "241px",
        height: "2px",
        margin: "50px 0 0 ",
        marginRight:"15px",
        marginTop: "30px",
        marginLeft:"-20px",
        color: "#3b86ff",
    },
    valueLabel: {
        left: "calc(-50% + 12px)",
        top: -22,
        "& *": {
            background: "transparent",
            color: "#000",
        },
    },
    switch: {
        marginTop: "-90px",
        marginLeft:"180px",
        "& .Mui-checked":{
            color: "#3b86ff",
        }, 
    },
    select: {
        width: "16rem",
        height: "52px",
        background: "#f7f7f7",
        marginTop:"30px",
    },
    labelSelect: {
        marginLeft: "-10px",
        marginTop: "-10px",
        fontSize: "14px",
        color: "#707070",
    },
    button: {
        width: "5rem",
        height: "39px",
        backgroundColor: "#007cc3",
        padding: "10px 16px",
        borderRadius: "2px",
        color: "#fff",
        fontSize:"12px",
    }

}));

// const marks = [
//     {
//         value: 0,
//         label: "0",
//     },
//     {
//         value: 5,
//         label: "+1 millon",
//     },
// ];

export const Filtros = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [filtro, setFiltro] = useState({
        "nroDocumento":"",
        "tipoDocumento":"",
        "nroOrdenCompra":"",
        "subledger":"",
        "negocio":"",
        "planta":"",
        "centroCosto":"",
        "linea":"",
        "cuentaObjeto":"",
        "cuentaAuxiliar":"",
        "fechaContable":null,
        "importe":"",
        "libro":"",
        "fechaContableDesde":null,
        "fechaContableHasta": null
    });

  

    // manejo de cambio de estados en los inputs y selects
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFiltro({
            ...filtro,
            [name] : value
        });
    };
    console.log("filtro", filtro);
    

    // manejo de envío de form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const filtrosFormat = {
                ...filtro,
                nroDocumento: filtro.nroDocumento ? parseInt(filtro.nroDocumento) : "",
                fechaContableDesde: filtro.fechaContableDesde
                    ? filtro.fechaContableDesde.toISOString().split("T")[0]
                    : null,
                fechaContableHasta: filtro.fechaContableHasta
                    ? filtro.fechaContableHasta.toISOString().split("T")[0]
                    : null,
                importe: filtro.importe ? parseFloat(filtro.importe) : "",
            };
            await dispatch(filtrarAsientos(filtrosFormat));
        } catch (error) {
            console.log("error", error);
        }
        
    };   

 
    return (
        <Grid container className={classes.root} >

            {/* Número de Documento */}
            <FormControl className={classes.formControl} xs={3}>
                <InputLabel htmlFor="nroDocumento" className={classes.label}>N°Documento</InputLabel>
                <TextField
                    id="nroDocumento"
                    name="nroDocumento"
                    className={classes.textField}
                    value={(filtro.nroDocumento)}
                    onChange={handleChange}
                    margin="dense"
                    variant="filled"
                    inputProps={{className:classes.input}}
                />  
            </FormControl>

            {/* Tipo de Documento */}
            <FormControl className={classes.formControl} xs={3}>
                <InputLabel htmlFor="tipoDocumento" className={classes.label}>Tipo Documento</InputLabel>
                <TextField                        
                    id="tipoDocumento"
                    name='tipoDocumento'
                    type='text'
                    className={classes.textField}
                    value={filtro.tipoDocumento}
                    onChange={handleChange}
                    margin="dense"
                    variant="filled"
                    inputProps={{className:classes.input}}
                />                 
            </FormControl>

            {/* N° Orden de Compra */}
            <FormControl className={classes.formControl} xs={3}>
                <InputLabel htmlFor='nroOrdenCompra' className={classes.label}>N°Orden de Compra</InputLabel>
                <TextField
                    id="nroOrdenCompra"
                    name='nroOrdenCompra'
                    type='text'
                    className={classes.textField}
                    value={filtro.nroOrdenCompra}
                    onChange={handleChange}
                    margin="dense"
                    variant="filled"
                    inputProps={{className:classes.input}}
                />
            </FormControl>

            {/* N° Subledger */}
            <FormControl className={classes.formControl} xs={3}>
                <InputLabel htmlFor='subledger' className={classes.label}>Subledger</InputLabel>
                <TextField
                    id="subledger"
                    name='subledger'
                    className={classes.textField}
                    value={filtro.subledger}
                    onChange={handleChange}
                    margin="dense"
                    variant="filled"
                    inputProps={{className:classes.input}}
                />
            </FormControl>

            {/* Centro de Costos */}
            <FormControl className={classes.formControlSmall} xs={3}>
                <InputLabel htmlFor='negocio' className={classes.label}>Centro de Costos</InputLabel>
                <TextField
                    id="negocio"
                    name="negocio"
                    placeholder="00"
                    className={classes.textField}
                    value={filtro.negocio}
                    onChange={handleChange}
                    helperText="Negocio"
                    margin="dense"
                    variant="filled"
                    style={{width: "3.5rem", height: "52px", paddingRight: "0"}}
                    inputProps={{maxLength:2, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                    
                />
                <TextField
                    id="planta"
                    name="planta"
                    placeholder="00"
                    className={classes.textField}
                    value={filtro.planta}
                    onChange={handleChange}
                    helperText="Planta"
                    margin="dense"
                    variant="filled"
                    style={{width: "3.5rem", height: "52px", paddingLeft: "8px", paddingRight: 0}}
                    inputProps={{maxLength:2, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <TextField
                    id="centroCosto"
                    name="centroCosto"
                    placeholder="0000"
                    className={classes.textField}
                    value={filtro.centroCosto}
                    onChange={handleChange}
                    helperText="C.Costo"
                    margin="dense"
                    variant="filled"
                    style={{width: "4rem", height: "52px", paddingLeft: "8px", paddingRight: 0}}
                    inputProps={{maxLength:4, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <TextField
                    id="linea"
                    name="linea"
                    placeholder="0000"
                    className={classes.textField}
                    value={filtro.linea}
                    onChange={handleChange}
                    helperText="Linea"
                    margin="dense"
                    variant="filled"
                    style={{width: "4rem", height: "52px", paddingLeft: "8px", paddingRight: 0}}
                    inputProps={{maxLength:4, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
            </FormControl>

            {/* Cuenta y Sub Cuenta*/}
            <FormControl className={classes.formControlSmall}  xs={3} style={{marginLeft:"3px"}}>
                <InputLabel htmlFor='cuentaObjeto' className={classes.label}>Cuenta</InputLabel>
                <TextField
                    id="cuentaObjeto"
                    name='cuentaObjeto'
                    placeholder="000000"
                    className={classes.textField}
                    value={filtro.cuentaObjeto}
                    onChange={handleChange}
                    helperText="Cuenta objeto"
                    margin="dense"
                    variant="filled"
                    style={{width: "6rem", height: "52px", paddingRight:"8px"}}
                    inputProps={{maxLength:6, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />

                {/* Sub Cuenta */}
                <InputLabel htmlFor='cuentaAuxiliar' className={classes.label} style={{marginLeft: "120px"}}>Sub cuenta</InputLabel>
                <TextField
                    id="cuentaAuxiliar"
                    name="cuentaAuxiliar"
                    placeholder="000000"
                    className={classes.textField}
                    value={filtro.cuentaAuxiliar}
                    helperText="Auxiliar"
                    margin="dense"
                    variant="filled"
                    style={{width: "6rem", height: "52px", paddingLeft:0}}
                    inputProps={{maxLength:6, className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
            </FormControl>

            {/* Fecha LM */}
            <FormControl className={classes.formControlSmall} xs={3}>
                <InputLabel htmlFor='fechaContableDesde' className={classes.label}>Fecha LM</InputLabel>
                <TextField
                    id="fechaContableDesde"
                    name="fechaContableDesde"
                    placeholder="  /   /  "
                    className={classes.textField}
                    value={filtro.fechaContableDesde}
                    onChange={handleChange}
                    helperText="Desde"
                    margin="dense"
                    variant="filled"
                    style={{width: "6rem", height: "52px", paddingRight:0}}
                    inputProps={{className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <CalendarTodayIcon className={classes.calendar}/>
                <TextField
                    id="fechaContableHasta"
                    placeholder="  /   /  "
                    className={classes.textField}
                    value={filtro.fechaContableHasta}
                    onChange={handleChange}
                    helperText="Hasta"
                    margin="dense"
                    variant="filled"
                    style={{width: "6rem", height: "52px", paddingRight:0}}
                    inputProps={{className:classes.inputSmall}}
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }}
                />
                <CalendarTodayIcon className={classes.calendar}/>
            </FormControl>

            {/* Importe */}
            <FormControl className={classes.formControlSmall}  xs={3}>
                <InputLabel htmlFor='cuentaObjeto' className={classes.label}>Importe $Arg</InputLabel>
                {/* Min */}
                <TextField
                    id="cuentaObjeto"
                    label="Min"
                    name='cuentaObjeto'
                    placeholder="000000"
                    className={classes.textField}
                    value={filtro.cuentaObjeto}
                    onChange={handleChange}
                    margin="dense"
                    variant="filled"
                    style={{width: "6rem", height: "52px", paddingRight:"8px"}}
                    inputProps={{maxLength:6, className:classes.inputSmall}}
                />

                {/* Max */}
    
                <TextField
                    id="cuentaAuxiliar"
                    label="Máx"
                    name="cuentaAuxiliar"
                    placeholder="000000"
                    className={classes.textField}
                    value={filtro.cuentaAuxiliar}
                    margin="dense"
                    variant="filled"
                    style={{width: "6rem", height: "52px", paddingLeft:0}}
                    inputProps={{maxLength:6, className:classes.inputSmall}}
                />
            </FormControl>

            {/* Slider */}
            {/* <FormControl className={classes.formControl} style={{marginLeft:"14px", marginTop:"10px"}} xs={3}>
                <Typography id="non-linear-slider" className={classes.label} style={{paddingTop:"20px", marginLeft:"-20px"}}>
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
            </FormControl> */}

            {/* Estado Proceso */}
            <FormControl variant="filled" className={classes.formControl} style={{marginLeft:"14px", marginTop:"20px"}}>
                <InputLabel id="estadoProceso" className={classes.labelSelect}>Estado Proceso</InputLabel>
                <Select
                    labelId="estadoProceso"
                    id="estadoProceso"
                    name="estadoProceso"
                    className={classes.select}
                    value={filtro.estadoProceso}
                    onChange={handleChange}
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Pendiente">Pendiente</MenuItem>
                    <MenuItem value="Aprobado">Aprobado</MenuItem>
                    <MenuItem value="Rechazado">Rechazado</MenuItem>
                </Select>
            </FormControl>

            {/* Compañia */}
            <FormControl variant="filled" className={classes.formControl} style={{marginLeft:"14px", marginTop:"20px"}}xs={3}>
                <InputLabel id="compania" className={classes.labelSelect}>Compañia</InputLabel>
                <Select
                    labelId="compania"
                    id="compania"
                    name="compania"
                    className={classes.select}
                    value={filtro.compania}
                    onChange={handleChange}

                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Arcor">Arcor</MenuItem>
                    <MenuItem value="Ayi">Ayi</MenuItem>
                    <MenuItem value="Bagley">Bagley</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{width:"16rem", marginTop:"13px", height:"53px"}}xs={3}>
                <InputLabel htmlFor='libro' className={classes.label}>Libro</InputLabel>
                <TextField
                    id="libro"
                    name="libro"
                    placeholder="AA."
                    className={classes.textField}
                    value={filtro.libro}
                    onChange={handleChange}
                    margin="dense"
                    variant="filled" 
                    FormHelperTextProps={{
                        className: classes.helperText,
                    }} 
                    inputProps={{className:classes.input}}
                />  
            </FormControl>

            <FormControl className={classes.formControl} style={{marginLeft:"140px", marginTop:"60px", marginRight:"100px"}}xs={3}>
                <Button variant="contained" className={classes.button} onClick={handleSubmit}>
                    Filtrar
                </Button>
            </FormControl>
        </Grid>
    );
};

