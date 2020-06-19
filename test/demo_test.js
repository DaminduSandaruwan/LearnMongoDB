const mocha = require('mocha');
const assert = require('assert');

//Describe tests
describe('Some Demo Tests',function(){
    //Create Tests
    it('Adds two Numbers together',function(){
        assert(2 + 3 === 5); //work
        // assert(2 + 4 === 5); //error
    });
});