export const obtenerFechaTexto = (fecha) => {
    const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const partesFecha = fecha.split('/');
    const dia = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10);
    const anio = parseInt(partesFecha[2], 10);

    const mesTexto = meses[mes - 1];

    return `${dia} de ${mesTexto} de ${anio}`;
}