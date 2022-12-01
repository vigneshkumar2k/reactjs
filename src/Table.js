import React from "react";
function Table({tableData,setTableData,setformInputData,setShow,setEdit}){
    
    const deleteData=(index)=>{
        console.log(index);
        const newtable=tableData.filter(e=>index)
        newtable.splice (index,1)
        setTableData(newtable)
    }
    const editData=(index)=>{
        setformInputData(tableData[index]);
        setShow(true);
        setEdit(index);
    }
    
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>password</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.password}</td>
                            <td><button onClick={()=>{editData(index)}}>edit</button></td>
                            <td><button onClick={()=>{deleteData(e=>index)}}>delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table;