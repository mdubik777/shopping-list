/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */



const x = 10;
const y = 20;
const r =30;


const texts = [
    "С любимыми <3",
    "Хочу на море, а не вот это все",
    "У меня лапки!",
    "Рецепт яблочного пирога",
    "В «Золотом Яблоке» скидки! Успевайте!!!",
  ];
  
  const container = document.querySelector(".posts");
  const template = document.querySelector("#post-template");
  
  function renderPosts() {
    const fragment = new DocumentFragment();
    // Создаем посты
    texts.forEach((text) => {
      const post = template.content.cloneNode(true);
      post.querySelector("p").textContent = text;
      
      fragment.append(post);
    });
    container.append(fragment);  
  }  
  renderPosts('xxxxx');
  
  container.addEventListener('click', (event) => {
    const like = event.target;
    console.log(event.target, 'event.target');
    // const quantity = like.querySelector("span");
    const quantity = event.target.closest(".post").querySelector("span");
      if(like.classList.contains("fa-heart")){
        if(like.classList.contains("active")){
          like.classList.remove("active");
          quantity.textContent = --quantity.textContent;
        } else{
          like.classList.add("active");
          quantity.textContent = ++quantity.textContent;
        }
      } 
  })