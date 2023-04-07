import { People } from "@/data/people";
import { addPeople } from "@/redux/states";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PeopleTable } from "./components";
 
 
/*<>{params.value + params.row.category}</>; Can use this form to manipulate 2 or more data row in one cell*/
const Home = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( addPeople(People));
  }, []);

  return <PeopleTable /> 
};
export default Home;
