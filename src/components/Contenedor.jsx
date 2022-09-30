import '../assets/styles/contenedor.css'
import Presentacion from './Presentacion';
import Campos from './Campos';
import Boton from './BotonSubir';
import InputRadio from './InputRadio';

function Contenedor() {
    return ( 
        <>
        <center>
            <div className="wrapper">
                <Presentacion />
                <Campos />
                <InputRadio />
                <Boton />
            </div>
        </center>
        
        </>
     );
}

export default Contenedor;