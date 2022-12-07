import React from "react";
function Table({
  tableData,
  setTableData,
  setformInputData,
  setShow,
  setEdit,
}) {
  const deleteData = (index) => {
    console.log(index);
    const newtable = tableData.filter((e) => index);
    newtable.splice(index, 1);
    setTableData(newtable);
  };
  const editData = (index) => {
    setformInputData(tableData[index]);
    setShow(true);
    setEdit(index);
  };

  return (
    <table className="table" style={{ color: "white" }}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Full Name</th>
          <th>Email Address</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.fullName}</td>
              <td>{data.emailAddress}</td>
              <td>{data.password}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    editData(index);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteData((e) => index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
