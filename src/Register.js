import React, { useState } from "react";
import Table from "./Table";

const Register = () => {
    const [tableData, setTableData] = useState([])
    const [show,setShow]= useState(false)
    const [edit,setEdit]= useState()
    const [formInputData, setformInputData] = useState(
        {
            fullName: '',
            emailAddress: '',
            password: ''
        }
    );
    const handleChange = (evnt) => {
        const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);
            const emptyInput = { fullName: '', emailAddress: '', password: '' }
            setformInputData(emptyInput)
        }
    }
    const update=()=>{
        tableData.splice(edit,1,formInputData)
        setTableData([...tableData])
        setformInputData({
            fullName: '',
            emailAddress: '',
            password: ''
        })
        setShow(false);
        formInputData("")
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} show={show} update={update}/>
                        <Table tableData={tableData} setTableData={setTableData} setformInputData={setformInputData} setEdit={setEdit} setShow={setShow}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
function FormInput({handleChange, formInputData, handleSubmit,show,update}){
    return(
        <div>
            <h1>RegistrationForm</h1>
        <div className="form">
          <div className="col">
          <label className="form__label">fullName </label>
            <input type="text"class="form_input" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
          </div>
          <div className="col">
          <label className="form__label">email</label>
            <input type="email" class="form_input"  onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
          </div>
          <div className="col">
          <label className="form__label" for="lastName">password </label>
            <input type="text" class="form_input" onChange={handleChange} value={formInputData.password} name="password" className="form-control" placeholder="password" />
          </div>
          <div className="col">
            {!show ? <input type="button" value="submit" onClick={handleSubmit} className="btn btn-primary" />:<input type="submit" onClick={update} value="update" className="btn btn-primary" />}
          </div>
        </div>
        </div>
    
        
     
      
    )
    }

export default Register


