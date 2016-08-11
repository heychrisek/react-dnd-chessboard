var React = require('react')
var ReactDOM = require('react-dom')
var Board = require('./Board')

ReactDOM.render(
  <Board knightPosition={[3,7]} />,
  document.getElementById('root')
)