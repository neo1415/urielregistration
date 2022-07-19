import React,{useEffect,useState} from 'react'
import { collection, getDocs, deleteDoc,doc, } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from './contactTableSource';
import { db } from '../../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import './contact.scss'

const ContactExec = () => {

    const navigate = useNavigate()

    const [data, setData] = useState([]);

    useEffect(()=> {
        const fetchData = async () =>{
          let list =[]
          try{
            const querySnapshot = await getDocs(collection(db,'Exec-Registration'));
            querySnapshot.forEach((doc)=>{
              list.push({id: doc.id, ...doc.data()})
              console.log(doc.id, "=>", doc.data());
            })
            setData(list)
            console.log(list)
          } catch(err){
            console.log(err)
          }
        }
        fetchData()
      },[])
      console.log(data)
    
      const handleView = async (id) => {
        navigate('/adminHome/' + id)
      };

      const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "Exec-Registration", id));
          setData(data.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      };
      const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                {/* <Link to="adminHome/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link> */}
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
            <div
              className="viewButton"
              onClick={() => handleView(params.row.id)}
            >
              View
            </div>
              </div>
            );
          },
        },
      ];
      return (
        <div className="datatable">
          <div className="datatableTitle">
            Executive Path
            {/* <Link to="/adminHome/new" className="link">
              Add New
            </Link> */}
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      );
}

export default ContactExec