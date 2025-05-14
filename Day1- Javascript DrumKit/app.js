window.addEventListener('click', ()=>{
  e.preventDefault();
  //e.stopPropagation();
    document.querySelector('input').focus();
  });
  window.addEventListener('keydown', p);
function p(e) {
  d = (d) => document.querySelector(d);
  k = e.keyCode;
  a = d(`audio[data-key="${k}"]`);
  key = d(`div[data-key="${k}"]`);
  if (!a) return;
  key.classList.add('playing');
  a.currentTime = 0;
  a.play();
  setTimeout(() => {
    key.classList.remove('playing');}
  ,50); 
};