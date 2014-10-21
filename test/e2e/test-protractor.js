var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('Angular test App', function() {

    describe('Index view', function() {

        beforeEach(function() {
            browser.get('index.html');
        });

        it('App name should correct', function() {
            expect(element(by.binding('name')).getText()).to.eventually.equal('HACKER NEWS TOP 100');
        });

        it('Should have 100 elements', function() {
            var newsItems = element.all(by.repeater('newsItem in news'));
            expect(newsItems.count()).to.eventually.equal(100);
        });
    });
});
