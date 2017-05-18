import React, {Component} from 'react' ;
import CommentBox from './CommentBox.jsx' ;
import CommentList from './CommentList.jsx' ;

class App extends Component {
    render(){
        return (
            <div className="app">
                <CommentBox />
                <CommentList />
            </div>
        );
    }
}

export default App ;
