import { People } from "@/data/people";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

const PAGE_SIZE = 5;
const COLUMNS = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
];
/*<>{params.value + params.row.category}</>; Can use this form to manipulate 2 or more data row in one cell*/
const Home = () => {
  return ( 
      <DataGrid
        disableColumnSelector
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: PAGE_SIZE, page: 0 },
          },
        }}
        pageSizeOptions={[PAGE_SIZE]}
        rows={People}
        columns={COLUMNS}
        getRowId={(row) => row.id} 
        onCellClick={
          (params) => {
            console.log(params.row.id);
          } 
        }   
        disableRowSelectionOnClick
        /> 
  );
};
export default Home;
