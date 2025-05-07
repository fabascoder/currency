function scroll() {
    const links = document.querySelectorAll('.js-lista a');
  
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        const id = this.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        console.log(target);
        if (!target) return;
  
        const startPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top;
        const distance = targetPosition;
        const duration = 600;
        let start = null;
  
        function animationScroll(timestamp) {
          if (!start) start = timestamp;
          const timeElapsed = timestamp - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animationScroll);
        }
  
        function ease(t, b, c, d) {
          // easeInOutCubic
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }
  
        requestAnimationFrame(animationScroll);
      });
    });
}scroll();
  

    const nameTitle = document.querySelector('.name-title');
    const sec2 = document.querySelector('.sec-3');
    const btn = document.querySelector('.button-prin');
    const btnReload = document.querySelector('.button-reload');
    nameTitle.innerHTML = "-";
    const nomeOriginal = [''];
    const nomes = nomeOriginal.filter(item => item !== "")

    function nomeSelecionado() {
      if(nomes.length > 0 && nomes.every(item => item !== "")) {
      let loop = Math.floor(Math.random() * nomes.length);
      nameTitle.innerHTML = nomes[loop];
      nameTitle.classList.add('active-div');
      sec2.classList.add('sec-3-active');
      btnReload.classList.add('reload-active');
      console.log(nomes);
      btn.classList.add('button-active');
      }
    }
    btn.addEventListener('click', nomeSelecionado)
  

  
    function reloadAtivo() {
      btn.disabled = false;
      nameTitle.classList.remove('active-div');
      sec2.classList.remove('sec-3-active');
      btnReload.classList.remove('reload-active');
      btn.classList.remove('button-active');
      nameTitle.innerHTML = "-";
    }
  
    btnReload.addEventListener('click', reloadAtivo);
  
    const btnName = document.querySelector('.btn-name');
    const nameText = document.querySelector('.name-text');
  
    function btnNameActive() {
      let res = document.querySelector('.result');
      const ul = document.querySelector('.nomes-disponiveis');
      const nome = nameText.value.trim();
      if (nome === "") {
        res.innerHTML = 'Digite um nome válido!';
        res.style.color = 'red';
        return;
      }
  
      if (nomes.includes(nome)) {
        res.innerHTML = 'Esse nome já existe!';
        res.style.color = 'red';
        return;
      }
  
      nomes.push(nome); 
      res.innerHTML = 'Nome adicionado com sucesso!';
      res.style.color = '#1B72BF';
  
      const li = document.createElement('li');
      const hr = document.createElement('hr');
      li.textContent = nome;
      ul.appendChild(li);
      li.appendChild(hr);
  
      nameText.value = "";
    }
  
    btnName.addEventListener('click', btnNameActive);
  

  