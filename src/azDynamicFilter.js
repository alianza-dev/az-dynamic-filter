export default ngModule => {
  ngModule.filter('azDynamicFilter', function($filter) {
    return function azDynamicFilter(input, filterName) {
      if (!filterName) {
        return input;
      }
      const args = Array.prototype.slice.call(arguments, 0);
      args.splice(1, 1); // remove filter name
      const filter = $filter(filterName);
      return filter(...args);
    };
  });
};
