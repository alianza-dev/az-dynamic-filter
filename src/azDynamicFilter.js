export default ngModule => {
  ngModule.filter('azDynamicFilter', function($filter) {
    return function azDynamicFilter(input, filterName) {
      if (!filterName) {
        return input;
      }
      // filterName can contain its arguments for convenience
      let args = [];
      getFilterArgs(filterName, args);
      if (args.length === 1) {
        args = Array.prototype.slice.call(arguments, 0);
        args.splice(1, 1); // remove filter name
      } else {
        filterName = args[0];
        args.splice(0, 1, input); // remove the filter name
      }
      const filter = $filter(filterName);
      return filter.apply(null, args); // invoke filter with args received

      function getFilterArgs(str, matches) {
        /* eslint complexity:[2, 7] */
        if (!str) {
          return matches;
        }
        let startIndex = 0;
        const nextColon = str.indexOf(':');
        let endIndex = str.length - (nextColon !== -1 ? 1 : 0);
        const isQuoted = str.indexOf('"') === 0;
        if (isQuoted) {
          startIndex = 1;
          endIndex = str.substr(1).indexOf('"') + 1;
        } else if (nextColon > 0) {
          endIndex = nextColon;
        }
        const head = str.substring(startIndex, endIndex).trim();
        matches.push(head);
        let tail = str.substring(head.length + (isQuoted ? 2 : 1));
        if (tail.indexOf(':') === 0) {
          tail = tail.substr(1);
        }
        return getFilterArgs(tail, matches);
      }
    };
  });
};
