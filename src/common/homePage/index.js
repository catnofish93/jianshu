import React,{Component} from "react"
import {connect} from "react-redux"
import {Menu} from 'antd'
import { MailOutlined } from '@ant-design/icons';
class HomePage extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = '不爱吃鱼的猫'
  }

  render() {
    return (
      <div>
        <div>
          <div className={'left'}></div>
          <div className={'right'}>
            <div>不爱吃鱼的猫</div>
            <ul>
              <li>
                <div>2</div>
                <div>关注</div>
              </li>
              <li>
                <div>2</div>
                <div>粉丝</div>
              </li>
              <li>
                <div>2</div>
                <div>文章</div>
              </li>
              <li>
                <div>2</div>
                <div>字数</div>
              </li>
              <li>
                <div>2</div>
                <div>收藏喜欢</div>
              </li>
            </ul>
          </div>
        </div>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            文章
          </Menu.Item>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            动态
          </Menu.Item>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            最新评论
          </Menu.Item>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            热门
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default HomePage
