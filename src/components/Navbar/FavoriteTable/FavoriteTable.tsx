import { Person } from "@/models";
import { removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

const PAGE_SIZE = 5;

export const FavoriteTable = () => {
   const dispatch = useDispatch();
   const stateFavorites = useSelector((state: AppStore) => state.favorites);
  //  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  //  const findPerson = (person: Person) => !!selectedPeople.find((p) => p.id === person.id);
  //  const filterPerson = (person: Person) => selectedPeople.filter((p) => p.id !== person.id);
   const handleClick = (person: Person) => { 
    //  const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    //   dispatch(removeFavorite(filteredPeople[0]));
    //   setSelectedPeople(filteredPeople);
    dispatch(removeFavorite(person));
   };

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
              <Button 
                onClick={() => handleClick(params.row)}
              >
                <DeleteIcon />
              </Button>
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
       rows={stateFavorites}
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
}