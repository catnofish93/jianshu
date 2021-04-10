import React,{Component} from "react"
import logo from '../../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
import phoneImg from '../../static/signIN/sign_in_bg-bbc515a9c2e7734807ea281b9b2ab380.png'
import code from "../../static/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
import './signIn.scss'
import { Input, Checkbox, Button, Divider, Popover, Dropdown, Menu } from 'antd';
import { UserOutlined, KeyOutlined, WeiboCircleOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
const content = (
    <img src={code} alt={'图片丢失'} />
)
const loginProblem = (
    <Menu>
      <Menu.Item>用手机号重置密码</Menu.Item>
      <Menu.Item>用邮箱重置密码</Menu.Item>
      <Menu.Item>无法用海外手机号登录</Menu.Item>
      <Menu.Item>无法用google账号登录</Menu.Item>
    </Menu>
)
class SignIn extends Component {
    constructor() {
      super();
      document.title = '登录-简书'
      this.state={
        formType: 'login',
      }
    }
    swichForm(type) {
      this.setState({
        formType: type
      })
    }
    login() {
      this.props.router.push('/view/list')
    }
    render() {
      return (
          <div>
            <div className='logo'>
              <img src={logo} alt="图片丢失" className='logo' />
            </div>
            <div className='content'>
              <div className='appDownload'>
                <img src={phoneImg}  alt="图片丢失" className='phoneImg' />
                <div className='downWrap'>
                  <div className='downApp'>下载APP</div>
                  <Popover content = {content}>
                    <img src={code} alt="图片丢失" className='code' />
                  </Popover>
                </div>
              </div>
              <div className='submitForm'>
                <div className={'tab'}>
                  <div className={`text ${this.state.formType === 'login'?'selected':''}`} onClick={this.swichForm.bind(this, 'login')}>登录</div>
                  <div className={'dian'}>.</div>
                  <div className={`text ${this.state.formType === 'register'?'selected':''}`} onClick={this.swichForm.bind(this,'register')}>注册</div>
                </div>
                <div className={'submitInfo'}>
                  {
                    this.state.formType === 'login' ?
                        (
                            <div>
                              <div className='cell'>
                                <Input placeholder='手机号或邮箱' prefix={<UserOutlined />} />
                              </div>
                              <div className='cell'>
                                <Input placeholder='密码' prefix={<KeyOutlined />} type={'password'} />
                              </div>
                            </div>

                        ):
                        (
                            <div>
                              <div className='cell'>
                              <Input placeholder='您的昵称' prefix={<UserOutlined />} />
                              </div>
                              <div className='cell'>
                              <Input placeholder='手机号' prefix={<UserOutlined />} />
                              </div>
                              <div className='cell'>
                              <Input placeholder='设置密码' prefix={<KeyOutlined />} type={'password'} />
                              </div>
                          </div>
                        )
                  }

                </div>
                <div className={'loginProblem'}>
                  <Checkbox>记住我</Checkbox>
                  <Dropdown overlay={loginProblem}>
                    <div>登录遇到问题？</div>
                  </Dropdown>
                </div>
                <Button type="primary" className='loginButton' style={{borderRadius: '20px',margin: '10px'}} onClick={this.login.bind(this)}>登录</Button>
                <Divider>社交账号登录</Divider>
                <div className='social'>
                  <WeiboCircleOutlined className={'socialIcon'} style={{color: '#e05244'}} />
                  <WechatOutlined className={'socialIcon'} style={{color: '#00bb29'}} />
                  <QqOutlined className={'socialIcon'} style={{color: '#498ad5'}} />
                </div>
              </div>
            </div>
          </div>
      )
    }
}
export default SignIn