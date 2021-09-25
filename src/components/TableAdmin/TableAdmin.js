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
      const url =`https://backq10.herokuapp.com/api/administrativos`;
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
        label: 'Numero de documento',
        field: 'NRO_x0020_DOCUMENTO',
        width: 150,
      },
      {
        label: 'Nombre completo',
        field: 'NOMBRE_x0020_COMPLETO',
        width: 270,
      },
      {
        label: 'CELULAR',
        field: 'CELULAR',
        width: 200,
      },
      {
        label: 'TELEFONO',
        field: 'TELÉFONO',
        width: 100,
      },
      {
        label: 'Correo electronico',
        field: 'CORREO_x0020_ELECTRÓNICO',
        width: 100,
      },
      {
        label: 'GÉNERO',
        field: 'GÉNERO',
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