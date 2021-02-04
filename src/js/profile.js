// export const profile = document.getElementById('profile');
// console.log(profile);
// if (profile) {
//   const infoDefault = document.getElementById('info-default');
//   const addressDefault = document.getElementById('address-default');

//   // Toggling from default state to edit state
//   let infoEditState = false;
//   let addressEditState = false;
//   // Info html Content
//   let infoDefaultStateContent = `
//       <h2 class="info-title">basic info</h2>
//             <ul>
//               <li>
//                 <span class="key">username :</span>
//                 <span class="value">harry</span>
//               </li>
//               <li>
//                 <span class="key">email :</span>
//                 <span class="value">harry@example.com</span>
//               </li>
//               <li>
//                 <span class="key">phone :</span>
//                 <span class="value">9874563210</span>
//               </li>
//               <li>
//                 <span class="key">account status :</span>
//                 <span class="value">active</span>
//               </li>
//               <li id="infoEdit-btn" class="edit-btn">
//                 <i class="fas fa-user-edit"></i>
//               </li>
//             </ul>
//       `;
//   let infoEditStateContent = `
//       <h2 class="info-title">edit basic info</h2>
//             <form action="#" id="basic-info-edit">
//               <ul>
//                 <li>
//                   <label for="username">username :</label>
//                   <input type="text" name="username" id="username">
//                 </li>
//                 <li>
//                   <label for="email">email :</label>
//                   <input type="email" name="email" id="email">
//                 </li>
//                 <li>
//                   <label for="phone">phone :</label>
//                   <input type="text" name="phone" id="phone">
//                 </li>
//                 <li>
//                   <span class="key">account status :</span>
//                   <span class="value">active</span>
//                 </li>
//                 <li>
//                   <button id="info-save" type="submit"><i class="far fa-save"></i></button>
//                   <a id="info-cancel" type="submit"><i class="fas fa-times"></i></a>
//                 </li>
//               </ul>
//             </form>
//           `;

//   // address html Content
//   let addressDefaultStateContent = `
//             <h2 class="info-title">shipping address</h2>
//             <ul>
//               <li>
//                 <span class="key">street :</span>
//                 <span class="value">46 Omege Street,</span>
//               </li>
//               <li>
//                 <span class="key">city :</span>
//                 <span class="value">boston</span>
//               </li>
//               <li>
//                 <span class="key">state :</span>
//                 <span class="value">Massachusetts</span>
//               </li>
//               <li>
//                 <span class="key">zip code :</span>
//                 <span class="value">456018</span>
//               </li>
//               <li>
//                 <span class="key">country :</span>
//                 <span class="value">USA</span>
//               </li>
//               <li id="addressEdit-btn" class="edit-btn">
//                 <i class="fas fa-user-edit"></i>
//               </li>
//             </ul>
//   `;
//   let addressEditStateContent = `
//           <h2 class="info-title">edit shipping address</h2>
//             <form action="#" id="basic-info-edit">
//               <ul>
//                 <li>
//                   <label for="street">street :</label>
//                   <input type="text" name="street" id="street">
//                 </li>
//                 <li>
//                   <label for="city">city :</label>
//                   <input type="text" name="city" id="city">
//                 </li>
//                 <li>
//                   <label for="state">state :</label>
//                   <input type="text" name="state" id="state">
//                 </li>
//                 <li>
//                   <label for="zip">zip code :</label>
//                   <input type="text" name="zip" id="zip">
//                 </li>
//                 <li>
//                   <label for="country">country :</label>
//                   <input type="text" name="country" id="country">
//                 </li>
//                 <li>
//                   <button id="address-save" type="submit"><i class="far fa-save"></i></button>
//                   <a id="address-cancel" type="submit"><i class="fas fa-times"></i></a>
//                 </li>
//               </ul>
//             </form>
//   `;

//   if (infoDefault) {
//     infoDefault.innerHTML = infoDefaultStateContent;
//     addressDefault.innerHTML = addressDefaultStateContent;
//   }

//   const infoEdit = document.getElementById('info-edit');
//   const infoEditBtn = document.getElementById('infoEdit-btn');
//   const addressEdit = document.getElementById('address-edit');
//   const addressEditBtn = document.getElementById('addressEdit-btn');

//   infoEditBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     infoEditState = true;
//     if (infoEditState) {
//       infoDefault.classList.add('edit');
//       infoDefault.innerHTML = infoEditStateContent;
//     }
//   });

//   addressEditBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     addressEditState = true;
//     if (addressEditState) {
//       addressDefault.classList.add('edit');
//       addressDefault.innerHTML = addressEditStateContent;
//     }
//   });
// }

// const forgotPassword = document.querySelector('#forgotpwd');

// console.log(location);
// forgotPassword.addEventListener('submit', (e) => {
//   e.preventDefault();
//   location.href = '/resetMsg.html';
// });
