import React, { Component } from 'react'
import CommentService from './comment.service'
import CommentItem from './comment.item'

// CommentService.listing(data => {
//     data.then(function(e) {
//         console.log('data: ', e)
//     })    
// })

CommentService.listing(data => {
    console.log('data: ', data)   
})

class Comment extends Component {

    constructor (props) {
        super (props)
        this.state = {
            commentList: []
        }
    }
    
    componentWillMount () {        
        this.setState(Object.assign({}, this.state, {commentList: []}))
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