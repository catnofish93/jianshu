import React,{Component} from "react"
import {connect} from "react-redux"
import "./header.css"
import axios from "axios"
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
                <div className="search_wrap">
                    <input className={[this.props.focused?'search search_focus':'search']} onFocus={this.props.handerFocus} onBlur={this.props.handerBlur} ></input>
                    <span className={this.props.focused?'iconfont loupe graybc':'iconfont loupe'}>&#xe624;</span>
                    {this.props.focused===false?<div className="search_panel">
                        <span>热门搜索</span>
                        <div className="change_red"><span className="iconfont">&#xe6e1;</span>换一批</div>
                        <div>{this.getRedList()}</div>
                    </div>:""}
                </div>
                </HeaderMenu>
                <HeaderPerson>
                <span className="iconfont Aa">&#xe636;</span>
                <span className="iconfont diamond">&#xe728;</span>
                <span className="iconfont beta">&#xe64c;</span>
                <div className="login">登录</div>
                <div className="register">注册</div>
                <div className="writer"><span className="iconfont">&#xe96a;</span>写文章</div>
                </HeaderPerson>
            </HeaderWrap>
        )
    }
    getRedList(){
        axios.get("json/red_data.json").then(res=>{
            let redData=res.data.data;
            console.log(redData)
            return redData.map(item=>{
                return <span className="red_item">{item}</span>
            })
        }).catch(err=>{

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