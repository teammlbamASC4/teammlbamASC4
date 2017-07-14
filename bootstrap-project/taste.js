//object are classes, but not every class is an object
//Like how superman is a hero, but not every hero is suoerman

function food(taste, sprinkles, syrup)
{
    this.taste = taste;
    this.sprinkles = sprinkles;
    this.syrup = syrup;
}

var waffles = new food("good", true, "maple");

console.log(waffles);