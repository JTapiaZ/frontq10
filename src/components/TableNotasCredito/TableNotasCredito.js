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
      const url =`https://backq10.herokuapp.com/api/notasCredito`;
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
        label: 'NÚMERO',
        field: 'NÚMERO',
        width: 270,
      },
      {
        label: 'FECHA',
        field: 'FECHA',
        width: 100,
      },
      {
        label: 'PERIODO',
        field: 'PERIODO',
        width: 100,
      },
      {
        label: 'OBSERVACIONES',
        field: 'OBSERVACIONES',
        width: 150,
      },
      {
        label: 'CAJERO',
        field: 'CAJERO',
        width: 150,
      },
      {
        label: 'Nombre Producto',
        field: 'NOMBRE_x0020_PRODUCTO',
        width: 150,
      },
      {
        label: 'Valor Producto',
        field: 'VALOR_x0020_PRODUCTO',
        width: 150,
      },
      {
        label: 'ESTADO',
        field: 'ESTADO',
        width: 150,
      },
      {
        label: 'Fecha anulacion',
        field: 'FECHA_x0020_ANULACIÓN',
        width: 150,
      },
      {
        label: 'Justificacion anulacion',
        field: 'JUSTIFICACIÓN_x0020_ANULACIÓN',
        width: 150,
      },
      {
        label: 'Responsable anulacion',
        field: 'RESPONSABLE_x0020_ANULACIÓN',
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