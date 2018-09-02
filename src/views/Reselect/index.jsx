import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../selectors";

class Reselect extends React.PureComponent {
  render() {
    if (!this.props.users) {
      return (
        <div>
          <h1> Open users, and you can reselect them! </h1>
        </div>
      );
    }
    return <div>Amount of users loaded: {this.props.users.total}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: getUsers(state)
  };
};

export default connect(mapStateToProps)(Reselect);
