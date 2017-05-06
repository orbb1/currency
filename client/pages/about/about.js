import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import aboutConfig from './about.config';

let aboutModule = angular.module('pages.about', [
    uiRouter
]).component('about', aboutComponent).config(aboutConfig).name;

export default aboutModule;