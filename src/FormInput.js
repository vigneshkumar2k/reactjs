function FormInput({handleChange, formInputData, handleSubmit}){
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
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
        </div>
    
        
     
      
    )
    }
    
    export default FormInput;