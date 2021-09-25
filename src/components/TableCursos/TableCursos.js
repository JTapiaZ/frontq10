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
      const url =`https://backq10.herokuapp.com/api/cursos`;
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
        label: 'Codigo - Nombre Curso',
        field: 'CODIGO_x0020_-_x0020_NOMBRE_x0020_CURSO',
        width: 150,
      },
      {
        label: 'Programa - Asignatura - Jornada',
        field: 'PROGRAMA_x0020_-_x0020_ASIGNATURA_x002F_MÓDULO_x0020_-_x0020_JORNADA',
        width: 270,
      },
      {
        label: 'Tipo evaluación',
        field: 'TIPO_x0020_EVALUACIÓN',
        width: 200,
      },
      {
        label: 'Fecha inicio',
        field: 'FECHA_x0020_INICIO',
        width: 100,
      },
      {
        label: 'Fecha fin',
        field: 'FECHA_x0020_FIN',
        width: 100,
      },
      {
        label: 'AULA',
        field: 'AULA',
        width: 150,
      },
      {
        label: 'Nombre Docente',
        field: 'NOMBRE_x0020_DOCENTE',
        width: 150,
      },
      {
        label: 'HORARIO',
        field: 'HORARIO',
        width: 150,
      },
      {
        label: 'PERIODO',
        field: 'PERIODO',
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