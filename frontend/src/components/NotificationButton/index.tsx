import icon from "./../../assets/img/notification-icon.svg"
import "./styles.css"

export default function index() {
  return (
    <div>
      <button className="notification-btn">
        <img src={icon} alt="Notificar" />
      </button>
    </div>
  )
}
