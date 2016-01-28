"use strict"

describe('Product', function() {
  var product;
  
  beforeAll(function(){
    product = {
      name: faker.company.companyName(),     
    }
  });

  it('should create a new product', function() {
    var testVar = 'test';
    expect(testVar).toBe('test');
  });
});   