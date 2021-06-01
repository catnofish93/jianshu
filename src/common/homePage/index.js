import React,{Component} from "react"
import {connect} from "react-redux"
import {Menu} from 'antd'
import { ReadOutlined, BellOutlined, CommentOutlined, FireOutlined } from '@ant-design/icons';
import './index.css'
class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      current: 'read'
    }
  }
  componentDidMount() {
    document.title = '不爱吃鱼的猫'
  }
  menuClick(e) {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <div className={'wrap'}>
        <div style={{width: '600px'}}>
          <div style={{display: 'flex',width: '100%'}}>
            <div style={{width: '100px'}}>
              <img style={{width: '80px',height: '80px'}} />
            </div>
            <div className={'right'}>
              <div className={'name'}>不爱吃鱼的猫</div>
              <ul className={'infoList1'}>
                <li className={'item'}>
                  <div>2</div>
                  <div>关注</div>
                </li>
                <li className={'item'}>
                  <div>2</div>
                  <div>粉丝</div>
                </li>
                <li className={'item'}>
                  <div>2</div>
                  <div>文章</div>
                </li>
                <li className={'item'}>
                  <div>2</div>
                  <div>字数</div>
                </li>
                <li className={'item'}>
                  <div>2</div>
                  <div>收藏喜欢</div>
                </li>
              </ul>
            </div>
          </div>
          <Menu mode="horizontal" onClick={this.menuClick.bind(this)} selectedKeys={[this.state.current]}>
            <Menu.Item key="read" icon={<ReadOutlined />}>
              文章
            </Menu.Item>
            <Menu.Item key="bell" icon={<BellOutlined />}>
              动态
            </Menu.Item>
            <Menu.Item key="comment" icon={<CommentOutlined />}>
              最新评论
            </Menu.Item>
            <Menu.Item key="fire" icon={<FireOutlined />}>
              热门
            </Menu.Item>
          </Menu>
          {
            this.state.current === 'read' ? (
              <div className={'articleList'}>
                <div className={'title'}>无标题的文章</div>
                <div className={'content1'}>111121212121jhgjkhjkghj</div>
                <div className={'bottom'}>
                  <div className={'item'}>
                    <span className={'iconfont'}>&#xe633;</span>
                    <span>5</span>
                  </div>
                  <div className={'item'}>
                    <span className={'iconfont'}>&#xe602;</span>
                    <span>0</span>
                  </div>
                  <div className={'item'}>
                    <span className={'iconfont'}>&#xe60a;</span>
                    <span>0</span>
                  </div>
                  <div className={'item'}>05.18 13:20</div>
                </div>
              </div>
            ): ''
          }
        </div>
      </div>
    )
  }
}
export default HomePage
