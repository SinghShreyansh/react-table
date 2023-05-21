// import logo from './logo.svg';
import './App.css';
import { useEffect ,useState} from 'react';
import TabComponent from './components/TabComponent';
import TableComponent from './components/TableComponent';
import {  QueryClient, QueryClientProvider,useQuery } from 'react-query';
import axios from 'axios';


function App() {
  const queryClient = new QueryClient();
  const [data,setData] = useState([ {
                      name: 'Jane Cooper',
                      email: 'jane.cooper@example.com',
                      title: 'Regional Paradigm Technician',
                      department: 'Optimization',
                      status: 'Active',
                      role: 'Admin',
                      age: 27,
                      lastlogin: String(new Date()),
                      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                    },
                    {
                      name: 'Cody Fisher',
                      email: 'cody.fisher@example.com',
                      title: 'Product Directives Officer',
                      department: 'Intranet',
                      status: 'Inactive',
                      role: 'Sales Leader',
                      age: 43,
                      lastlogin: String(new Date()),
                      imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                    },
                    {
                      name: 'Esther Howard',
                      email: 'esther.howard@example.com',
                      title: 'Forward Response Developer',
                      department: 'Directives',
                      status: 'Active',
                      role: 'Member',
                      age: 32,
                      lastlogin: String(new Date()),
                      imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                    },
                    {
                      name: 'Jenny Wilson',
                      email: 'jenny.wilson@example.com',
                      title: 'Central Security Manager',
                      department: 'Program',
                      status: 'Offline',
                      role: 'Sales Leader',
                      age: 29,
                      lastlogin: String(new Date()),
                      imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                    },
                    {
                      name: 'Kristin Watson',
                      email: 'kristin.watson@example.com',
                      title: 'Lean Implementation Liaison',
                      department: 'Mobility',
                      status: 'Inactive',
                      role: 'Sales Leader',
                      age: 36,
                      lastlogin: String(new Date()),
                      imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                    },
                    {
                      name: 'Cameron Williamson',
                      email: 'cameron.williamson@example.com',
                      title: 'Internal Applications Engineer',
                      department: 'Security',
                      status: 'Active',
                      role: 'Sales Leader',
                      age: 24,
                      lastlogin: String(new Date()),
                      imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
                    },]);

  // const fetchJSONData = async () => {
  //   const response = await fetch(' http://localhost:3000/user');
  //   // const data = await response.json();
  //   console.log(response);
  //   return [...data];
  // };

  useEffect(() =>{
      const getFetchRequest = async()=>{
        const fetchdata = await axios.get(`http://localhost:3000/user`);
        
        
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
