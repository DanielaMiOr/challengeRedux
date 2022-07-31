import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../CSS/Modal.css';

const MySwal = withReactContent(Swal)


 

export const ConfirmDelete = async (id) => {
  let res = false;
    const accept = await MySwal.fire({
      
      title: '¿Deseal eliminar el producto?',
      text: 'Eliminar un producto es una acción permanente y no podrás recuperar el producto eliminado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1606A2',
      cancelButtonColor: '#000000',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) { 
    //     llamamos a la fcion para eliminar   
    //     deleteNote(id) 
    //     res=true        
    //   }
    // }) || {};  
    //   return res;
  }