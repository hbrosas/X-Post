// Create Login Component
class LoginComponent extends React.Component {
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
	        // return (
	        //     <Redirect to="/dashboard" />
	        // );
	    }
			return (
				<div className="card card-container">
					<h2 className='login_title text-center'>
						<span className="pull-left">LOG IN</span>
						<span className="pull-right backbtn" id="back">Back</span>
					</h2>
					<hr className="top-hr"></hr>
					<form onSubmit={this._handleSubmit.bind(this)}>
						<p className="input_title">Username</p>
						<input type="text" id="inputUsername" className="login_box" required
							ref="username"/>
						<br></br>
						<p className="input_title">Password</p>
						<input type="password" id="inputPassword" className="login_box" required
							ref="password"/>
						<br></br>
						<div className="errorLoginMsg invisible" id="error" role="alert">Login Error. Invalid Username/Password</div>
						<br></br>
						<button className="btn btn-small submitbtn" id = "btnLogIn" type="submit">LOG IN</button>
					</form>
				</div>
			);
	}

	_handleSubmit(e) {
        e.preventDefault();
				var username = this.refs.username.value;
				var password = this.refs.password.value;
        let session = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
				console.log("Username: " + username + " Password: " + password);
        $.ajax({
            type: "POST",
            url: "/session",
            data: session
        }).done((res, status, xhr) => {
            sessionStorage.setItem("token", xhr.getResponseHeader("Authorization"));
            this.setState({ redirect: true });
        }).fail((xhr) => {
            if(xhr.status == 401) {
                this._showLoginError("Invalid name or password.");
            }
        });
    }

    _showLoginError(error) {
        this.setState({
            message: error
        });

        let loginAlert = $("#error");
        if(loginAlert.hasClass("invisible")) {
            loginAlert.removeClass("invisible");
        }
    }
}

ReactDOM.render(<LoginComponent />, document.getElementById("login-cont"));
