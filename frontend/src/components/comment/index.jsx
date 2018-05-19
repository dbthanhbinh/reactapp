import React, { Component } from 'react'
import CommentService from './comment.service'
import CommentItem from './comment.item'

class Comment extends Component {

    constructor (props) {
        super (props)
        this.hanldFormSubmit = this.hanldFormSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            commentList: [],
            formEdit: {
                email: '',
                content: ''
            }
        }
    }

    hanldFormSubmitCallback = (e) => {        
        CommentService.listing ((data) => {
            let callbackData = {
                commentList: data.dataResult,
                formEdit: {
                    email: '', // reset value
                    content: '' // reset value
                }
            }
            this.setState(Object.assign({}, this.state, callbackData))            
        })
    }

    hanldFormSubmit = (e) => {        
        e.preventDefault();
        const { email, content } = this.state.formEdit
        let data = {
            email: email,
            content: content
        }
        CommentService.create(data, this.hanldFormSubmitCallback)        
    }

    handleChange = (e) => {        
        const state = this.state.formEdit
        state[e.target.name] = e.target.value
        this.setState(Object.assign({}, this.state, state))
    }

    componentWillMount () {       
        CommentService.listing ((e) => {
            this.setState(Object.assign({}, this.state, {commentList: e.dataResult}))            
        })
    }

    render () {
        var commentList = this.state.commentList        
        let { email, content } = this.state.formEdit
        return (
            <div className="ui threaded comments">
                <h3 className="ui dividing header">Comments</h3>  
                {commentList.map((item) => {
                    return <CommentItem key={item._id} data={item}/>
                })}                              
                <form className="ui reply form" onSubmit = {this.hanldFormSubmit}>
                    <div className="field">
                        <input type="text" name="email"  placeholder="Enter email.." value={email} onChange={this.handleChange} />                    
                    </div>
                    <div className="field">                        
                        <textarea name="content" placeholder="Enter comment.." value={content} onChange={this.handleChange} />
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i> <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Comment;