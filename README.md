# az-dynamic-filter

## Usage:

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
