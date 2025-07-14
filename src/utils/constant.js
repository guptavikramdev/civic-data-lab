export const API_URL=process.env.API_URL;
import csv from "@/assets/fileIcon/csv.png"
import json from "@/assets/fileIcon/json.png"
import pdf from "@/assets/fileIcon/pdf.png"
import xlsx from "@/assets/fileIcon/xlsx.png"
import xls from "@/assets/fileIcon/xls.png"
import zip from "@/assets/fileIcon/zip.png"
export const fileIconMap={
    CSV:csv,
    PDF:pdf,
    XLSX:xlsx,
    JSON:json,
    XLS:xls,
    ZIP:zip,
}
export const  searchParameter = ["query", "Geography", "sectors", "tags", "formats", "sort", "order"];
export const headerNav=[
    {
        label:"All Data",
        link:"all-data"
    },
    {
        label:"Sector",
        link:"sector"
    },
    {
        label:"Use Case",
        link:"all-data"
    },
    {
        label:"About Us",
        link:"all-data"
    }
]