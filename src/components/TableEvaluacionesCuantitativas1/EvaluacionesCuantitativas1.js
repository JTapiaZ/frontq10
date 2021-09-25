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
      const url =`https://backq10.herokuapp.com/api/evaluacionescuantitativas1`;
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
        label: 'Codigo curso',
        field: 'CÓDIGO_x0020_CURSO',
        width: 150,
      },
      {
        label: 'Codigo matricula',
        field: 'CÓDIGO_x0020_MATRÍCULA',
        width: 270,
      },
      {
        label: 'ASIGNATURA',
        field: 'ASIGNATURA',
        width: 100,
      },
      {
        label: 'Parametro padre',
        field: 'PARAMETRO_x0020_PADRE',
        width: 100,
      },
      {
        label: 'Porcentaje parametro padre',
        field: '_x0020_PORCENTAJE_x0020_PARAMETRO_x0020_PADRE',
        width: 150,
      },
      {
        label: 'NOTA',
        field: 'NOTA',
        width: 150,
      },
      {
        label: 'INASISTENCIAS',
        field: 'INASISTENCIAS',
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