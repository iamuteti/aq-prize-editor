// @flow

class Injector {
  dependencies: Object

  constructor(){
    this.dependencies = {};
  }

  register<T>(type: string, value: T) {
    this.dependencies[type] = value;
  }

  resolve<T>(type: string): T {
    return this.dependencies[type];
  }
}

export default Injector = new Injector();
