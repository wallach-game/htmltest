const contentData = {
    domu: "domu",
    omne: "omne",
    galerie: "galerie",
    dalsi: "dalsi"
  };
  
  //this should not break stuff  
  //   const switchContent = (contentKey) => {
      //     switch (contentKey) {
          //       case "domu":
          //         // switch to 'domu' content
          //         break;
          //       case "omne":
          //         // switch to 'omne' content
          //         break;
          //       case "galerie":
          //         // switch to 'galerie' content
          //         break;
          //       case "dalsi":
          //         // switch to 'dalsi' content
          //         break;
          //       default:
          //         break;
          //     }
          //   };
          
          const loadContent = (contentKey) => {
              fetch(`./content/${contentKey}.html`)
              .then((response) => response.text())
              .then((data) => contentData[contentKey] = data);
            };
            
  // load content data
  Object.keys(contentData).forEach((key) => loadContent(key));
  
  // add event listeners to buttons
  document.querySelectorAll("#domubtn").forEach((btn) => btn.addEventListener("click", () => switchContent("omne")));
  document.querySelectorAll("#sluzbybtn").forEach((btn) => btn.addEventListener("click", () => switchContent("galerie")));
  document.querySelectorAll("#omnebtn").forEach((btn) => btn.addEventListener("click", () => switchContent("domu")));
  document.querySelectorAll("#kontaktbtn").forEach((btn) => btn.addEventListener("click", () => switchContent("dalsi")));
  
  /*
  <li><a href="#" id="domubtn" >Domů</a></li>
          <li><a href="#" id="sluzbybtn" >Služby</a></li>
          <li><a href="#" id="omnebtn">O mně</a></li>
          <li><a href="#" id="kontaktbtn">Kontakt</a></li>
  */
  
  //disabled fotogalery logic
  //   const openImage = (src) => {
      //     const modal = document.querySelector(".modal");
      //     const modalImg = document.querySelector(".modal-content");
      //     const captionText = document.querySelector(".caption");
      
//     modal.style.display = "block";
//     modalImg.src = src;
//   };
  
const body = document.querySelector('body');

let angle = 137;

setInterval(() => {
  angle = (angle + 0.5) % 360;
//   body.style.backgroundImage = `linear-gradient(${angle}deg, rgba(237, 187, 190, 1) 0%, rgba(244, 208, 207, 1) 45%, rgba(237, 187, 190, 1) 100%)`;
  body.style.backgroundImage = `linear-gradient(${angle}deg, rgba(237, 187, 190, 1) 0%, rgba(244,208,207,1) 41%, rgba(244,208,207,1) 61%, rgba(237, 187, 190, 1) 100%)`;
}, 50);
  