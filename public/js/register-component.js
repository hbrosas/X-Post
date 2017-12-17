// Create Register Component
class RegisterComponent extends React.Component {
	constructor() {
        super();
        this.state ={
            message: "",
            redirect: false
        }
    }

	render() {
			if(this.state.redirect) {
	        window.location.href="/dashboard";
	    }
			return (
				<div className="card card-container">
					<h2 className='login_title text-center'>
						<span className="pull-left">SIGN UP </span>
						<span className="pull-right backbtn" id="back">Back</span>
					</h2>
					<hr className="top-hr"/>
					<form className="form-request-acct" onSubmit={this._handleSubmit.bind(this)}>
            <div className = "row">
              <div className="form-group col-xs-6">
                <input type="text" ref="firstname" id="inputFirstName" className="col md-6 login_box" placeholder="First Name" required/>
              </div>
              <div className="form-group col-xs-6">
                <input type="text" ref="lastname" id="inputLastName" className="col md-6 login_box" placeholder="Last Name" required/>
              </div>
            </div>

						<input type="text" ref="username" id="inputUsername1" className="login_box" placeholder="Username" required/><br/>
						<input type="email" ref="email" id="inputEmail" className="login_box" placeholder="Email Address" required/><br/>
						<input type="password" ref="password" id="inputPassword1" className="login_box" placeholder="Password" required/><br/>
            <input type="password" id="inputConfirmPassword" className="login_box" placeholder="Confirm Password" required/>
						<span id="passwordMatch"></span><br/>

            <div className="row">
              <div className="form-group col-xs-6">
                <input type="date"ref="birthday"  id="inputBirthday" className="col md-6 login_box" placeholder="Birthday" required/>
              </div>
              <div className="form-group col-xs-6">
                <select id = "inputGender" ref="gender" className="col md-6 login_box" placeholder="Gender"required>
                  <option value = "Male">Male</option>
                  <option value = "Female">Female</option>
                </select>
              </div>
            </div>

            <label className="checkbox-inline iagree" htmlFor="checkIAgree">
              <input type="checkbox" id="checkIAgree" value="iagree"/>
              I agree to the Terms & Conditions.
            </label>

            <button className="btn btn-small submitbtn" id="btnSignUp" type="submit">SUBMIT</button>
					</form>
				</div>
			);
	}

	_handleSubmit(e) {
        e.preventDefault();
        let useraccount = {
					firstName: this.refs.firstname.value,
					lastName: this.refs.lastname.value,
					userName: this.refs.username.value,
					emailAddress: this.refs.email.value,
					password: this.refs.password.value,
					birthday: this.refs.birthday.value,
					gender: this.refs.gender.value,
        }
        $.ajax({
            type: "POST",
            url: "/account/register",
            data: useraccount
        }).done((res, status, xhr) => {
            sessionStorage.setItem("token", xhr.getResponseHeader("Authorization"));
						console.log("Token: " + xhr.getResponseHeader("Authorization"));
            this.setState({ redirect: true });
        }).fail((xhr) => {
            if(xhr.status == 401) {
                this._showRegisterError("Invalid Input.");
            }
        });
    }

    _showRegisterError(error) {
        this.setState({
            message: error
        });

        let loginAlert = $("#error");
        if(loginAlert.hasClass("invisible")) {
            loginAlert.removeClass("invisible");
        }
    }
}

ReactDOM.render(<RegisterComponent />, document.getElementById("other-cont"));
