import { useState } from "react";
import { People } from "@/data/people";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
 
import { Checkbox } from "@mui/material";
import { Person } from "@/models";

/*<>{params.value + params.row.category}</>; Can use this form to manipulate 2 or more data row in one cell*/
const Home = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const PAGE_SIZE = 5;

  const findPerson = (person: Person) => !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) => selectedPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    setSelectedPeople( findPerson(person) ? filterPerson(person) : [...selectedPeople, person] );
  };

  const columns = [
    {
      field: "actions",
      sortable: false,
      type:'actions',
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (<>{<Checkbox size="small" checked={findPerson(params.row)} onChange={(e) => handleChange(params.row)}/> } </>),
    },
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
      columns={columns}
      getRowId={(row) => row.id}
      disableRowSelectionOnClick
    />
  );
};
export default Home;
