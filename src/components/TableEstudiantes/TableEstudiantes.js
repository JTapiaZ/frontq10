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
      const url =`https://backq10.herokuapp.com/api/estudiantes`;
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
        field: 'IDENTIFICACIÓN_x0020_ESTUDIANTE',
        width: 150,
      },
      {
        label: 'Nombre completo',
        field: 'NOMBRE_x0020_COMPLETO',
        width: 270,
      },
      {
        label: 'Fecha nacimiento',
        field: 'FECHA_x0020_DE_x0020_NACIMIENTO',
        width: 100,
      },
      {
        label: 'Telefono',
        field: 'TELÉFONO',
        width: 100,
      },
      {
        label: 'Celular',
        field: 'CELULAR',
        width: 150,
      },
      {
        label: 'Correo electronico',
        field: 'CORREO_x0020_ELECTRÓNICO',
        width: 150,
      },
      {
        label: 'Direccion',
        field: 'DIRECCIÓN',
        width: 150,
      },
      {
        label: 'Municipio',
        field: 'MUNICIPIO_x0020_DIRECCIÓN',
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