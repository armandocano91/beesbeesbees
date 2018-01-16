describe('RetiredBee class functionality', function() {

  verifyClass(RetiredBee).followsPattern('pseudoclassical', {}, false);

  beforeEach(function() {
    RetiredBee = new RetiredBee();
  });

  /*  Overwrite methods from superclass  */

  it('should have an `age` property that is set to `10`', function() {
    expect(RetiredBee.age).to.equal(10);
  });

  it('should have a `job` property that is set to `find pollen`', function() {
    expect(RetiredBee.job).to.equal('find pollen');
  });

  /*  Inherited from superclass  */

  it('should have a `color` property inherited from `bee` that is set to `yellow`', function() {
    expect(RetiredBee.color).to.equal('yellow');
  });

  it('should have a `food` property that is inherited from grub', function() {
    expect(RetiredBee.food).to.equal('jelly');
  });

  it('should have an `eat` method that is inherited from grub', function() {
    expect(RetiredBee.eat).to.be.a('function');
  });

  /*  New methods and properties  */

  it('should have a `canFly` property that is set `true`', function() {
    expect(RetiredBee.canFly).to.equal(true);
  });

  it('should have a `treasureChest` property that is set to an empty array `[]`', function() {
    expect(RetiredBee.treasureChest).to.be.a('array');
  });

  it('should have a `forage` method that allows the bee to add a `treasure` to the `treasureChest`', function() {
    RetiredBee.forage('pollen');
    RetiredBee.forage('flowers');
    RetiredBee.forage('gold');
    expect(RetiredBee.treasureChest).to.have.length(3);
  });

});
