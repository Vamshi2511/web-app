import { FC, useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { Crypto } from "../lib/fetchCrypto";

interface CryptoTableProps {
  cryptoData: Crypto[];
}

const CryptoTable: FC<CryptoTableProps> = ({ cryptoData }) => {
  // State for global filter (for filtering all columns)
  const [globalFilter, setGlobalFilter] = useState<string>("");

  // State for sorting (using built-in sorting from React Table)
  const [sorting, setSorting] = useState<any>([]);

  // Define columns with built-in sorting enabled by default.
  // (Filtering is built in; the global filter is applied automatically by getFilteredRowModel.)
  const columns: ColumnDef<Crypto>[] = [
    {
      accessorKey: "name",
      header: () => (
        <span style={{ float: "left", paddingLeft: "15px" }}>Name</span>
      ),
      enableSorting: false,
      cell: (info) => (
        <div style={companyCellStyle}>
          <img
            src={info.row.original.image}
            alt={info.getValue() as string}
            width={35}
            height={35}
            style={{ display: "block" }}
          />
          <div style={{ textAlign: "left" }}>
            <span style={{ fontWeight: "bold" }}>{info.getValue()}</span>
            <br />
            <span
              style={{ fontWeight: "light", fontSize: "small", color: "grey" }}
            >
              {info.row.original.symbol.toUpperCase()}
            </span>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "current_price",
      header: "Price ($)",
      cell: (info) => `$${(info.getValue() as number).toFixed(2)}`,
    },
    {
      accessorKey: "price_change_percentage_1h_in_currency",
      header: "1h",
      cell: (info) => (
        <span
          style={{ color: (info.getValue() as number) > 0 ? "green" : "red" }}
        >
          {(info.getValue() as number).toFixed(2)}%
        </span>
      ),
    },
    {
      accessorKey: "price_change_percentage_24h",
      header: "24h",
      cell: (info) => (
        <span
          style={{ color: (info.getValue() as number) > 0 ? "green" : "red" }}
        >
          {(info.getValue() as number).toFixed(2)}%
        </span>
      ),
    },
    {
      accessorKey: "price_change_percentage_7d_in_currency",
      header: "7d",
      cell: (info) => (
        <span
          style={{ color: (info.getValue() as number) > 0 ? "green" : "red" }}
        >
          {(info.getValue() as number).toFixed(2)}%
        </span>
      ),
    },
    {
      accessorKey: "market_cap",
      header: "Market Cap ($)",
      cell: (info) => `$${(info.getValue() as number).toLocaleString()}`,
    },
  ];

  // Build the table instance using built-in sorting and filtering row models.
  const table = useReactTable({
    data: cryptoData,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px" }}>
      {/* Global Search Input */}

      <table style={tableStyle}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} style={headerRowStyle}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={headerCellStyle}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === "asc"
                    ? " 🔼"
                    : header.column.getIsSorted() === "desc"
                    ? " 🔽"
                    : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} style={{ borderBottom: "1px solid #ccc" }}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={cellStyle}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
  textAlign: "center",
};

const headerRowStyle: React.CSSProperties = {
  background: "#0070f3",
  color: "white",
};

const headerCellStyle: React.CSSProperties = {
  padding: "10px",

  cursor: "pointer",
};

const cellStyle: React.CSSProperties = {
  padding: "10px",
};

const companyCellStyle: React.CSSProperties = {
  ...cellStyle,
  display: "flex",
  alignItems: "center",
  //   justifyContent: "center",
  gap: "10px",
};

export default CryptoTable;
