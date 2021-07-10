import styles from './index.module.scss'
import { Menu } from 'antd';
import { BellOutlined, ReadOutlined } from '@ant-design/icons';
import React from 'react'
import imgSrc from '../../static/paid-content-6f5f218ca8590aa726791acab7b37951.png'
class ColloectArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'read'
    }
  }
  menuClick() {
    console.log('11')
  }
  render() {
    return (
      <div className={styles.wrap}>
        <img src={imgSrc} className={styles.img} />
        <Menu mode="horizontal" onClick={this.menuClick.bind(this)} selectedKeys={[this.state.current]}>
          <Menu.Item key="read" icon={<ReadOutlined />}>
            文章
          </Menu.Item>
          <Menu.Item key="bell" icon={<BellOutlined />}>
            连载
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default ColloectArticle
