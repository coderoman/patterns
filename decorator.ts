abstract class Beverage {
    public description = "Unknown beverage"

    public getDescription(): string {
        return this.description
    }
    public abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
    public abstract getDescription(): string
}

class Expresso extends Beverage {
    constructor() {
        super();
        this.description = "Expresso"
    }

    cost() {
        return 1.99
    }
}


class HouseBlend extends Beverage {
    constructor() {
        super()
        this.description = "House Blend";
    }

    cost() {
        return 8.00
    }
}


class Mocha extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage;
    }

    public getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`
    }

    public cost(): number {
        return .3 + this.beverage.cost()
    }
}

class Soy extends CondimentDecorator {
    beverage: Beverage;
    
    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage;
    }

    public getDescription(): string {
        return `${this.beverage.getDescription()}, Soy`
    }

    public cost(): number {
        return .5 + this.beverage.cost()
    }
}

class Milk extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage;
    }

    public getDescription(): string {
        return `${this.beverage.getDescription()}, Milk`
    }

    public cost(): number {
        return .4 + this.beverage.cost()
    }
}

let coffee = new HouseBlend();
coffee = new Mocha(coffee)
coffee = new Soy(coffee)
coffee = new Milk(coffee)

console.table({description: coffee.getDescription(), price: coffee.cost()})