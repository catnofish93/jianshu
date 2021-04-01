import React, {Component} from 'react'
import './index.scss'
class Comment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        }
        this.inputFocus = this.inputFocus.bind(this)
    }
    render() {
        return (
            <div className='footer' style={{height: this.state.focus?'104px':'80px'}}>
                <input placeholder='写下你的评论...' onFocus={this.inputFocus} style={{height: this.state.focus?'60px':'36px'}} />
                {
                    this.state.focus?
                        (
                            <div>1111</div>
                        ):
                        <div className='commentWrap'>
                            <div className='comment'>评论</div>
                            <div className='zan'>赞</div>
                            <div className='more'>...</div>
                        </div>
                }
            </div>
        )
    }
    inputFocus() {
        this.setState({
            focus: true
        })
        console.log(this)
    }
}
export default Comment