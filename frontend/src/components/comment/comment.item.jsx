import React, { Component } from 'react'

class CommentItem extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render() {
        
        return (
            <div className="comment">
                <a className="avatar">
                    <img src={this.props.data.avatar} />
                </a>
                <div className="content">
                    <a className="author">Matt</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentItem
