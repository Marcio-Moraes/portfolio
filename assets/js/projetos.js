const m = (el)=>document.querySelector(el);
const ms = (el)=>document.querySelectorAll(el);


projetosLista.map((item, index)=>{
  let modeloProjeto = m('.item_projeto').cloneNode(true);
  let classeTipo = item.classTipo;
  
  modeloProjeto.setAttribute('data-key', index);
  modeloProjeto.setAttribute('data-class', classeTipo);
  modeloProjeto.querySelector('.item_projeto img').src = item.img;
  modeloProjeto.querySelector('.item_projeto img').alt = item.description;
  modeloProjeto.querySelector('.live_preview').innerHTML = item.name;
  modeloProjeto.querySelector('.live_preview').href = item.link;


  // github
  modeloProjeto.querySelector('.div_code_github a').href = item.gitcode;
  // m('.div_insert_projetos.projetos_home').append(modeloProjeto);
  m('.div_insert_projetos.projetos_home').append(modeloProjeto);

  // div_tecnologias_item
  modeloProjeto.querySelector('.div_tecnologias_item').innerHTML = item.tecnologias;

  // div_description_item
  modeloProjeto.querySelector('.div_description_item').innerHTML = item.description;
  
});

let projetosExibidos = ms('.div_insert_projetos .item_projeto');
projetosExibidos.forEach((e)=>{
  let atributoItem = e.getAttribute('data-class');
  e.classList.add(atributoItem);
});
