class Store {
  constructor(init = {}) {
    const self = this;
    this.subscribers = [];

    this.state = new Proxy(init, {
      set(target, key, value) {
        target[key] = value;

        for (const subscriber of self.subscribers) {
          subscriber(target);
        }

        return true;
      },
    });
  }

  subscribe(cb) {
    if (typeof cb !== 'function') {
      throw new Error(`You must subscribe with a function.`);
    }

    this.subscribers.push(cb);
    cb(this.state);
  }

  addComment(comment) {
    if (!comment.date) {
      comment.date = new Date().toLocaleString();
    }

    this.state.commentList.push(comment);
    this.state.commentList = this.state.commentList;
  }
}

export const store = new Store({ commentList: [] });
