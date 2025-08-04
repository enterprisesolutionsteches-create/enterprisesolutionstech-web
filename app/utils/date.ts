export const getDateToday = () => {
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, "0");
  const mes = String(hoy.getMonth() + 1).padStart(2, "0"); 
  const anio = String(hoy.getFullYear()).slice(-2); 

  return `${dia}.${mes}.${anio}`;
};
