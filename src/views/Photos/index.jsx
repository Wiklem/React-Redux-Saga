import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../../actions/fetchActions";
import { api } from "../../constants/index";

class Photos extends React.PureComponent {
  componentDidMount() {
    this.props.fetchData(api.photos, "photos");
  }

  render() {
    if (this.props.loading) {
      return <div>Loading photos...</div>;
    }

    return this.props.photos
      ? this.props.photos.map((data, key) => (
          <img
            key={key}
            src={data.url}
            alt={data.title}
            width={100}
            height={100}
          />
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
)(Photos);
