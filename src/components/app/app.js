import React from 'react';
import Header from '../header/header';
import MainPage from '../pages/main-page';
import { Switch, Route } from 'react-router-dom';
import MoviesPage from '../pages/movies-page';
import VkMainPage from '../pages/vk-main-page';
import ProfileDetails2 from '../data-detail/profile-detail2';
import GetTestDataComp from '../data-detail/test-detail';
import DataBaseWorkPage from '../pages/db-work-page';
import PostFormController from '../forms/db-integration-form-controlled';
import { DBViewLogicTest } from '../forms/db-view-form-test';
import DBViewLogic from '../forms/db-view-form';
import GetMatchesByQuery from '../forms/vk-search-matches';
import GetInfobyId from '../forms/vk-form-get-by-id';
import GetMatches from '../forms/vk-form-get-matches';
import { SpinnerMain } from '../spinner/spinner-controller';
import ProfileEnrichmentContainer from '../forms/containers/profile-enrichment-container';
import { TestStyleComponent } from '../forms/test-style-forms/test-style-form';
import { TestStyleComponentContainer } from '../forms/test-style-forms/test-style-blocks-container';
import { TestControlPanel } from '../forms/test-style-forms/test-control-panel';
import { TestCodeContainer } from '../forms/test-style-forms/test-code-container';
import { TestArticlePage } from '../forms/test-style-forms/test-article-page';
import GetMatchesFormController from '../forms/vk-search-matches-refactor';
import { PopupMain } from '../forms/popups/popup-controller';
import ViewPostsController from '../forms/posts-view/db-view-form-controller-refactor';
import ProfileEnrichmentControllerRx from '../forms/profile-enrichment/profile-enrichment-controller-refactor';
import { VKSearchMatchedProfilesComponent } from '../forms/vk/vk-search-matches-controller';
/*
Switch отслеживает маршрут и при первом же совпадении
остальные маршруты игнорируются
*/
const App = () => {
  return (
      <div className="main-container">
         <Header />
         <SpinnerMain />
         <PopupMain />
         <Switch>
            <Route path="/movies" component={MoviesPage} />
            <Route path="/vkdata" exact component={VkMainPage} />
            <Route
               path="/vkdata/profile/:id?"
               component={ProfileEnrichmentContainer}
            />
            <Route path="/testdata" component={GetTestDataComp} />
            <Route path="/dbwork" exact component={DataBaseWorkPage} />
            <Route path="/dbwork/text" component={PostFormController} />
            <Route path="/dbwork/view-test" component={DBViewLogicTest} />
            <Route path="/dbwork/view-posts" component={ViewPostsController} />
            <Route
               path="/vkdata/profile-enrichment"
               exact
               component={GetInfobyId}
            />
            <Route
               path="/vkdata/profile-enrichment-test/:id"
               component={ProfileEnrichmentControllerRx}
            />
            <Route
               path="/vkdata/profile-enrichment/:id"
               component={ProfileEnrichmentContainer}
            />
            <Route path="/vkdata/search-by-id" component={GetMatches} />
            <Route
               path="/vkdata/search-matches"
               component={GetMatchesByQuery}
            />
            <Route
               path="/vkdata/search-matches-test"
               component={VKSearchMatchedProfilesComponent}
            />
            <Route path="/test-styles/:id?" component={TestArticlePage} />
            {/*<Route path="/test-styles/:id?">*/}
            {/*    <TestCodeContainer />*/}
            {/*</Route>*/}
            <Route path="/" component={MainPage} />
         </Switch>
      </div>
  );
};
export default App;
