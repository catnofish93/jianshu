import React,{Component} from "react"
import logo from '../../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'
import phoneImg from '../../static/signIN/sign_in_bg-bbc515a9c2e7734807ea281b9b2ab380.png'
import code from "../../static/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
import './signIn.scss'
import { Input, Checkbox, Button, Divider } from 'antd';
import { UserOutlined, KeyOutlined, WeiboCircleOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
class SignIn extends Component {
    constructor() {
      super();
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
                  <img src={code} alt="图片丢失" className='code' />
                </div>
              </div>
              <div className='submitForm'>
                <div className={'tab'}>
                  <div className={'text'}>登录</div>
                  <div className={'dian'}>.</div>
                  <div className={'text'}>注册</div>
                </div>
                <div className={'submitInfo'}>
                  <div className='cell'>
                    <Input placeholder='手机号或邮箱' prefix={<UserOutlined />} />
                  </div>
                  <div className='cell'>
                    <Input placeholder='密码' prefix={<KeyOutlined />} />
                  </div>
                </div>
                <div className={'loginProblem'}>
                  <Checkbox>记住我</Checkbox>
                  <div>登录遇到问题？</div>
                </div>
                <Button type="primary" className='loginButton' style={{borderRadius: '20px',margin: '10px auto'}}>登录</Button>
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