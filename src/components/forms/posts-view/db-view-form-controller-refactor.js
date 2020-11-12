import React from "react";
import { connect } from "react-redux";
import {
  postsLoaded,
  postsError,
  selectPostDispatch,
  cancelSelectPostDispatch,
  postsLoadingStartDispatch
} from "../../../actions/posts-form-actions";
import { getIndexInArrayOfObjectsById2 } from "../../../services/helper";
import { withMainProps } from "../../hoc/with-main-props";
import {
  enrichLoadedPostsSelector,
  getPostsLoadingStatusSelector,
  getSelectedPostsSelector,
} from "./post-view-selectors";
import { popupShowDispatch } from "../popups/popup-actions";
import {
  spinnerHideDispatch,
  spinnerShowDispatch,
} from "../../../actions/actions";
import { createStructuredSelector } from "reselect";
import TableRenderer from "../../helpers/table-maker";
import { ModalsController } from "../modals/modals-controller";
import { showModalForPostDispatch } from "../modals/modal-actions";

class ViewPostsController extends React.Component {
  componentDidMount() {
    console.log(`ViewPosts mounted, props:` + "\n");
    console.log(this.props);
  }

  onClickListener = async () => {
    const { service, mainConstants, postsLoaded, postsError } = this.props;
    postsLoadingStartDispatch();
    spinnerShowDispatch("Идет загрузка постов");
    //popupShowDispatch(mainConstants.POPUP_CONTAINER_CENTER_ERROR, 'Test', 5000);
    try {
      const posts = await service.searchPosts();
      postsLoaded(posts);
      spinnerHideDispatch();
    } catch (e) {
      spinnerHideDispatch();
      console.error(e);
      postsError();
    }
  };

  onSelectPost = (postId) => {
    const { selectedPosts } = this.props;
    selectPostDispatch(postId);
    showModalForPostDispatch(selectedPosts[0]);
  };

  onSelectPost2 = (postId) => {
    console.log(`onSelectPost2: start with postId: ${postId}`);
    console.log(this.props);
    const { selectedPosts, isPostsLoading } = this.props;
    selectPostDispatch(postId);
    if (!isPostsLoading) {
      showModalForPostDispatch(selectedPosts[0]);
    }
  };

  onRemoveSelectPost = () => {
    const { selectedPosts } = this.props;
    cancelSelectPostDispatch(selectedPosts[0]);
  };

  componentDidUpdate() {
    console.log(`ViewPosts updated, props:` + "\n");
    console.log(this.props);
  }

  render() {
    const { loadedPosts } = this.props;

    return (
      <div>
        <ModalsController />
        <button onClick={this.onClickListener} className="btn btn-primary">
          Загрузить посты
        </button>
        {/*<button onClick={this.onSelectPost} className='btn btn-primary'>Выбрать пост с ID 38</button>*/}
        {/*<button onClick={this.onRemoveSelectPost} className='btn btn-primary'>Снять выбор с поста с ID 38</button>*/}
        <TableRenderer
          list={loadedPosts}
          onClickListener={this.onSelectPost2}
        />
      </div>
    );
  }
}

// const mapStateToProps = ({ postForm }) => {
//     //getPostsSelector(postForm);
//     return {
//         ...postForm,
//         loadedPosts: enrichLoadedPostsSelector(postForm),
//         selectedPosts: getSelectedPostsSelector
//     }
//
// };

const mapStateToProps = createStructuredSelector({
  loadedPosts: enrichLoadedPostsSelector,
  selectedPosts: getSelectedPostsSelector,
  isPostsLoading: getPostsLoadingStatusSelector,
});

const mapDispatchToProps = {
  postsLoaded,
  postsError,
};

export default withMainProps(
  connect(mapStateToProps, mapDispatchToProps)(ViewPostsController)
);
