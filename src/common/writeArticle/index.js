import React, {Component} from 'react'
import styles from './index.module.scss'
import { Menu } from 'antd';
import BraftEditor from 'braft-editor'
import { PlusOutlined, SettingOutlined, BarsOutlined, QuestionCircleOutlined, SnippetsOutlined } from '@ant-design/icons';
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
          <div className={styles.newCollect}><PlusOutlined />新建文集</div>
          <div className={styles.menus}>
            <div className={styles.menuItem}>
              <div>随笔</div>
              <SettingOutlined />
            </div>
            <div className={styles.menuItem}>
              <div>日记本</div>
              <SettingOutlined />
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.item}>
              <BarsOutlined />
              <div>设置</div>
            </div>
            <div className={styles.item}>
              <div>遇到问题</div>
              <QuestionCircleOutlined />
            </div>
          </div>
        </div>
        <div className={styles.articleList}>
          <div className={styles.newArticle}>
            <PlusOutlined />
            <div>新建文章</div>
          </div>
          <div className={styles.article}>
            <div className={styles.item}>
              <SnippetsOutlined />
              <div className={styles.center}>
                <div className={styles.title}>无标题文章</div>
                <div className={styles.description}>描述</div>
              </div>
              <SettingOutlined />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.status}>
            已保存
          </div>
          <div className={styles.title}>
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
