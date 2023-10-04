import { useState, useEffect } from 'react'
import './styles/App.css'
import axios from 'axios'
import Col from 'react-bootstrap/esm/Col'
import { listFormater } from './utilities/listFormater'
import { filter, filterSubraza } from './utilities/filterList'
import { ListaRazas } from './components/ListaRazas'
import { Filtro } from './components/Filtro'
import { Nav } from './components/Nav'

function App() {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [stateRaza, setStateRaza] = useState([]);
  useEffect(() => {
    getFullList()
  }, [])

  const getFullList = () => {
    axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
      setList(listFormater(response.data.message))
      setFilteredList(listFormater(response.data.message))
    }).catch((error) => {
      console.log(error);
    });
  }
  const selectedRaza = (info) => {
    if (info !== 'NULL') {
      setFilteredList([]);
      let tempFilteredList = filter(list, info);
      setStateRaza(tempFilteredList[0]);
      setFilteredList(tempFilteredList);
    } else {
      setStateRaza({});
      setFilteredList([...list]);
    }
  }
  const selectedSubRaza = (info) => {
    let tempFilteredList = { ...stateRaza }
    if (info.length > 0) {
      if (info !== 'Todas') {
        let tempFilteredList = filterSubraza({ ...stateRaza }, info);
        setFilteredList(tempFilteredList);
        return
      }
    }
    let temp = tempFilteredList.subrazas.map((el) => {
      return { raza: tempFilteredList.raza + ' ' + el, subrazas: [] }
    })
    tempFilteredList = [tempFilteredList].concat(temp)
    setFilteredList(tempFilteredList);
  }
  return (
    <>
      <div className='d-flex justify-content-center main-container'>
        <div className='col-12 principal-container justify-content-center align-content-start row'>
          <Col className='header'>
            <Nav />
            <Filtro lista={list} onSelectRaza={selectedRaza} onSelectSubRaza={selectedSubRaza} />
          </Col>
          <ListaRazas lista={filteredList} />
        </div>
      </div>
    </>
  )
}

export default App
