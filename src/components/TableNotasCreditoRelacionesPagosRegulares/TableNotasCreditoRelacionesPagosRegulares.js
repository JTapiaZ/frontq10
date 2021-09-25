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
      const url =`https://backq10.herokuapp.com/api/notasCreditoRelacionesPagosRegulares`;
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
        label: 'Numero',
        field: 'NÚMERO',
        width: 150,
      },
      {
        label: 'Fecha relacion',
        field: 'FECHA_x0020_RELACIÓN',
        width: 270,
      },
      {
        label: 'Valor relacion',
        field: 'VALOR_x0020_RELACIÓN',
        width: 100,
      },
      {
        label: 'Pago relacion',
        field: 'PAGO_x0020_RELACIÓN',
        width: 100,
      },
      {
        label: 'ESTADO',
        field: 'ESTADO',
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