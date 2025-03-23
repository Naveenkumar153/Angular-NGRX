import { TestBed } from '@angular/core/testing';
import { ReversePipe } from './reverse.pipe';

/**
 * ReversePipe test suite
 * follow the 3a pattern (Arrange Act Assert)
 * Arrange all necessary preconditions and inputs.
 * Act on the object or method under test.
 * Assert that the expected results have occurred. 
 */

describe('ReversePipe', () => {

  let pipe:ReversePipe;

  beforeEach(() => {


    TestBed.configureTestingModule({
      providers:[ReversePipe],
    });

    pipe = TestBed.inject(ReversePipe);
  });

  it('create an instance', () => {
    // Arrange
    // Act
    // Assert
    expect(pipe).toBeTruthy();
  });

  it('should reverse a string', () => {
     expect(pipe.transform('hello')).toBe('olleh');
  });

  it('should return empty string if input is null', () => {
    expect(pipe.transform('')).toBe('');
  })

});
