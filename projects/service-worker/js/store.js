import { database } from './db.js';

class Store {
  constructor(init = {}) {
    const self = this;
    this.subscribers = [];

    database.then(async (db) => {
      this.db = db;

      const comments = await db.getAll('comments');

      this.state.commentList = comments;
      console.log(this.state.commentList);
    });

    this.state = new Proxy(init, {
      async set(target, key, value) {
        target[key] = value;

        if (self.db) {
          if (key === 'commentList') {
            const item = value[value.length - 1];

            if (item && !item?.id) {
              await self.db.add('comments', item);
            }
          }
        }

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
