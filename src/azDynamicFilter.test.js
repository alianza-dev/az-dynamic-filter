import './azDynamicFilter';
export default ngModule => {
  describe('azDynamicFilter', () => {
    beforeEach(window.module(ngModule.name));

    let azDynamicFilter, customFilter, $rootScope;

    beforeEach(window.module(function($provide) {
      customFilter = sinon.spy(function() {
        return [...arguments].join(',');
      });
      $provide.value('customFilter', customFilter);
    }));

    beforeEach(inject(($filter, _$rootScope_) => {
      $rootScope = _$rootScope_;
      azDynamicFilter = $filter('azDynamicFilter');
    }));

    it(`should pass arguments along to the specified filter`, () => {
      azDynamicFilter('firstArg', 'custom', 'secondArg', 'thirdArg');
      expect(customFilter).to.have.been.calledWith('firstArg', 'secondArg', 'thirdArg');
    });

    it(`should not do anything if there is no filterName passed`, () => {
      let result;
      expect(() => result = azDynamicFilter('firstArg')).to.not.throw();
      expect(result).to.equal('firstArg');
    });

    it(`should work with $compile`, () => {
      $rootScope.$eval('firstArg | azDynamicFilter:filterName:secondArg:thirdArg', {
        firstArg: 'firstArg',
        secondArg: 'secondArg',
        thirdArg: 'thirdArg',
        filterName: 'custom'
      });
      expect(customFilter).to.have.been.calledWith('firstArg', 'secondArg', 'thirdArg');
    });

    it(`should return what the filter returns`, () => {
      const result = $rootScope.$eval('options | azDynamicFilter:filter:search', {
        filter: 'filter',
        options: ['option1', 'option2', 'option3', 'foobar'],
        search: 'opt'
      });
      expect(result).to.deep.equal(['option1', 'option2', 'option3']);
    });

    it(`should work by passing colon separated stuff`, () => {
      azDynamicFilter('firstArg:secondArg:thirdArg', 'custom');
    });
  });
};
