import businesses from "../../api/data.js";

// output section block id's
const activeBus = document.querySelector("#active-businesses");
const byCity = document.querySelector("#by-city");
const byIndustry = document.querySelector("#manufacturing");
const byAgent = document.querySelector("#purchasing-agent");

//const category = document.getElementById("dropdown-btn").value;

// functions that hold html what will be rendered to dom. These are the "factories".
const businessSelectOutputFunction = category => {
    return
  category.innerHTML += "<h1>Active Businesses</h1>";
  businesses.forEach(business => {
    category.innerHTML += `
    <h2>${business.companyName}</h2>
    <h3>${business.companyIndustry}</h3>
    <section>
      ${business.addressFullStreet}, ${business.addressStateCode}
    </section>
    <br>
    <section>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</section>
    <h5>${business.phoneWork}</h5>

  `;
    category.innerHTML += "<hr/>";
  });
};

const citySelectOutputFunction = category => {
    return
  category.innerHTML += `<h1>Businesses By State</h1>`;
  businesses.forEach(business => {
    category.innerHTML += `
      <h2>${business.addressStateCode}</h2>
      <section>
      ${business.addressFullStreet}
      </section>
      <h2>${business.companyName}</h2>
      <h3>${business.companyIndustry}</h3>
      <section>
        ${business.addressFullStreet}
      </section>
      <br>
      <section>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</section>
      <h5>${business.phoneWork}</h5>
      `;
    category.innerHTML += "<hr/>";
  });
};

const industrySelectOutputFunction = category => {
    return
  category.innerHTML += `<h1>Businesses By Industry</h1>`;
  businesses.forEach(business => {
    category.innerHTML += `
      <h2>${business.companyIndustry}</h2>
      <h2>${business.companyName}</h2>
      <h2>${business.addressStateCode}</h2>
      <section>
        ${business.addressFullStreet}
      </section>
      <br>
    <section>
      ${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</section>
    <h5>${business.phoneWork}</h5>
    `;
    category.innerHTML += "<hr/>";
  });
};

const agentSelectOutputFunction = category => {
    return
  category.innerHTML += "<h1>Purchasing Agents</h1>";
  businesses.forEach(business => {
    byAgent.innerHTML += `
        <h3>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h3>
        <h5>${business.companyName}</h5>
        <h5>${business.phoneWork}</h5>
        `;
    byAgent.innerHTML += "<hr/>";
  });
};

// helper functions to give value of what was clicked
// write logic that specifies which cat was clicked...if btn.value === "businesses" fire that etc...

// function to handle rendering the selection to the dom. Will eventally call this with a select "factory".
const renderSelection = (selectionHTML) => {
    const outputContainer = document.querySelector(".output");
    outputContainer.innerHTML += selectionHTML
};




// this function responsible for logic when user clicks the businesses option on drop down. Calls businessSelectOutputFunction to render html structure to DOM
const businessSelect = () => {
  const category = document.getElementById("business--btn");
  category.innerHTML = "";
  const id = category.value;
  if (id === "businesses") {
    category.innerHTML += businessSelectOutputFunction(activeBus);
  }
};

// this function responsible for logic of when user clicks the city name option on drop down. Calls the citySelectOutputFunction to render html structure
const citySelect = () => {
  const category = document.getElementById("city--btn");
  category.innerHTML = "";
  const id = category.value;
  if (id === "city") {
    citySelectOutputFunction(byCity);
  }
};
// function for when user clicks the Industry selection
const industrySelect = () => {
  const category = document.getElementById("industry--btn");
  category.innerHTML = "";
  const id = category.value;
  if (id === "industry") {
    industrySelectOutputFunction(byIndustry);
  }
};

// function for when the user selects the purchasing agent in dropdown
const agentSelect = () => {
  const category = document.getElementById("agent--btn");
  category.innerHTML = "";
  const id = category.value;
  if (id === "agent") {
    agentSelectOutputFunction(byAgent);
  }
};

// function responsible for click event. it listens to button and based on the selection choice fires the appropriate event handler
const addDropDownEventListener = () => {
  const dropdownButton = document.querySelector("#dropdown-btn");

  dropdownButton.addEventListener("click", businessSelect);
  dropdownButton.addEventListener("click", citySelect);
  dropdownButton.addEventListener("click", industrySelect);
  dropdownButton.addEventListener("click", agentSelect);
};


addDropDownEventListener();

// add event listener to button
// clickFunction = () => {
//     document.addEventListener("click", () => {
//         const category = document.getElementById("dropdown-btn").value;  // grab value of what was clicked
