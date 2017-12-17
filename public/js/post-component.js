// Create Post Component
class PostComponent extends React.Component {
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
				<form onSubmit={this._handleSubmit.bind(this)}>
						<br/>
					<div className="col-lg-12 col-md-12 col-sm-12">
						<textarea className="form-control" ref="postContent" placeholder="Dear diary" rows="4" required></textarea>
						<br/>
						<button type="submit" className="btn btn-primary pull-right btnPost">Create Post</button>
					</div>
				</form>
			);
	}

	_handleSubmit(e) {
        e.preventDefault();
        let data = {
            postContent: this.refs.postContent.value,
        }
        $.ajax({
            type: "POST",
            url: "/post/create",
            data: data
        }).done((res, status, xhr) => {
            sessionStorage.setItem("token", xhr.getResponseHeader("Authorization"));
            this.setState({ redirect: true });
        }).fail((xhr) => {
            if(xhr.status == 401) {
							//
            }
        });
    }
}

ReactDOM.render(<PostComponent />, document.getElementById("post-content"));
