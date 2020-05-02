/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
import {html, render} from 'lit-html';

const container = document.querySelector('#main');

const todos = ['Buy hand sanitizer', 'Shred cabbage', 'Learn TypeScript'];

const template = () => html`
  <h2>To Do</h2>
  <ul>
    ${todos.map((todo) => html`<li>${todo}</li>`)}
  </ul>
  <input @change=${newToDo} />
`;

function newToDo(e) {
  todos.push(e.target.value);
  e.target.value = '';
  render(template(), container);
}

render(template(), container);
