import icon from "./../../assets/img/notification-icon.svg"
import "./styles.css"

function NotificationButton() {
  return (
    <div>
      <button className="notification-btn">
        <img src={icon} alt="Notificar" />
      </button>
    </div>
  )
}

export default NotificationButton
