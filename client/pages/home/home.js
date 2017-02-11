import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeConfig from './home.config';

let homeModule = angular.module('pages.home', [
    uiRouter
]).component('home', homeComponent)
.config(homeConfig)
.name;

export default homeModule;