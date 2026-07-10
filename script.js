
document.querySelectorAll('.flip-card').forEach(card=>{
  card.addEventListener('click',e=>{
    if(window.matchMedia('(hover: none)').matches && !card.classList.contains('is-flipped')){
      e.preventDefault();
      document.querySelectorAll('.flip-card.is-flipped').forEach(x=>{if(x!==card)x.classList.remove('is-flipped')});
      card.classList.add('is-flipped');
    }
  });
});
