import React from 'react';
import { connect } from 'react-redux';
import {
  vkProfileDataRequseted,
  vkProfileDataLoaded,
  vkMatchProfilesLoaded,
  vkSearchMatchProps,
} from '../../actions/actions';
import withGetDataFromWeb from '../hoc/with-getdata-from-web';
import Spinner from '../spinner/spinner';
import ProfileInfo from '../data-list/vk-profile-info';
import ProfileMatches from '../data-detail/profile-matches';
import { counterNotNull } from '../../services/helper';
import GetInfobyId from '../forms/vk-form-get-by-id';
import GetMatches from '../forms/vk-form-get-matches';
import GetMatchesByQuery from '../forms/vk-search-matches';

class VKdataPage extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
    console.log(Object.keys(this.props.profiledata).length);
  }

  getInfobyId = async (id) => {
    this.props.vkProfileDataRequseted();
    const data = await this.props.getDatafromWeb.getProfileInfoById(id);
    return data;
  };

  getMatches = async (s, q) => {
    let endId = parseInt(s, 10) + parseInt(q, 10);

    this.props.vkProfileDataRequseted();
    this.props.vkSearchMatchProps({
      startId: s,
      endId: endId,
    });
    const data = await this.props.getDatafromWeb.getMatchProfilesRange(s, q);
    return data;
  };

  getMatchesWS = async (s, q) => {
    let endId = parseInt(s, 10) + parseInt(q, 10);

    this.props.vkProfileDataRequseted();
    this.props.vkSearchMatchProps({
      startId: s,
      endId: endId,
    });
    const data = await this.props.getDatafromWeb.wsGetMatches(s, q);
    return data;
  };

  onClickListenerGetById = (e) => {
    e.preventDefault();
    let profileId = document.getElementById('vkid').value;
    if (profileId === '' || profileId === null || isNaN(profileId)) {
      alert('Введите ID. Должен содержать цифры');
      return;
    }
    this.getInfobyId(profileId).then((data) => {
      console.log(data);
      this.props.vkProfileDataLoaded(data);
    });
  };

  onClickListenerGetMatches = (e) => {
    e.preventDefault();
    let startId = document.getElementById('startvkid').value;
    let quantity = document.getElementById('quan').value;

    if (!startId || isNaN(startId) || !quantity || isNaN(quantity)) {
      alert('Введите ID. Должен содержать цифры');
      return;
    }
    this.getMatches(startId, quantity).then((data) => {
      this.props.vkMatchProfilesLoaded(data);
    });
  };

  onClickListenerGetMatchesWS = (e) => {
    e.preventDefault();
    let startId = document.getElementById('startvkid').value;
    let quantity = document.getElementById('quan').value;

    if (
      startId === '' ||
      startId === null ||
      isNaN(startId) ||
      quantity === '' ||
      quantity === null ||
      isNaN(quantity)
    ) {
      alert('Введите ID. Должен содержать цифры');
      return;
    }
    this.getMatchesWS(startId, quantity).then((data) => {
      this.props.vkMatchProfilesLoaded(data);
    });
  };

  render() {
    const {
      loading,
      profiledata,
      matchedprofiles,
      searchMatchProps,
    } = this.props;

    if (Object.keys(profiledata).length === 0 && matchedprofiles.length === 0) {
      return (
        <React.Fragment>
          <div className="vk-data-block">
            <GetInfobyId onClickListenerGetById={this.onClickListenerGetById} />
            <GetMatches
              onClickListenerGetMatches={this.onClickListenerGetMatches}
            />
            <GetMatchesByQuery caller="class.VKdataPage" />
          </div>
        </React.Fragment>
      );
    } else if (Object.keys(profiledata).length > 0) {
      return (
        <div className="vk-data-block">
          <GetInfobyId onClickListenerGetById={this.onClickListenerGetById} />
          <GetMatches
            onClickListenerGetMatches={this.onClickListenerGetMatches}
          />
          <div className="profile-info-block">
            <div className="vk-page-text">Данные из VK</div>
            <ProfileInfo profile={profiledata} />
          </div>
        </div>
      );
    } else if (matchedprofiles.length > 0) {
      return (
        <div className="vk-data-block">
          <GetInfobyId onClickListenerGetById={this.onClickListenerGetById} />
          <GetMatches
            onClickListenerGetMatches={this.onClickListenerGetMatches}
          />
          <div className="vk-page-text">Данные из VK</div>
          <div className="profile-info-block">
            Диапазон поиска от {searchMatchProps.startId} до{' '}
            {searchMatchProps.endId} Найдено подходящих:{' '}
            {counterNotNull(matchedprofiles)}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    matchedprofiles: state.matchedprofiles,
    profiledata: state.profiledata,
    searchMatchProps: state.searchMatchProps,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    vkProfileDataRequseted: () => {
      dispatch(vkProfileDataRequseted());
    },
    vkProfileDataLoaded: (profileLoad) => {
      dispatch(vkProfileDataLoaded(profileLoad));
    },
    vkMatchProfilesLoaded: (matches) => {
      dispatch(vkMatchProfilesLoaded(matches));
    },
    vkSearchMatchProps: (props) => {
      dispatch(vkSearchMatchProps(props));
    },
  };
};

export default withGetDataFromWeb(
  connect(mapStateToProps, mapDispatchToProps)(VKdataPage),
);
