import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import pagesModule from '../pages/pages';
import componentsModule from '../components/components';
import servicesModule from '../services/space.service';

angular.module('app', [
  componentsModule,
  pagesModule,
  uiRouter
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    $stateProvider.state('app', {
      url: '',
      component: 'app'
    });
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
