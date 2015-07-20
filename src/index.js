import angular from 'angular-fix';
import azDynamicFilterFactory from './azDynamicFilter';

const ngModuleName = 'azDynamicFilter';

const ngModule = angular.module(ngModuleName, []);
azDynamicFilterFactory(ngModule);

export default ngModuleName;
