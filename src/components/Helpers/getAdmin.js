const url =`http://localhost:5000/api/administrativos`;

export const getAdmin= async () => {

  try {
    const resp= await fetch(url+'/list');
    const data= await resp.json();

    return(data.data);

  } catch (error) {
    console.log(error);
  }
}