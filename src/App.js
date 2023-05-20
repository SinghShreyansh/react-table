// import logo from './logo.svg';
import './App.css';
import { useEffect ,useState} from 'react';
import TabComponent from './components/TabComponent';
import TableComponent from './components/TableComponent';
import {  QueryClient, QueryClientProvider,useQuery } from 'react-query';
import axios from 'axios';


function App() {
  const queryClient = new QueryClient();
  const [data,setData] = useState([]);

  // const fetchJSONData = async () => {
  //   const response = await fetch(' http://localhost:3000/user');
  //   // const data = await response.json();
  //   console.log(response);
  //   return [...data];
  // };

  useEffect(() =>{
      const getFetchRequest = async()=>{
        const data = await axios.get(`http://localhost:3000/user`);
        console.log([...data.data,...data.data]);
        setData([...data.data,...data.data,...data.data,...data.data,...data.data,...data.data,...data.data,...data.data,...data.data]);
      }

      getFetchRequest();
  },[])


  const getData = async()=>{
    const data = await axios.get(`http://localhost:3000/user`);
    console.log([...data.data,...data.data]);
    setData([...data.data,...data.data,...data.data,...data.data,...data.data,...data.data,...data.data,...data.data,...data.data]);
  }

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
     <h1 className="mx-5 my-4 text-3xl text-left font-bold">
      Company Settings
    </h1>
    {data.length!==0 && <>
      <TabComponent/>
     <TableComponent fetchdata={data}/>
    </>}

    </div>
    </QueryClientProvider>
  );
}

export default App;
