import React, {Component} from 'react' ;
import {connect} from 'react-redux' ;
import {saveComment} from './../actions/comments.js'
import * as actions from './../actions/comments.js' ;

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

        this.props.saveComment(this.state.comment);
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

// don't forget that the actionCreator that passed in component need to wrap in an object！！
// export default connect(null, {saveComment})(CommentBox) ;
// or just passed in whole object that using wildcard to import
export default connect(null, actions)(CommentBox) ;