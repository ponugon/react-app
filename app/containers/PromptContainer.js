var React = require('react');
var PropTypes = React.propTypes;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

	propTypes: {
		header:PropTypes.string.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		onUpdateUser: PropTypes.func.isRequired,
		username: PropTypes.string.isRequired
	},

	getInitialState: function(){
		return {
			username: ''
		}
	},

	handleUpdateUser: function(e) {
		this.setState({
			username: e.target.value
		});
	},

	handleSubmitUser: function(e){
		 e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
},

	render:function(){

		return(
			<Prompt onSubmitUser={this.handleSubmitUser}
					onUpdateUser={this.handleUpdateUser}
					header={this.props.route.header}
					username={this.state.username}/>
			)
	}
});

module.exports = PromptContainer;