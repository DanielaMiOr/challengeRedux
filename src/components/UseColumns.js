import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "NOMBRE DEL PRODUCTO",
       accessor: "product_name"
     },
     {
       Header: "SKU SIMPLE",
       accessor: "simple_sku"
     },
     {
       Header: "SKU",
       accessor: "sku"
     },
     {
       Header: "UPC",
       accessor: "upc"
     },
     {
        Header: "PRECIO",
        accessor: "price"
      },
      {
        Header: "FECHA DE CARGA",
        accessor: "created_at"
      },
      {
        Header: "ESTADO",
        accessor: "enable"
      }
   ],
   []
 );

 return columns;
}
