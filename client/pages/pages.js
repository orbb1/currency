import angular from 'angular';
import homeModule from './home/home';

let pagesModule = angular.module('pages', [
    homeModule
]).name;

export default pagesModule;