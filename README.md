# az-dynamic-filter

Status:
[![npm version](https://img.shields.io/npm/v/az-dynamic-filter.svg?style=flat-square)](https://www.npmjs.org/package/az-dynamic-filter)
[![npm downloads](https://img.shields.io/npm/dm/az-dynamic-filter.svg?style=flat-square)](http://npm-stat.com/charts.html?package=az-dynamic-filter&from=2015-06-01)
[![Build Status](https://snap-ci.com/alianza-dev/az-dynamic-filter/branch/master/build_image)](https://snap-ci.com/alianza-dev/az-dynamic-filter/branch/master)
[![Code Coverage](https://img.shields.io/codecov/c/github/alianza-dev/az-dynamic-filter.svg?style=flat-square)](https://codecov.io/github/alianza-dev/az-dynamic-filter)

az-dynamic-filter allows you to bind the name of a filter in your template to swap them out or allow someone to pass it
in as an option to a directive. The possibilities are endless!

Usage:

Depend on the module

```javascript
angular.module('yourModule', ['azDynamicFilter']);
```

Use it

```html
Filter Name: <input ng-model="vm.filterName" />
Filter: <input ng-model="vm.filterParam" />
<div ng-repeat="thing in vm.things | azDynamicFilter:vm.filterName:vm.filterParam>{{thing}}</div>
```
