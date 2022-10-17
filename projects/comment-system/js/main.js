import './comment.js';
import { store } from './store.js';

const required = document.querySelectorAll('[required]');
const form = document.querySelector('#form');
const output = document.querySelector('#output');

for (const input of required) {
  input.closest('.form-item').querySelector('label').classList.add('required');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  console.log(data);

  store.addComment(data);

  event.target.reset();

  event.target.querySelector('input').focus();
});

store.subscribe((state) => {
  const allComments = state.commentList;
  console.log(allComments);

  output.innerHTML = '';

  for (const comment of allComments) {
    const newComment = document.createElement('custom-comment');

    newComment.setAttribute('name', comment.name);
    newComment.setAttribute('email', comment.email);
    newComment.setAttribute('message', comment.comment);
    newComment.setAttribute('time', comment.date);

    output.append(newComment);
  }
});
