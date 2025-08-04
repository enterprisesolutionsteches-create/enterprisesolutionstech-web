import { toast } from 'react-toastify';

export const mostrarToast = (tipo, mensaje) => {
    toast(mensaje, {
        type: tipo,
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};