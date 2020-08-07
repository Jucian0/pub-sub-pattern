class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event,fn) {
    this.subscribers[event] = [...this.subscribers[event], fn];
    return () => {
      this.unsubscribe(event,fn);
    };
  }

  unsubscribe(event,fn) {
    this.subscribers[event] = this.subscribers[event].filter(sub => sub !== fn);
  }

  publish(event,data) {
    this.subscribers[event].forEach(sub => {
      sub(data);
    });
  }
}

export default new PubSub();
