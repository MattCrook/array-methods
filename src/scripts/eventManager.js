// import businesses from "../../api/data.js";

// const eventManager = {
//   searchCompanyEvent() {
//     document
//       .querySelector("#companySearch")
//       .value.querySelector("#purchasing-agent-search")
//       .value.addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//           /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//           const foundBusiness = businesses.find(business => {
//             business.companyName.includes(keyPressEvent.target.value);
//           });
//           foundBusiness.forEach(business => {
//             activeEl.innerHTML += `
//               <h2>${business.companyName}</h2>
//               <section>
//                 ${business.addressFullStreet}
//               </section>
//             `;
//             activeEl.innerHTML += "<hr/>";
//           });
//         }
//       });
//   },
//   searchCityEvent() {
//     document
//       .querySelector("#city-Search")
//       .value.addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//           /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//           const foundCity = businesses.find(business => {
//             business.addressStateCode.includes(keyPressEvent.target.value);
//           });
//           foundCity.forEach(business => {
//             cityEl.innerHTML += `
//                       <h2>${business.companyName}</h2>
//                       <section>
//                         ${business.addressFullStreet}
//                       </section>
//                     `;
//             cityEl.innerHTML += "<hr/>";
//           });
//         }
//       });
//   },
//   searchIndustryEvent() {
//     document
//       .querySelector("industry-Search")
//       .value.addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//           /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//           const searchBusinesses = businesses.filter(business => {
//             let industry = business.companyIndustry;
//             //console.log("company Industry:", industry);
//             if (industry === keyPressEvent.target.value) {
//             }
//             return isBusiness;
//           });
//           //console.log("manufacturing only:", manufacturingBusinesses);
//           const IndustryEl = document.querySelector("#manufacturing");
//           IndustryEl.innerHTML += "<h1>Manufacturing Businesses</h1>";
//           manufacturingBusinesses.forEach(business => {
//             IndustryEl.innerHTML += `
//                         <h2>${business.companyName}</h2>
//                         <section>
//                           ${business.addressFullStreet}
//                         </section>
//                       `;
//             IndustryEl.innerHTML += "<hr/>";
//           });
//         }
//       });
//   },
//   searchAgentEvent() {
//     document
//       .querySelector("industry-Search")
//       .value.addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//           /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//           const agents = businesses.map(agentObj => {
//             return agentObj;
//           });
//           const agentEl = document.querySelector("#purchasing-agent");
//           agentEl.innerHTML += "<h1>Purchasing Agents</h1>";

//           agents.forEach(agentObj => {
//             agentEl.innerHTML += `
//             <h3>${agentObj.purchasingAgent.nameFirst} ${agentObj.purchasingAgent.nameLast}</h3>
//             <h5>${agentObj.companyName}</h5>
//             <h5>${agentObj.phoneWork}</h5>
//             `;
//             agents.innerHTML += "<hr/>";
//           });
//         }
//       });
//   }
// };

// export default eventManager;
