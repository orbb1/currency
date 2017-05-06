import angular from 'angular';
import homeModule from './home/home';
import aboutModule from './about/about';

let pagesModule = angular.module('pages', [
    homeModule,
    aboutModule
]).name;

export default pagesModule;