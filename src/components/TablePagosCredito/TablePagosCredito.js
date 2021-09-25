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
      const url =`https://backq10.herokuapp.com/api/pagosCredito`;
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
        label: 'Pagare',
        field: 'N_x00B0__x0020_PAGARÉ',
        width: 150,
      },
      {
        label: 'Numero comprobante',
        field: 'N_x00B0__x0020_DE_x0020_COMPROBANTE',
        width: 270,
      },
      {
        label: 'Fecha pago',
        field: 'FECHA_x0020_PAGO',
        width: 100,
      },
      {
        label: 'CAJERO',
        field: 'CAJERO',
        width: 100,
      },
      {
        label: 'OBSERVACIONES',
        field: 'OBSERVACIONES',
        width: 150,
      },
      {
        label: 'Fecha Asiento',
        field: 'FECHA_x0020_ASIENTO',
        width: 150,
      },
      {
        label: 'VALOR',
        field: 'VALOR',
        width: 150,
      },
      {
        label: 'Cuenta - Forma de pago',
        field: 'CUENTA_x0020_-_x0020_FORMA_x0020_DE_x0020_PAGO',
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