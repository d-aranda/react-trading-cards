'use strict';

function Homepage() {
  return (
    <React.Fragment>

    <div>
      <a href="/cards">Go to cards page</a>
    </div>
    <img id="home-img" src="/static/img/balloonicorn.jpg" />
    <div>
    <a href="/about">Go to about page</a>
    </div>

    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
