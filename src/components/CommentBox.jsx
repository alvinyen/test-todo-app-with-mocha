import React, {Component} from 'react' ;

class CommentBox extends Component {
    constructor(props){
        super(props) ;

        this.state = { comment: ''};
    }

    handleChange = (e) => {
        this.setState({ comment: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ comment: ''});
    }

    render(){
        return (
            <form 
                className="comment-box"
                onSubmit={this.handleSubmit} >
                <textarea 
                    value={this.state.comment}
                    onChange={this.handleChange} />
                <button action="submit">submit</button>
            </form>
        );
    }
}

export default CommentBox ;