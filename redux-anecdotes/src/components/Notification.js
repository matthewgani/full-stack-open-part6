import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.message
  const style = props.style
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.notification.message,
    style: state.notification.style,
  }
}

// using connect instead of useDispatch and useSelector
const ConnectedNotifications = connect(mapStateToProps)(Notification)
export default ConnectedNotifications