import "./UserList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer, getCustomers } from "../../redux/apiCalls";

export default function UserList() {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customer?.customers);
    console.log(customers)
    useEffect(() => {
        getCustomers(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteCustomer(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            className="userListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={customers}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                getRowId={(row) => row._id}
                checkboxSelection
            />
        </div>
    );
}