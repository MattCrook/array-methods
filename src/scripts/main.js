// import businesses from "../../api/data.js";
// //import eventManager from "./eventManager.js"

const activeEl = document.querySelector("#active-businesses");
activeEl.innerHTML += "<h1>Active Businesses</h1>";

businesses.forEach(business => {
  activeEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `;
  activeEl.innerHTML += "<hr/>";
});
console.log(activeEl);

//Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
  let inNewYork = false;

  if (business.addressStateCode === "NY") {
    inNewYork = true;
  }
  return inNewYork;
});

//console.log("New York Businesses:", newYorkBusinesses); // holding the value of the 2 arrays

const cityEl = document.querySelector("#by-city");
cityEl.innerHTML += `<h1>NY Businesses</h1>`;
newYorkBusinesses.forEach(business => {  // callback business holding the arrays returned from newYorkBusinesses function
  cityEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
    ${business.addressStateCode}
  </section>
  <section>
    ${business.addressCity}
  </section>
  `;
  cityEl.innerHTML += "<hr/>";
});

const manufacturingBusinesses = businesses.filter(business => {
  let isManufacturing = false;
  let industry = business.companyIndustry;
  //console.log("company Industry:", industry);
  if (industry === "Manufacturing") {
    isManufacturing = true;
  }
  return isManufacturing;
});

//console.log("manufacturing only:", manufacturingBusinesses);

const manufacturingEl = document.querySelector("#manufacturing");
manufacturingEl.innerHTML += "<h1>Manufacturing Businesses</h1>";
manufacturingBusinesses.forEach(business => {
  manufacturingEl.innerHTML += `
  <h2>${business.companyName}</h2>
  <section>
    ${business.addressFullStreet}
  </section>
`;
  manufacturingEl.innerHTML += "<hr/>";
});

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */

// // returns new array of purchasing agents...after ligtening exercise agentObj now holds vale of entire object.

const agents = businesses.map(agentObj => {
  return agentObj;
});

const agentEl = document.querySelector("#purchasing-agent");
agentEl.innerHTML += "<h1>Purchasing Agents</h1>";

console.table(agents);

agents.forEach(agentObj => {
  agentEl.innerHTML += `
  <h3>${agentObj.purchasingAgent.nameFirst} ${agentObj.purchasingAgent.nameLast}</h3>
  <h5>${agentObj.companyName}</h5>
  <h5>${agentObj.phoneWork}</h5>
  `;
  agents.innerHTML += "<hr/>";
});

// Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent,
// This is messy! Destructured would be cleaner.
