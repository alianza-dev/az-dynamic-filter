import angular from 'angular-fix';
import ngModuleName from './index';
import azDynamicFilterTestFactory from './azDynamicFilter.test';

const ngModule = angular.module(ngModuleName);

azDynamicFilterTestFactory(ngModule);
