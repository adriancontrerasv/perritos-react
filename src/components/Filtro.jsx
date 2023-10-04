import './styles/Filtro.css'
import { useState, useRef, useEffect } from "react"
import Row from 'react-bootstrap/Row';
import { Typeahead } from 'react-bootstrap-typeahead';

export const Filtro = ({ lista, onSelectRaza, onSelectSubRaza }) => {
    useEffect(() => {
        refInputRazas.current?.clear()
        refInputSubRazas.current?.clear()
        onSelectRaza('NULL')
    }, [lista])
    const [opcionesSubRaza, setOpcionesSubRaza] = useState([])
    const [tieneSubRazas, setTieneSubRazas] = useState(false)
    const refInputRazas = useRef();
    const refInputSubRazas = useRef();

    const handleRazaChange = (selected) => {
        if (selected.length > 0) {
            if (selected[0].subrazas.length > 0) {
                setTieneSubRazas(true)
                setOpcionesSubRaza(selected[0].subrazas)
                onSelectRaza(selected[0].raza)
            } else {
                setTieneSubRazas(false)
                refInputSubRazas.current?.clear()
                setOpcionesSubRaza([])
                onSelectRaza(selected[0].raza)
            }
        } else {
            onSelectRaza('NULL')
            setTieneSubRazas(false)
            refInputSubRazas.current?.clear()
            setOpcionesSubRaza([])
        }
    }

    const handleSubRaza = (selected) => {
        if (selected.length > 0) {
            onSelectSubRaza(selected[0])
        } else {
            onSelectSubRaza('Todas')
        }
    }
    return (
        <Row className='justify-content-center'>
            <Typeahead
                className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-4 filtrosInput"
                ref={refInputRazas}
                onChange={handleRazaChange}
                filterBy={['raza']}
                id="search-input"
                emptyLabel="No se han encontrado resultados"
                labelKey="raza"
                options={lista}
                placeholder="Filtrar por Raza"
                renderMenuItemChildren={(option) => (
                    <div key={option.raza} id={option.raza}>
                        <span>{option.raza}</span>
                        {
                            option.subrazas.length > 0 ? (
                                <ul>
                                    {option.subrazas.map((element, index) => {
                                        return <li key={element + index}>Sub Raza: {element}</li>;
                                    })}

                                </ul>
                            ) : ''
                        }
                    </div>
                )}
            />

            <Typeahead
                className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-4 filtrosInput"
                ref={refInputSubRazas}
                disabled={!tieneSubRazas}
                onChange={handleSubRaza}
                id="search-input"
                emptyLabel="No se han encontrado resultados"
                labelKey="raza"
                options={opcionesSubRaza}
                placeholder="Filtrar por Sub Raza"
            />
        </Row>
    )
}
