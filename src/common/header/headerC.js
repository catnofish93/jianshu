import React,{Component} from "react"
import {connect} from "react-redux"
import "./header.css"
import axios from "axios"
import logo from '../../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
import Comment from '../comment'
class HeaderC extends Component{
    constructor(props){
        super(props);
        this.state = {
            filerArray: [],
            transition: false
        }
    }
    componentWillMount() {
        this.getRedList()
    }
    render(){
        return (
            <div>
                <div className='HeaderWrap'>
                    <img src={logo} className='HeaderTitle' alt='图片丢失' />
                    <div className='HeaderMenu'>
                        <div className="home">首页</div>
                        <div className="download">下载App</div>
                        <div className="search_wrap">
                            <input className={[this.props.focused?'search search_focus':'search']} onFocus={this.props.handerFocus} onBlur={this.props.handerBlur} ></input>
                            <span className={this.props.focused?'iconfont loupe graybc':'iconfont loupe'}>&#xe624;</span>
                            {this.props.focused===true?<div className="search_panel">
                                <span>热门搜索</span>
                                <div className={["change_red ", this.state.transition?'transition':''].join(' ')} onClick={this.getRedList.bind(this)}><span className="iconfont">&#xe6e1;</span>换一批</div>
                                <div>{this.state.filerArray}</div>
                            </div>:""}
                        </div>
                    </div>
                    <div className='HeaderPerson'>
                        <span className="iconfont Aa">&#xe636;</span>
                        <span className="iconfont diamond">&#xe728;</span>
                        <span className="iconfont beta">&#xe64c;</span>
                        <div className="login">登录</div>
                        <div className="register">注册</div>
                        <div className="writer"><span className="iconfont">&#xe96a;</span>写文章</div>
                    </div>
                </div>
                {this.props.children}
                <Comment></Comment>
            </div>

        )
    }
    async getRedList(){
        this.setState({
            transition: true
        })
        setTimeout(()=>{
            this.setState({
                transition: false
            })
        }, 1000)
        let res = await axios.get("json/red_data.json")
        let redData = res.data.data;
        let index = Math.floor(Math.random() * redData.length)
        this.setState({
            filerArray: redData.slice(index, index + 5).map((item, index)=>{
                return <span className="red_item" key={index}>{item}</span>
            })
        })
    }
}
const mapStateToProps=(state)=>{
    return {
        focused:state.focused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handerFocus(){
            let actions={
                type:"search_focus"
            }
            dispatch(actions)
        },
        handerBlur(){
            let actions={
                type:"search_blur"
            }
            dispatch(actions)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderC);