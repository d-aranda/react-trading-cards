'use strict';

function About() {
  return (
    <React.Fragment>

    <div>
      <a href="/">Go to homepage</a>
    <p>
    <img id="home-img" src="/static/img/balloonicorn.jpg" />
    </p>
    </div>
    </React.Fragment>
  );
}

ReactDOM.render(<About />, document.querySelector('#about'));
