import angular from 'angular';
import dashboardModule from './dashboard/dashboard';

let componentsModule = angular.module('components', [
    dashboardModule
]).name;

export default componentsModule;