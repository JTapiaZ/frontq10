import React, {useEffect, useState} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
// import {getAdmin} from '../Helpers/getAdmin';

export default function SelectSearchTopReverse() {

  /******* STATES ******/
  const [data, setData] = useState([]);
  const [datatable, setDatatable] = useState([])


  /******Funciones ******/
  useEffect(() => {
    // getAdmin().then(Admin => {
    //   setData(Admin)
    // })

    let patoo = async () => {
      const url =`https://backq10.herokuapp.com/api/disenoCurricularModulos`;
      const resp= await fetch(url+'/list');
      const data= await resp.json();
      setData(data.data);
    };
    patoo()
  }, [])

useEffect(() => {
  setDatatable(
    {
    columns: [
      {
        label: 'Nombre Programa',
        field: 'NOMBRE_x0020_PROGRAMA',
        width: 150,
      },
      {
        label: 'Nombre pensum',
        field: 'NOMBRE_x0020_PENSUM',
        width: 270,
      },
      {
        label: 'ABREVIACIÓN',
        field: 'ABREVIACIÓN',
        width: 200,
      },
      {
        label: 'Fecha resolucion',
        field: 'FECHA_x0020_DE_x0020_RESOLUCIÓN',
        width: 100,
      },
      {
        label: 'Disponible oferta laboral',
        field: 'DISPONIBLE_x0020_OFERTA_x0020_LABORAL',
        width: 100,
      },
      {
        label: 'Estado programa',
        field: 'ESTADO_x0020_PROGRAMA',
        width: 150,
      },
      {
        label: 'Aplica pre-inscripcion',
        field: 'APLICA_x0020_PREINSCRIPCIÓN',
        width: 150,
      },
      {
        label: 'Puntaje evaluacion',
        field: 'PUNTAJE_x0020_DE_x0020_EVALUACIÓN',
        width: 150,
      },
      {
        label: 'Intentos evaluacion',
        field: 'INTENTOS_x0020_EVALUACIÓN',
        width: 150,
      },
    ],
    rows: data,
  });
}, [data])


  // console.log(data);
  console.log(datatable);
  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      barReverse
    />
  );
}