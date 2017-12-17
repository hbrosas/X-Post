const Router = window.ReactRouterDOM.HashRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;
const hashHistory = window.ReactRouterDOM.hashHistory;

class HomeBox extends React.Component {
    render() {
      return (
        <Router>
					<nav className="navbar navbar-default navbar-fixed-top" id="mainNav">
						<div className="container-fluid">
							<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
											<span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span><span
													className="icon-bar"></span><span className="icon-bar"></span>
									</button>
									<a className="navbar-brand" id="brandImg" href="#">
										<img alt="X-Post" src="img/logo_nav.png" width="120" className="img-responsive"/>
									</a>
							</div>
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<ul className="nav navbar-nav">
											<li className="#"><a href="dashboard.html"><span className="glyphicon glyphicon-home"></span>Dashboard</a></li>
											<li className=""><a href="notifications.html"><span className="glyphicon glyphicon-star"></span>Notifications</a></li>
									</ul>

									<ul className="nav navbar-nav navbar-right">
											<li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown"><span
													className="glyphicon glyphicon-user"></span>Hazel Brosas <b className="caret"></b></a>
													<ul className="dropdown-menu">
															<li><a href="profile.html"><span className="glyphicon glyphicon-user"></span>Profile</a></li>
															<li className="divider"></li>
															<li><a href="index.html"><span className="glyphicon glyphicon-off"></span>Logout</a></li>
													</ul>
											</li>
									</ul>
							</div>
						</div>
					</nav>
      	</Router>
      );
    }
}

ReactDOM.render(<HomeBox />, document.getElementById("home-content"));
