# Angular Unit Testing

### TDD vs BDD 
	* [https://www.youtube.com/watch?v=mT8QDNNhExg]
	* A typical unit test
		* Specification - The domain of the test
		* Feedback - Does the test pass or not
		* Regression - Once it runs, it continues to run
		* Granularity - Giving more info when test fails
	* Language
		* TDD for developers
		* BDD for customers
	* Focus
		* The test cases would not fail, with change in code. They should run irrespective of the code changes.
	* Example
		* Bubble sort, merge sort, insertion sort, quick sort. 
			* TDD - 4 unit tests
			* BDD - 1 unit test (GIVEN a list of numbers, WHEN I sort the list, THEN the list will be in numerical order)
	* Our approach
		* TDD aswell as BDD (Granularity from logs)

### Libraries and Tutorial
	* Protractor (E2E or UI testing)
		* Homepage - http://angular.github.io/protractor/#/
		* Tutorial - http://angular.github.io/protractor/#/tutorial
		* Documentation - http://angular.github.io/protractor/#/toc
		* API - http://angular.github.io/protractor/#/api
	* Chai (Assertion)
		* Homepage - chaijs.com
		* Library - http://chaijs.com/guide/styles/
			* Assert (TDD) - assert.typeOf(foo, 'string', 'foo is a string');
			* Expect (BDD) - expect(foo).to.be.a('string');
			* Should (BDD) - foo.should.be.a('string');
		* API - http://chaijs.com/api/ 
	* Mocha (Test framework)
		* Homepage - http://visionmedia.github.io/mocha
		* Hooks (before(), after(), beforeEach(), afterEach())- http://visionmedia.github.io/mocha/#hooks
		* BDD - describe(), it(), before(), after(), beforeEach(), and afterEach()
	* Angular Mock (Mocks angular services)
		* API Reference - https://docs.angularjs.org/api/ngMock
		* Mock $http service - https://docs.angularjs.org/api/ngMock/service/$httpBackend
	* Sinon (Spies, stubs and mocks for javascript)
		* Homepage - http://sinonjs.org/
		* Docs - http://sinonjs.org/docs/
			* SPY - A test spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. A test spy can be an anonymous function or it can wrap an existing function
			* STUB - Test stubs are functions (spies) with pre-programmed behavior. They support the full test spy API in addition to methods which can be used to alter the stub’s behavior
			* MOCKS - Mocks (and mock expectations) are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations. A mock will fail your test if it is not used as expected.

### Examples
	* Angular Phonecat
	* ngref
	* Shop

### The setup
	* Grunt 
	* Karma
	* Unit testing (Mocha/Chai/Sinon/Angular Mock/Chai as promised)
	* E2E (Protractor)

### References
	* http://www.smashingmagazine.com/2014/10/07/introduction-to-unit-testing-in-angularjs/
	* https://docs.angularjs.org/tutorial
	* http://www.elijahmanor.com/unit-test-like-a-secret-agent-with-sinon-js/