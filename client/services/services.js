import angular from 'angular';
import SpaceService from './space.service';

let servicesModule = angular.module('servicesModule', [])
.service('SpaceService', SpaceService)
.name;

export default servicesModule;