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
      const url =`https://backq10.herokuapp.com/api/creditos`;
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
        label: 'Numero de Identificación',
        field: 'N_x00B0__x0020_IDENTIFICACIÓN',
        width: 150,
      },
      {
        label: 'Periodo de credito',
        field: 'PERÍODO_x0020_CRÉDITO',
        width: 270,
      },
      {
        label: 'Numero pagaré credito',
        field: 'N_x00B0__x0020_PAGARÉ_x0020_CRÉDITO',
        width: 200,
      },
      {
        label: 'Fecha credito',
        field: 'FECHA_x0020_CRÉDITO',
        width: 100,
      },
      {
        label: 'Valor credito',
        field: 'VALOR_x0020_CRÉDITO',
        width: 100,
      },
      {
        label: 'Numero cuotas credito',
        field: 'N_x00B0__x0020_CUOTAS_x0020_CRÉDITO',
        width: 150,
      },
      {
        label: 'Periocidad cuotas',
        field: 'PERIODICIDAD_x0020_CUOTAS',
        width: 150,
      },
      {
        label: 'Credito anulado',
        field: 'CRÉDITO_x0020_ANULADO',
        width: 150,
      },
      {
        label: 'Asesor',
        field: 'ASESOR',
        width: 150,
      },
      {
        label: 'Fecha programada de cuota',
        field: 'FECHA_x0020_PROGRAMADA_x0020_CUOTA',
        width: 150,
      },
      {
        label: 'Valor de cuota',
        field: 'VALOR_x0020_CUOTA',
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