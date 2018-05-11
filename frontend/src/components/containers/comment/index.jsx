import React, { Component } from 'react'
import CommentService from './comment.service'
import CommentItem from './comment.item'

class Comment extends Component {

    constructor (props) {
        super (props)
        this.state = {
            commentList: []
        }
    }
    
    componentWillMount () {        
        this.setState(Object.assign({}, this.state, {commentList: CommentService}))
    }

    render () {
        var commentList = this.state.commentList
        console.log(commentList)
        return (
            <div className="ui threaded comments">
                <h3 className="ui dividing header">Comments</h3>  
                {commentList.map((item) => {
                    return <CommentItem key={item._id} data={item}/>
                })}                              
                <form className="ui reply form">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i> Add Reply
                    </div>
                </form>
            </div>
        )
    }
}

export default Comment;