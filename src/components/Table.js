import { useMemo } from "react";
import { useTable, usePagination, useSortBy, useGlobalFilter } from "react-table";
import{AiOutlineSearch} from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { BiFilterAlt } from 'react-icons/bi';
import '../CSS/Table.css';
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
                accessor: "enable"
            }
        ],

        []

    );
    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        setGlobalFilter,
        prepareRow,
        previousPage,
        state,
        canPreviousPage,
        nextPage,
        canNextPage,
        setPageSize,
        state: { pageSize }

    } = tableInstance
    return (
        <div className="containerTable">
            <div className="containerBtnUp">
                <div className="filterItems">
                    <p>No.items: </p>
                    <select className="pageSelect"
                        value={pageSize}
                        onChange={e => {
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
                    {rows.map((row) => {
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
            <div>


                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {"<"}
                </button>

                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                </button>
            </div>
            </div>
        </div>
    )
}
