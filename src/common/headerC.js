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
                <input className="search"></input>
                <div className="search_panel">aaa</div>
                </HeaderMenu>
                <HeaderPerson>
                <div>aaa</div>
                <div>beta</div>
                <div>登录</div>
                <div>注册</div>
                <div>{this.props.focused}</div>
                </HeaderPerson>
            </HeaderWrap>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {
        focused:state.focused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderC);
// export default HeaderC;