import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeConfig from './home.config';
import SpaceService from '../../services/space.service';
import dashboardModule from '../../components/dashboard/dashboard';

let homeModule = angular.module('pages.home', [
    dashboardModule,
    uiRouter
]).component('home', homeComponent)
.service('SpaceService', SpaceService)
.config(homeConfig)
.name;

export default homeModule;