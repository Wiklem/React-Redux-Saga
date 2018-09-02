import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../../actions/fetchActions";
import { api } from "../../constants/index";

class Users extends React.PureComponent {
  componentDidMount() {
    this.props.fetchData(api.users, "users");
  }

  tableRow = row => (
    <tr key={row.id}>
      <td key={row.name + row.id}>{row.name}</td>
      <td key={row.email + row.id}>{row.email}</td>
      {row.company ? (
        <td key={row.company.id + row.id}>{row.company.name}</td>
      ) : null}
    </tr>
  );

  render() {
    if (this.props.loading) {
      return <div> Loading users ... </div>;
    }

    return this.props.users ? (
      <table align="center">
        <tbody>
          <tr>
            <td key={"name"}>
              <strong>Name</strong>
            </td>
            <td key={"email"}>
              <strong>E-mail</strong>
            </td>
            <td key={"company"}>
              <strong>Company</strong>
            </td>
          </tr>
          {this.props.users &&
            this.props.users.map(row => {
              return this.tableRow(row);
            })}
        </tbody>
      </table>
    ) : null;
  }
}
const mapStateToProps = ({ fetchData }) => {
  return {
    ...fetchData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
