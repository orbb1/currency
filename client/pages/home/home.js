import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeConfig from './home.config';
import SpaceService from '../../services/space.service';

let homeModule = angular.module('pages.home', [
    uiRouter
]).component('home', homeComponent)
.service('SpaceService', SpaceService)
.config(homeConfig)
.name;

export default homeModule;