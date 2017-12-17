// Create Homefeed Component
class HomeBox extends React.Component {
	constructor() {
        super();
        this.state = {
            posts: [],
            auth: true,
            done: false
        }
    }

		componentWillMount() {
        $.ajax({
            type: "GET",
            url: "/post",
            headers: {
                "Authorization": sessionStorage.getItem("token")
            }
        }).done((posts, status, xhr) => {
            this.setState({ posts });
        }).fail((xhr) => {
            console.log(xhr.status);
            if(xhr.status == 401) {
                this.setState({
                    auth: false
                });
            }
        });

        if(!sessionStorage.getItem("token")) {
            this.setState({
                auth: false
            });
        }
    }

    render() {
      return (
				<div className="container">
					<div className="col-lg-12">
						<div className="row col-sm-12" id = "notificationsPanel">
							<div id="myTabContent" className="tab-content">
								<div className="tab-pane fade active in" id="notificationTab" role="tabpanel">
									<PostList posts={this.state.posts} />
								</div>
							</div>
						</div>
					</div>
				</div>
      );
    }
}

class PostList extends React.Component {
	render() {
        let posts = this._getPosts();
				// var statepost = this.state.posts;
				// console.log("POSTS: " + statepost[0].postContent);
        return(
            posts.map((post) =>
                    <PostCard
                        key={post._id}
                        postId={post._id}
												postContent= { post.postContent }
												createdOn= { post.createdOn } />
                )
        );
    }

    _getPosts() {
        return this.props.posts;
    }
}

class PostCard extends React.Component {
	constructor() {
        super();

        this.state = {
            refresh: false,
        }
    }

		render() {
        if(this.state.refresh) {
					window.location.href="/dashboard";
        }
        return(
					<div className="col-md-12 col-xs-12">
						<div className="panel panel-default">
							<div className="panel-body">
								<div className="row">
									<div className="col-md-10 col-xs-10" className = "notificationContent">
										<h5 className = "contentHeader">
											<input type="hidden" ref="postId" value="{this.props.postId}"/>
											<b>You</b> posted: <span className="contentDate"> {this.props.createdOn} </span>
 										</h5>
										<p className = "contentMessage">
											{this.props.postContent}
										</p>
										<ManageButton postId={this.props.postId} action={this._handleEdit.bind(this)} text="Edit" />
										<ManageButton postId={this.props.postId} action={this._handleDelete.bind(this)} text="Delete" />
									</div>
								</div>
		 					</div>
		 				</div>
		 			</div>
        );
    }

		_handleEdit(postId) {
			 console.log(postId);

			 this.setState({
					 edit: postId
			 });
	 }

	 _handleDelete(postId) {
			 console.log(postId);
			 $.ajax({
					 type: "DELETE",
					 url: `/post/${postId}`,
					 headers: {
							 "Authorization": sessionStorage.getItem("token")
					 }
			 }).done((res, status, xhr) => {
					 this.setState({
							 refresh: true
					 });
			 }).fail((xhr) => {
					 console.log(xhr.status);
			 });
	 }
}

class ManageButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
						<button type="button" className="btn btn-primary pull-right btnPost" onClick={this._handleEdit.bind(this)}>{this.props.text}</button>
        );
    }

    _handleEdit(e) {
        e.preventDefault();
        this.props.action(this.props.postId);
    }

}

ReactDOM.render(<HomeBox />, document.getElementById("home-content"));
