import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)




export const ConfirmDelete = async () => {
  let res = false;
  const accept = await MySwal.fire({

    title: '¿Deseal eliminar el producto?',
    text: 'Eliminar un producto es una acción permanente y no podrás recuperar el producto eliminado.',
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#FF1515',
    confirmButtonColor: '#5B00A2',
    confirmButtonText: 'Sí, eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {

      res = true
    }
  }) || {};
  return res;
}