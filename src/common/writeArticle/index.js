import React, {Component} from 'react'
import styles from './index.module.scss'
import { Menu } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
class WriteArtilce extends Component {
  constructor() {
    super();
    this.state = {
      editorState: ''
    }
  }
  // state = {
  //   // 创建一个空的editorState作为初始值
  //   editorState: BraftEditor.createEditorState(null)
  // }
  // submitContent = async () => {
  //   // 在编辑器获得焦点时按下ctrl+s会执行此方法
  //   // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
  //   const htmlContent = this.state.editorState.toHTML()
  //   const result = await saveEditorContent(htmlContent)
  // }
  // handleEditorChange = (editorState) => {
  //   this.setState({ editorState })
  // }
  componentDidMount () {
    // // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent()
    // // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
  }
  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.menu}>
          <div className={styles.backHome}>回首页</div>
          <Menu theme="dark">
            <Menu.Item key="1">随笔</Menu.Item>
            <Menu.Item key="2">日记本</Menu.Item>
          </Menu>
        </div>
        <div className={styles.articleList}>
          <div>新建文章</div>
        </div>
        <div className={styles.content}>
          <div className={styles.status}>
            已保存
          </div>
          <div className={styles.articleDate}>
            2021-06-07
          </div>
          <BraftEditor
            value={this.state.editorState}
            onChange={this.handleEditorChange}
            onSave={this.submitContent}
          />
        </div>
      </div>
    )
  }
}
export default WriteArtilce
