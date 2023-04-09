import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Farm from '../pages/farm.js';
import Restaurant from '../pages/restaurant.js';
import './header.css';
import SMSForm from "../pages/SMSForm.js";

function Header() {
    return (<div>
                <section>
                    <h2>Mission Statement: </h2>
                    <p>Harvest Hero is a new solution to combat the growing issue of food waste. Our mission is to connect individuals to organizations that have excess food for those in need of it most. We strongly believe in spreading awareness to this global issue, and creating a positive impact to  make the world a better place.Food waste occurs for many reasons, but a significant amount is edible and nutritious food goes to waste because it's not harvested. That's where Harvest Heroes come in!</p>

                    <p>By 2030, the worlds population will exceed 8.6 billion people, all of whom will need access to healthy food. Much needs to change if we are to meet the challenge. Americans waste as much as 40% of all food grown. Considering all the resources that go into producing that food, water, fertilizers, labor and fuel, this is clearly not a sustainable path for our country. Better practices are needed to efficiently utilize our finite amounts of land and natural resources. Fortunately, many solutions are in the works, and are finally getting the media attention needed to push an entire anti-food-waste movement forward.</p>
                </section>
                <BrowserRouter>
                <section>
                    <h2>One glean at a time ...</h2>
                    <p>we can feed our communities and save our planet!</p>

                    <div class="container">
                        <img alt="Restaurants" src="https://media.discordapp.net/attachments/1093600618347778212/1094341128809091173/annie-spratt-oT7_v-I0hHg-unsplash.jpg?width=867&height=577" style={{ width: '300px', height: '200px' }}></img>
                        <img alt="Farms" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" style={{ width: '300px', height: '200px' }} ></img>
                        <img alt="Grocery Stores" src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" style={{ width: '300px', height: '200px' }} ></img>
                        <div class="text-container">
                        <button><Link to="/restaurant">Register your business</Link></button>
                                <Routes>
                                    <Route path="/restaurant" element={<Restaurant />} />
                                    <Route path="/farm" element={<Farm />} />
                                    <Route path="/SMSForm" element={<SMSForm />} />
                                </Routes>
                        </div>
                    </div>
                    </section>
            </BrowserRouter>
        </div>
    );
}
export default Header;