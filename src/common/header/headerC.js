import React,{Component} from "react"
import {connect} from "react-redux"
import "./header.css"
import axios from "axios"
import logo from '../../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
import {Dropdown, Menu, Popover} from 'antd'
import { DownOutlined } from '@ant-design/icons';
import SwitchStatus from '../../components/switch/switch'
class HeaderC extends Component{
    constructor(props){
        super(props);
        this.state = {
            filerArray: [],
            transition: false,
            goTopShow: false,
            domHeight: document.body.clientHeight - 58,
            modelIndex: 0
        }
        this.state.menu = <Menu>
            <Menu.Item className={'menu'} onClick={this.goHomePage.bind(this)}>
                <span className={'iconfont'}> &#xe7d8;</span>
                我的主页
            </Menu.Item>
            <Menu.Item className={'menu'}>
                <span className={'iconfont'}>&#xe60a;</span>
                收藏的文章
            </Menu.Item>
            <Menu.Item className={'menu'}>
                <span className={'iconfont'}>&#xe60a;</span>
                我的主页
            </Menu.Item>
            <Menu.Item className={'menu'}>
                <span className={'iconfont'}>&#xe68c;</span>
                喜欢的文章
            </Menu.Item>
            <Menu.Item className={'menu'}>
                <span className={'iconfont'}>&#xe6cf;</span>
                已购内容
            </Menu.Item>
            <Menu.Item className={'menu'}>
                <span className={'iconfont'}>&#xe603;</span>
                我的钱包
            </Menu.Item>
            <Menu.Item className={'menu'}>
                <span className={'iconfont'}>&#xe68d;</span>
                设置
            </Menu.Item>
            <Menu.Item className={'menu'}>
                <span className={'iconfont'}>&#xe60d;</span>
                帮助与反馈
            </Menu.Item>
            <Menu.Item className={'menu'} onClick={this.props.quit.bind(this)}>
                <span className={'iconfont'}>&#xe72e;</span>
                退出
            </Menu.Item>
        </Menu>
        this.state.content = (
          <div style={{width: '200px'}}>
              <div className={'cell'} style={{display: 'flex', alignItems: 'center'}}>
                  <div className={'night'} style={{marginRight: '15px'}}>夜间模式</div>
                  <SwitchStatus list={['开','关']} selected={this.state.modelIndex} changeModel={this.changeModel.bind(this)}></SwitchStatus>
              </div>
              <div className={'cell'}>
                  <SwitchStatus list={['宋体','黑体']} selected={0}></SwitchStatus>
              </div>
          </div>
        );
        this.contentWrap = React.createRef()
    }
    componentWillMount() {
        // this.getRedList()
    }
    goHomePage() {
        this.props.router.push('/pageHome')
    }
    changeModel() {
        console.log(this.state.modelIndex)
        this.setState({
            modelIndex: this.state.modelIndex === 1?0:1
        })
    }
    render(){
        return (
            <div>
                <div className='HeaderWrap'>
                    <img src={logo} className='HeaderTitle' alt='图片丢失' />
                    <div className='HeaderMenu'>
                        <div className="home" onClick={this.goHome.bind(this)}>首页</div>
                        <div className="download">下载App</div>
                        <div className="search_wrap">
                            <input className={[this.props.focused?'search search_focus':'search']} onFocus={this.props.handerFocus} onBlur={!this.state.transition?this.props.handerBlur:''} ></input>
                            <span className={this.props.focused?'iconfont loupe graybc':'iconfont loupe'}>&#xe624;</span>
                            {this.props.focused===true?<div className="search_panel">
                                <span>热门搜索</span>
                                <div className={["change_red ", this.state.transition?'transition':''].join(' ')} onClick={e=>{this.getRedList(e)}}><span className="iconfont">&#xe6e1;</span>换一批</div>
                                <div>{this.state.filerArray}</div>
                            </div>:""}
                        </div>
                    </div>
                    <div className='HeaderPerson'>
                        <Popover placement="bottomRight" title={''} content={this.state.content} trigger="click">
                            <span className="iconfont Aa">&#xe636;</span>
                        </Popover>
                        <span className="iconfont diamond">&#xe728;</span>
                        <span className="iconfont beta">&#xe64c;</span>
                        {
                            this.props.user.id
                                ? <Dropdown overlay = {this.state.menu} className={'dropdown'}>
                                    <div>
                                        <img src={this.props.user.img} alt={'图片丢失'} /><DownOutlined />
                                    </div>
                                  </Dropdown>
                                :<div className="login" onClick={this.toLogin.bind(this)}>登录</div>
                        }
                        {
                            this.props.user.id
                            ?'' :<div className="register" onClick={this.toLogin.bind(this)}>注册</div>
                        }
                        <div className="writer"><span className="iconfont">&#xe96a;</span>写文章</div>
                    </div>
                </div>
                <div ref={this.contentWrap} className='contentWrap' style={{height: this.state.domHeight + 'px'}} onScroll={this.contentScroll.bind(this)}>{this.props.children}</div>
                {
                    this.state.goTopShow ?
                      <div className={'goTop'} onClick={this.goTop.bind(this)}>
                          <span className={'iconfont'}>&#xe66d;</span>
                      </div>
                      : ''
                }
            </div>

        )
    }
    contentScroll(e) {
        if (e.currentTarget.scrollTop === 0) {
            this.setState({
                goTopShow: false
            })
        } else {
            this.setState({
                goTopShow: true
            })
        }
    }
    goTop(e) {
        this.contentWrap.current.scrollTop = 0
    }
    goHome() {
        this.props.router.replace('/view/list')
    }
    async getRedList(e){
        this.setState({
            transition: true
        })
        setTimeout(()=>{
            this.setState({
                transition: false,

            })
        }, 1000)
        let res = await axios.get("json/red_data.json")
        let redData = res.data.data;
        let index = Math.floor(Math.random() * redData.length)
        this.setState({
            filerArray: redData.slice(index, index + 5).map((item, index)=>{
                return <span className="red_item" key={index}>{item}</span>
            }),
            focused: true
        })
    }
    toLogin() {
        this.props.router.replace('/signIn')
    }
}
const mapStateToProps=(state)=>{
    return {
        focused:state.reducer.focused,
        user: state.user
    }
}
const mapDispatchToProps=(dispatch, ownProps)=>{
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
        },
        quit() {
            let actions={
                type: "user",
                user: {
                }
            }
            dispatch(actions)
            this.props.router.replace('/signIn')
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderC);
