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
      const url =`https://backq10.herokuapp.com/api/homologacionesHabilitacionesCuantitativas`;
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
        label: 'Codigo matricula',
        field: 'CÓDIGO_x0020_MATRÍCULA',
        width: 150,
      },
      {
        label: 'TIPO',
        field: 'TIPO',
        width: 270,
      },
      {
        label: 'ASIGNATURA',
        field: 'ASIGNATURA',
        width: 100,
      },
      {
        label: 'Institucion donde la curso',
        field: 'INSTITUCIÓN_x0020_DONDE_x0020_LA_x0020_CURSÓ',
        width: 100,
      },
      {
        label: 'NOTA',
        field: 'NOTA',
        width: 150,
      },
      {
        label: 'ESTADO',
        field: 'ESTADO',
        width: 150,
      },
      {
        label: 'PERIODO',
        field: 'PERIODO',
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