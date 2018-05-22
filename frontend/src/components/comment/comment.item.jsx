import React, { Component } from 'react'

class CommentItem extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let dataItem = this.props.data
        return (
            <div className="comment">
                <a className="avatar">
                    <img alt="" src={dataItem.avatar} />
                </a>
                <div className="content">
                    <a className="author">{dataItem.name}</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        {dataItem.content}
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
