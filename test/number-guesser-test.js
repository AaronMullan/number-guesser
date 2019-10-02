// IMPORT MODULES under test here:
// import example from '../src/example.js';
//import isBlown from '../';
const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 13;
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(correctNumber, 13,);
    assert.equal(correctNumber < 13, false);
    assert.equal(correctNumber > 13, false);
});
