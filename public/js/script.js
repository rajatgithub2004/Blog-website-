const allButtons = document.querySelectorAll('.searchBtn');
const searchBar = document.querySelector('.searchBar');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
document.addEventListener('DOMContentLoaded',function(){

  for(let i = 0;i<allButtons.length; i++){
    allButtons[i].addEventListener('click',function(){
      searchBar.style.visibility = "visible";
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded','true');
      searchInput.focus();   
    })
  }
})
searchClose.addEventListener('click',()=>{
  searchBar.style.visibility = 'hidden';
  searchBar.classList.remove('open');
  this.setAttribute('aria-expanded','false');
})