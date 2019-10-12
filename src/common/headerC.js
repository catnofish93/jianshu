import React,{Component} from "react"
import {connect} from "react-redux"
import {
    HeaderWrap,
    HeaderTitle,
    HeaderMenu,
    HeaderPerson
  } from "./header.js"
class HeaderC extends Component{
    constructor(props){
        console.log(props)
        super(props);
        console.log(props)
    }
    render(){
        return (
            <HeaderWrap>
                <HeaderTitle/>
                <HeaderMenu>
                <div className="home">首页</div>
                <div className="download">下载App</div>
                <input className="search" onFocus={this.props.handerFocus} onBlur={this.props.handerBlur}></input>
                <span className="iconfont loupe">&#xe624;</span>
                {this.props.focused===true?<div className="search_panel">热门搜索</div>:""}
                </HeaderMenu>
                <HeaderPerson>
                <span className="iconfont">&#xe636;</span>
                <span className="iconfont">&#xe728;</span>
                <span className="iconfont">&#xe64c;</span>
                <div>登录</div>
                <div>注册</div>
                <div>{this.props.focused}</div>
                </HeaderPerson>
            </HeaderWrap>
        )
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