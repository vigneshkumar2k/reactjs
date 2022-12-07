import React, { useState } from "react";
import Table from "./Table";
import FormInput from "./FormInput";

const Register = () => {
  const [tableData, setTableData] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState();
  const [formInputData, setformInputData] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
  });
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { fullName: "", emailAddress: "", password: "" };
      setformInputData(emptyInput);
    }
  };
  const update = () => {
    tableData.splice(edit, 1, formInputData);
    setTableData([...tableData]);
    setformInputData({
      fullName: "",
      emailAddress: "",
      password: "",
    });
    setShow(false);
    formInputData("");
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
              show={show}
              update={update}
            />
            <Table
              tableData={tableData}
              setTableData={setTableData}
              setformInputData={setformInputData}
              setEdit={setEdit}
              setShow={setShow}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
