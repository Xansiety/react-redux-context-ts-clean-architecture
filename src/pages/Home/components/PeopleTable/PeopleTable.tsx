import { Person } from "@/models";
import { addFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

export interface PeopleTableProps {}

const PAGE_SIZE = 5;

export const PeopleTable = () => {
  const dispatch = useDispatch();
  const statePeople = useSelector((state: AppStore) => state.people);
  const stateFavorites = useSelector((state: AppStore) => state.favorites);

  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const findPerson = (person: Person) => !!stateFavorites.find((p) => p.id === person.id);
  const filterPerson = (person: Person) => stateFavorites.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => { 
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  useEffect(() => {
    setSelectedPeople(stateFavorites);
  }, [stateFavorites]);

  const columns = [
    {
      field: "actions",
      sortable: false,
      type: "actions",
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={(e) => handleChange(params.row)}
            />
          }
        </>
      ),
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
    {
      field: "levelOfHappiness",
      headerName: "Level of happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={statePeople}
      columns={columns}
      disableColumnSelector
      autoHeight
      initialState={{
        pagination: {
          paginationModel: { pageSize: PAGE_SIZE, page: 0 },
        },
      }}
      pageSizeOptions={[PAGE_SIZE]}
      
      getRowId={(row) => row.id}
      disableRowSelectionOnClick
    />
  );
};
