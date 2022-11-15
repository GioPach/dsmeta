import logo from "./../../assets/img/logo.svg"
import "./styles.css"

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/GioPach" target="_blank">
            @GioPach
          </a>
        </p>
      </div>
    </header>
  )
}
