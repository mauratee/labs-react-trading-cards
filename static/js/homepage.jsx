"use strict";

function Homepage() {
  return (
    <div>
      <h1>Welcome to the site !</h1>
      <a href="/cards">Link to Cards</a><br></br>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
