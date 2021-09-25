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
      const url =`https://backq10.herokuapp.com/api/pagosRealizados`;
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
        label: 'Fecha Asiento',
        field: 'FECHA_x0020_ASIENTO',
        width: 100,
      },
      {
        label: 'OBSERVACIONES',
        field: 'OBSERVACIONES',
        width: 150,
      },
      {
        label: 'Nombre producto',
        field: 'NOMBRE_x0020_PRODUCTO',
        width: 150,
      },
      {
        label: 'PERIODO',
        field: 'PERIODO',
        width: 150,
      },
      {
        label: 'Valor pagado',
        field: 'VALOR_x0020_PAGADO',
        width: 150,
      },
      {
        label: 'CUENTA',
        field: 'CUENTA',
        width: 150,
      },
      {
        label: 'Forma de pago',
        field: 'FORMA_x0020_DE_x0020_PAGO',
        width: 150,
      },
      {
        label: 'Valor por forma de pago',
        field: 'VALOR_x0020_POR_x0020_FORMA_x0020_DE_x0020_PAGO',
        width: 150,
      },
      {
        label: 'Estado',
        field: 'Estado',
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