const subSabbi = document.getElementById("sub-sab-dropdownContent");
    const subCol = document.getElementById("sub-col-dropdownContent");
    const removeElem3 = document.getElementById('sub-sab-dropdownContentchevron');
    const removeElem4 = document.getElementById('sub-col-dropdownContentchevron');

function clearSubs() {
  if (subSabbi.classList.contains('show')) {
    subSabbi.classList.remove('show');
    removeElem3.classList.remove('rotate')
  }
    if (subCol.classList.contains('show')) {
    subCol.classList.remove('show');
    removeElem4.classList.remove('rotate')
  }    
}

function removeChanges(toChange, toChange2) {
  toChange.classList.remove('rotate');
  toChange2.classList.remove('iconAnimation');
}

function toggleDropdown(param) {
  document.getElementById(param).classList.toggle("show");
  document.getElementById(param + 'chevron').classList.toggle("rotate");
  document.getElementById(param + 'icon').classList.toggle("iconAnimation");
}  
function toggleSubContent(param) {
  document.getElementById(param).classList.toggle("show");
  document.getElementById(param + 'chevron').classList.toggle("rotate");
}

window.addEventListener("click", function(e) {
  if (!e.target.matches('.shopButton') && !e.target.matches('.subContentButton')) {
    const shopDropContent = document.getElementById("shopDropContent");
    const removeElem = document.getElementById('shopDropContentchevron');
    const removeElem2 = document.getElementById('shopDropContenticon');

    if (shopDropContent.classList.contains('show')) {
      shopDropContent.classList.remove('show');
      removeChanges(removeElem, removeElem2);
    };
    clearSubs();
  };
  if (!e.target.matches('.menuButton') && !e.target.matches('.subContentButton')) {
    const dropdownContent = document.getElementById("dropdownContent");
    const removeElem = document.getElementById('dropdownContentchevron');
    const removeElem2 = document.getElementById('dropdownContenticon');

    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
      removeChanges(removeElem, removeElem2);    
    };    
    clearSubs();
  };
});


const triggerScrollPosition = 2100;
const stopPosition = 2500;


const resizableElement = document.getElementById("resizableElement");

window.addEventListener("scroll", function() {
 
    const scrollPosition = window.scrollY;

    const initialWidth = 100;
  const initialHeight = 100;
  const finalWidth = 200;
  const finalHeight = 200;

    if (scrollPosition >= triggerScrollPosition && scrollPosition <= stopPosition) {
     
      resizableElement.style.width = newWidth + "px";
      resizableElement.style.height = newHeight + "px";
    }


 
});
