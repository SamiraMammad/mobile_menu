// const items = document.querySelectorAll(".active");
// items.forEach(con => {
    // *console.log(con);
//   const button = con.querySelector(".plus");
//  * console.log(button);
//   const content = con.querySelector(".submenu");
// *console.log(content);
//  con.addEventListener("click", () => {
//     if (
//         con.classList.contains('open')) {
//       con.classList.remove('open');
//       button.style.transform = "rotate(0deg)"; 
//       button.style.transition = 'transform 0.3s ease';
    
//       content.style.maxHeight = null;
//     } else {
//       items.forEach(subcon => {
//         subcon.querySelector(".plus").style.transform = "rotate(0deg)"; 
//         subcon.classList.remove('open');
//         subcon.querySelector(".submenu").style.maxHeight = null;
//       button.style.transition = 'transform 0.3s ease';

//       });
//       con.classList.add('open');
//       button.style.transform = "rotate(45deg)"; 
//       content.style.maxHeight = content.scrollHeight + "px";
//       button.style.transition = 'transform 0.3s ease';

//     }
//   });
// });

const items = document.querySelectorAll(".active");
items.forEach(con => {
  const button = con.querySelector(".plus");
  const content = con.querySelector(".submenu");
  
  con.addEventListener("click", () => {
    con.classList.toggle('open');
    button.style.transform = con.classList.contains('open') ? "rotate(45deg)" : "rotate(0deg)"; 
    content.style.maxHeight = con.classList.contains('open') ? content.scrollHeight + "px" : null;
  });
});


