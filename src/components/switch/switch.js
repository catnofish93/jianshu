import React from "react"
import styles from './switch.module.scss'
class SwitchStatus extends React.Component {
  constructor(props) {
    super(props);
  }
  changeSelected(e) {
    this.props.changeModel()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props)
  }
  render() {
    return (
      <div className={'SwitchWrap'} style={{display: 'flex',marginBottom: '10px'}}>
        {this.props.list.map((item, index) => {
          return <div className={[styles.item, this.props.selected === index?styles.selected:''].join(' ')} key={index} onClick={this.changeSelected.bind(this, index)}>{item}</div>
        })}
      </div>
    )
  }
}
export default SwitchStatus
