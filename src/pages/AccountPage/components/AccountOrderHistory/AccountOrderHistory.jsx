import "./AccountOrderHistory.scss";
// import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import GoldContainer from "../../../../components/GoldContainer/GoldContainer";

export default function AccountOrderHistory() {
  return (
    <GoldContainer className="order-history-table-container">
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Movie</th>
            <th>Theater</th>
            <th>Hour</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>The Adam Project</td>
            <td>
              Kino Moviespot 1,
              <br />
              Sofia - Mladost 1
            </td>
            <td>11.00</td>
            <td>
              Original,
              <br />
              qty: 3
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>The Adam Project</td>
            <td>
              Kino Moviespot 1,
              <br />
              Sofia - Mladost 1
            </td>
            <td>11.00</td>
            <td>
              Original,
              <br />
              qty: 3
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>The Adam Project</td>
            <td>
              Kino Moviespot 1,
              <br />
              Sofia - Mladost 1
            </td>
            <td>11.00</td>
            <td>
              Original,
              <br />
              qty: 3
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>The Adam Project</td>
            <td>
              Kino Moviespot 1,
              <br />
              Sofia - Mladost 1
            </td>
            <td>11.00</td>
            <td>
              Original,
              <br />
              qty: 3
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>The Adam Project</td>
            <td>
              Kino Moviespot 1,
              <br />
              Sofia - Mladost 1
            </td>
            <td>11.00</td>
            <td>
              Original,
              <br />
              qty: 3
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </GoldContainer>
  );
}
