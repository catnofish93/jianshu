import React from "react"
const itemStyle = {
  padding: '10px 13px 10px 17px',
  borderRadius: '20px 0 0 20px',
  borderRight: 'none',
  width: '49%',
  textAlign: 'center',
  fontSize: '14px',
  letterSpacing: '0 !important',
  color: '#969696',
  border: '1px solid #e5e5e5'
}
class SwitchStatus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'wrap'}>
        {this.props.list.map((item, index) => {
          return <div style={itemStyle} key={index}>{item}</div>
        })}
      </div>
    )
  }
}
export default SwitchStatus
