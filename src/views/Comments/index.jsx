import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../../actions/fetchActions";
import { api } from "../../constants/index";

class Comments extends React.PureComponent {
  componentDidMount() {
    this.props.fetchData(api.comments, "comments");
  }

  render() {
    if (this.props.loading) {
      return <div>Loading comments ...</div>;
    }

    return this.props.comments
      ? this.props.comments.map((data, key) => (
          <div key={key} style={{ marginTop: "10px", borderStyle: "outset" }}>
            <h3> {data.name}</h3>
            {data.body}
          </div>
        ))
      : null;
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
)(Comments);
