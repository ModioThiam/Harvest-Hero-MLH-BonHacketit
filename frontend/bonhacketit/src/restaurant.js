import './restaurant.css';

function Header() {
    return (
      <header>
        <h1>Harvest Hero</h1>
        <nav>
          <ul>
            <li><a href="Are_u_hero.js">Are you a Harvest Hero?</a></li>
            <li><a href="Get_in_touch.js">Get In Touch</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  
function App() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
  
  export default App;