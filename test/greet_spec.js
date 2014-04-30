var greet = require('../lib/index')
describe('greet', function() {
    it("should greet a person by name", function(){
        expect('hello, Mocha').to.equal(greet('Mocha'));
    });
    it("should greet a person flirtatiously if drunk", function(){
        expect('hello Mocha, you look sexy today').to.equal(greet('Mocha', true));
    });
});
