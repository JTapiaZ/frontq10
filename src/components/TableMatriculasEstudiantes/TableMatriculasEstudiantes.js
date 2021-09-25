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
      const url =`https://backq10.herokuapp.com/api/matriculasEstudiantes`;
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
        label: 'Numero documento',
        field: 'N_x00B0__x0020_IDENTIFICACIÓN',
        width: 150,
      },
      {
        label: 'Estado matricula',
        field: 'ESTADO_x0020_MATRICULA',
        width: 270,
      },
      {
        label: '¿Matricula formalizada?',
        field: '_x00BF_MATRICULA_x0020_FORMALIZADA_x003F_',
        width: 100,
      },
      {
        label: 'SEDE',
        field: 'SEDE',
        width: 100,
      },
      {
        label: 'Programa - Jornada',
        field: 'PROGRAMA_x0020_-_x0020_JORNADA',
        width: 150,
      },
      {
        label: 'Nivel',
        field: 'NIVEL',
        width: 150,
      },
      {
        label: 'PERIODO',
        field: 'PERIODO',
        width: 150,
      },
      {
        label: 'Fecha de cancelacion',
        field: 'FECHA_x0020_CANCELACIÓN',
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