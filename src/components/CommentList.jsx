import React, {Component} from 'react' ;
import {connect} from 'react-redux' ;

const CommentList = (props) => {
    const list = props.comments.map( (comment, index) => (
        <li key={index}>{comment}</li>
    ) );
    return (<ul className="comment-list">{list}</ul>);
}

export default connect( ({comments}) => ({
    comments
}) )(CommentList) ;