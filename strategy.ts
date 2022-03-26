interface FlyBehaviour {
  fly(): void;
}

interface QuackBehaviour {
  quack(): void;
}

abstract class Duck {
  public name: String;
  private _flyBehaviour: FlyBehaviour;
  private _quackBehaviour: QuackBehaviour;

  constructor(name: String, flyingBehaviour: FlyBehaviour, quackBehaviour: QuackBehaviour) {
    this.name = name;
    this._flyBehaviour = flyingBehaviour;
    this._quackBehaviour = quackBehaviour;
  }

  public setFlyBehaviour(fb: FlyBehaviour) {
    this._flyBehaviour = fb;
  }

  public performFly() {
    this._flyBehaviour.fly()
  }

  public setQuackBehaviour(qb: QuackBehaviour) {
    this._quackBehaviour = qb;
  }

  public performQuack() {
    this._quackBehaviour.quack()
  }
}

class FlyWithWings implements FlyBehaviour {
  fly() {
    console.log('This duck can fly with wings');
  }
}

class FlyNoWay implements FlyBehaviour {
  fly() {
    console.log("i can't fly");
  }
}

class QuackQuack implements QuackBehaviour {
  quack() {
    console.log('Кря кря');
  }
}

class MallardDuck extends Duck {
  constructor(name: string) {
    super(name, new FlyWithWings(), new QuackQuack());
  }
}

const ducky = new MallardDuck('Ducky');

ducky.performFly();
ducky.performQuack();