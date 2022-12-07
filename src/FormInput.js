function FormInput({
  handleChange,
  formInputData,
  handleSubmit,
  show,
  update,
}) {
  return (
    <div>
      <h1 style={{ color: "white" }}>RegistrationForm</h1>
      <div className="form">
        <div className="col">
          <label className="form__label">FullName </label>
          <input
            type="text"
            class="form_input"
            onChange={handleChange}
            value={formInputData.fullName}
            name="fullName"
            className="form-control"
            placeholder="Full Name"
          />
        </div>
        <div className="col">
          <label className="form__label">Email</label>
          <input
            type="email"
            class="form_input"
            onChange={handleChange}
            value={formInputData.emailAddress}
            name="emailAddress"
            className="form-control"
            placeholder="Email Address"
          />
        </div>
        <div className="col">
          <label className="form__label" for="lastName">
            Password{" "}
          </label>
          <input
            type="text"
            class="form_input"
            onChange={handleChange}
            value={formInputData.password}
            name="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="col">
          {!show ? (
            <input
              type="button"
              value="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            />
          ) : (
            <input
              type="submit"
              onClick={update}
              value="update"
              className="btn btn-primary"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default FormInput;
