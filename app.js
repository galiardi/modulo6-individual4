const path = require('path');
const express = require('express');

const todos = ['Aprender Node', 'Aprender SQL', 'Aprender MongoDB'];

const app = express();
// Le dice a express que como motor de vistas se usara hbs
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/pendientes', (req, res) => {
  // renderiza views/pendientes.hbs
  res.render('pendientes', { todos, layout: 'layout' });
});

module.exports = app;
