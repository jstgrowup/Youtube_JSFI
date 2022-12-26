//just because the event bubbling exists there is event delegation

// html
{
  /* <div>
<ul id="category">
  <li id="laptop">laptop</li>
  <li id="camera">camera</li>
  <li id="shops">Shops</li>
</ul>
</div> */
}
document.getElementById("category").addEventListener("click", (e) => {
  console.log(e.target);
  //   when clicking on any li elements the event is captured and from the parent element that is the categories id the
});
