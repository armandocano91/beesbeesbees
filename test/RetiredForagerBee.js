describe('RetiredRetiredBee class functionality', function() {

  verifyClass(RetiredRetiredBee).followsPattern('pseudoclassical', {}, false);

  beforeEach(function() {
    retiredRetired = new RetiredRetiredBee();
  });

  /*  Overwrite methods from superclass  */

  it('should have an `age` property that is set to `40`', function() {
    expect(retiredRetired.age).to.equal(40);
  });

  it('should have a `job` property that is set to `gamble`', function() {
    expect(retiredRetired.job).to.equal('gamble');
  });

  it('should have a `canFly` property that is set to `false`', function() {
    expect(retiredRetired.canFly).to.equal(false);
  });

  it('should have a `color` property that is set to `grey`', function() {
    expect(retiredRetired.color).to.equal('grey');
  });

  it('should have a `forage` method that returns "I am too old, let me play cards instead"', function() {
    expect(retiredRetired.forage()).to.equal('I am too old, let me play cards instead');
  });

  /*  Inherited from superclass  */

  it('should have a `food` property that is inherited from grub', function() {
    expect(retiredRetired.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inherited from grub', function() {
    expect(retiredRetired.eat).to.be.a('function');
  });

  it('should have a `treasureChest` property inherited from RetiredBee that is set to an empty array `[]`', function() {
    expect(retiredRetired.treasureChest).to.be.a('array');
  });

  /*  New methods and properties  */

  it('should have an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`', function() {
    retiredRetired.gamble();
    retiredRetired.gamble();
    expect(retiredRetired.treasureChest).to.have.length(2);
  });

});
