import React, { Component } from "react";
import * as actions from "./actions/profile-enrichment-actions";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { getVKProfileById } from "../../utils/middleware/get-vk-en-profile";
import RowPresentationContainer from "../containers/row-presentation-container";
import ProfilePropsEnrichment from "../lists/profile-props-enrichment";
import { VkProfileBlockPresentationCompareContainer } from "../styled-forms/vk-forms/vk-profile-data-presentation-container";

class ProfileEnrichmentControllerRx extends Component {
  async componentDidMount() {
    console.log(
      `ProfileEnrichmentControllerRx: mounted with props from store: `
    );
    console.log(this.props);
    const { fetchVKEnrichmentProfile, stopLoad } = this.props;
    const profileId = this.props.match.params.id;
    if (profileId) {
      fetchVKEnrichmentProfile(profileId);
    }
    // setTimeout(() => {
    //     stopLoad();
    // }, 3000);
  }

  componentDidUpdate() {
    console.log(
      `ProfileEnrichmentControllerRx: updated with props from store: \n`
    );
    console.log(this.props);
  }

  render() {
    const { loading, profile } = this.props.profileEnrichmentData;
    return loading ? (
      <div>Content is loading...</div>
    ) : isEmpty(profile) ? (
      <div>Profile is empty</div>
    ) : (
      <VkProfileBlockPresentationCompareContainer profile={profile} />
    );
  }
}

const mapStateToProps = ({ profileEnrichmentData }) => {
  return { profileEnrichmentData };
};

export default connect(mapStateToProps, actions)(ProfileEnrichmentControllerRx);
