interface FlyBehaviour {
    fly(): void;
  }
  
  interface QuackBehaviour {
    quack(): void;
  }
  
  class Duck {
    flyBehaviour: FlyBehaviour;
    quackBehaviour: QuackBehaviour;
  
    constructor(){}
  
    performFly() {
      this.flyBehaviour.fly()
    }
  
    performQuack() {
      this.quackBehaviour.quack()
    }
  
    setFlyBehaviour(fb: FlyBehaviour) {
      this.flyBehaviour = fb;
    }
  
    setQuackBehaviour(qb: QuackBehaviour){
      this.quackBehaviour = qb;
    }
  }
  
  class FlyWithWings implements FlyBehaviour {
    fly(){
      console.log('This duck can fly with wings');
    }
  }
  
  class FlyNoWay implements FlyBehaviour {
    fly(){
      console.log("i can't fly");
    }
  }
  
  class QuackQuack implements QuackBehaviour {
    quack(){
      console.log('Кря кря');
    }
  }
  
  class MallardDuck extends Duck {
    name: string;
    constructor(name: string){
      super()
      this.flyBehaviour = new FlyWithWings();
      this.quackBehaviour = new QuackQuack();
    }
  }
  
  const ducky = new MallardDuck('Ducky');
  
  ducky.performFly();
  ducky.performQuack();