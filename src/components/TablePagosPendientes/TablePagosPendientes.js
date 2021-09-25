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
      const url =`https://backq10.herokuapp.com/api/pagosPendientes`;
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
        label: 'Numero identificacion',
        field: 'N_x00B0__x0020_IDENTIFICACIÓN',
        width: 150,
      },
      {
        label: 'Nombre producto',
        field: 'NOMBRE_x0020_PRODUCTO',
        width: 270,
      },
      {
        label: 'PERIODO',
        field: 'PERIODO',
        width: 100,
      },
      {
        label: 'Valor Producto',
        field: 'VALOR_x0020_PRODUCTO',
        width: 100,
      },
      {
        label: 'CANTIDAD',
        field: 'CANTIDAD',
        width: 150,
      },
      {
        label: 'Valor impuesto',
        field: 'VALOR_x0020_IMPUESTO',
        width: 150,
      },
      {
        label: 'Valor descuento',
        field: 'VALOR_x0020_DESCUENTO',
        width: 150,
      },
      {
        label: 'Numero recibo pago',
        field: 'N_x00B0__x0020_RECIBO_x0020_DE_x0020_PAGO_x0020__x0028_ABONOS_x0029_',
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