import { useMemo } from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import{BiDotsVertical} from 'react-icons/bi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { BiFilterAlt } from 'react-icons/bi';
import '../CSS/Table.css';
import Minimodal from "./MiniModal";
export default function Table(props) {


    const { data } = props
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
                accessor: "enable",
                Cell: () => (<p className="columnState">Publicado</p>)
            },
            {
                Header: "",
                id: "icon",
                Cell: () => (<button className="btnTableOpcion"onClick={Minimodal}><BiDotsVertical className="opcionTable" /></button>)
            },
        ],

        []

    );
    const tableInstance = useTable({ columns, data,initialState: {pageIndex: 1, pageSize: 5 }}, useGlobalFilter, useSortBy, usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        setGlobalFilter,
        prepareRow,
        page,
        previousPage,
        state,
        canPreviousPage,
        nextPage,
        canNextPage,
        setPageSize,
        state: { pageIndex, pageSize }

    } = tableInstance
    return (
        <div className="containerTable">
            <div className="containerBtnUp">
                <div className="filterItems">
                    <p>No.items: </p>
                    <select className="pageSelect"
                        value={pageSize}
                        onChange={e => {
                            console.log(e.target.value)
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[5, 10, 15, 20, 25].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
               
                <input
                 className="search"
                placeholder= "Busca por SKU"
                    type="search"
                    value={state.globalFilter}
                    onChange={(event) => setGlobalFilter(event.target.value)}
                />

                <div className="filterBox">
                    <button className="btnColumn">
                        <img
                            className="vectorIcon"
                            src={require("../img/vector.png")}
                            alt="imgvector" />

                        Gestionar columnas <FiChevronDown /> </button>
                    <button className="filter"> <BiFilterAlt className="iconBtnSize" /> </button>

                </div>
            </div>
            <div className="table">  
            <table {...getTableProps()}>
               
                <thead>
                
                    {headerGroups.map((headerGroup) => (
                        <tr className="columns" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                            
                               <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            // ? column.isSortedDesc
                                                ? <button > <FiChevronUp  className="iconDirection1"/> </button>
                                                : <button > <FiChevronDown className="iconDirection1"/> </button>
                                            // : ""
                                        }
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="containerBtnPagination">


                <button className="btonPagination" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {"<"}
                </button>

                <button className="btonPagination" onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                </button>
            </div>
            </div>
        </div>
    )
}
