function Info() {
  return (
    <div>
      <img src="./image.jpg" className="main-img"></img>
      <div className="bg">
        <h2>Nenad Vasilić</h2>
        <div className="btn">
          <button className="white">Email</button>
          <button className="blue">Linkedin</button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg">
      <h3>About</h3>
      <p>
        Qwert zuio pšđas dfghj klčćž yxcv bnm. Qwert zuio pšđas dfghj klčćž yxcv
        bnm.
      </p>
    </div>
  );
}

function Interests() {
  return (
    <div className="bg">
      <h3>Interests</h3>
      <p className="pb">
        Qwert zuio pšđas dfghj klčćž yxcv bnm. Qwert zuio pšđas dfghj klčćž yxcv
        bnm.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"></img>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"></img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"></img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"></img>
    </div>
  );
}

function App() {
  return (
    <div>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
