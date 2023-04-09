import './Are_u_hero.css';

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

function Main() {
  return (
    <main id ="main">
      <section>
        <h2>What is Gleaning?</h2>
        <p>According to the United States Department of Agriculture, "there are 49 million people, including more than 16 million children, who are at risk of going hungry." The act of gleaning is tied to food recovery, and a solution to combatting food insecurity - by collecting excess fresh foods and distributing it to the individuals who need it the most.  </p>
        <h2>The environmental Impact</h2>
        <p> According to the Environmental Protection Agency, "the single-largest component of the waste stream" are food leftovers, including unsold food from grocery stores, and restaurants, as well as food scraps and uneaten food. Additionally, when food is thrown away into a landfill, it produces methane - which is a greenhouse gas more potent than Carbon Dioxide, resulting in increased global warming and climate change. 

        Gleaning is a significant way to address both the negative impacts of food waste on the environment and food insecurity. 
        </p>
      </section>
      <section>
        <h2>Ways to get Involved and Make an Impact:</h2>
        <p>Here are some ways to contribute to the solution, and make the world a better place. One glean at a time!</p>
        <ul>
          <li>Being more knowledgeable: Researching the issue, and using resources like the United States Food Administration, and Feeding America</li>
          <li> Get Involved: Participating in Volunteering events - locally or through accessing them through applications like,  Rolling Harvest (application used to find volunteering opportunities).</li>
          <li>Sponsor a Family: Organizations like, Family to Family, allows for individuals to make monthly contributions for families who need assistance in accessing basic supplies (like groceries)</li>
          <li>Donate Food/Supplies: Consider donating canned foods, and other healthy foods to organizations (like food pantries, food banks and homeless shelters), where they can distribute it to those  who need it. </li>
        </ul>
      </section>
    </main>
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