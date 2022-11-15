import NotificationButton from "./../NotificationButton"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./styles.css"
import { useState } from "react"

export default function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365))
  const max = new Date()

  const [minDate, setMinDate] = useState(min)
  const [maxDate, setMaxDate] = useState(max)

  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <div>
        <div className="form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => {
              setMinDate(date)
            }}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => {
              setMaxDate(date)
            }}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div className="table-container">
        <table className="sales-table">
          <thead>
            <tr>
              <th className="show-992px">ID</th>
              <th className="show-576px">Data</th>
              <th>Vendedor</th>
              <th className="show-992px">Visitas</th>
              <th className="show-992px">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show-992px">#111</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">Anakin</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992px">#112</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">Luck</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992px">#113</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">Leia</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992px">#114</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">Yoda</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992px">#115</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">Obi-wan</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992px">#116</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">Han Solo</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992px">#117</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">Chewbacca</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-992px">#118</td>
              <td className="show-576px">08/07/2022</td>
              <td className="saler-name">R2-D2</td>
              <td className="show-992px">13</td>
              <td className="show-992px">15</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
