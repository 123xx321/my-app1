import React from 'react'
import "./C03compCss.css"
import style from './C03compCssObj.js'

const C03componenteConCss = () => {
    return (
        <div className="marcoComponente">
            <h4>Componente 3. Con formas de definir estilos</h4>

            <button style={{backgrounColor:'green', color:'blue', padding:'3px'}}>
                Botton 1 con estilos en linea de atributos (definido como objeto)
            </button>
            <hr/>

            <button>
                Boton 2 con estilos en archivo css (normal)

            </button>
            <br/>
            <button style={style.estilo1}>
                 Boton 3 con estilos en archivo js (definido como objeto)
            </button>
        </div>
    )
}

export default C03componenteConCss