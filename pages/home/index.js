const ul = document.querySelector('.ul_container');

function createcard(list){

    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4')
    const parag = document.createElement('p');
    const modalidade1 = document.createElement('button');
    const modalidade2 = document.createElement('button');
    const cadidatar = document.createElement('button');

    li.classList.add('posts_container');


    h2.innerText=list.title
    h3.innerText=list.enterprise
    h4.innerText=list.location
    parag.innerText=list.descrition
    modalidade1.innerText=list.modalities[0]
    modalidade1.classList.add('modalidade')
    modalidade2.innerText=list.modalities[1]
    modalidade2.classList.add('modalidade')
    cadidatar.innerText= 'Candidatar'
    cadidatar.classList.add('candidatar')
    cadidatar.dataset.id = list.id

    li.append(h2, h3, h4, parag, modalidade1, modalidade2, cadidatar);
    ul.appendChild(li)

    

}

function redercards(list){
    list.map(el => {
        createcard(el)
        
    });

}
redercards(jobsData)

function rederAside(array){
    const asideContainer = document.querySelector('.aside_container');
    const divcards = document.querySelector('.div_container');

      divcards.innerHTML = ''

      if(newList.length <= 0){
         createEmptyAside()
        
      }
      else{
       array.forEach( list => {
        const item = createCadAside(list)

        divcards.appendChild(item)

    })
  }
}

function removerAside(array){
    const removerbtns = document.querySelectorAll('.remover');

    removerbtns.forEach(button => {
        button.addEventListener('click', (e) => {
            const listInAside = array.find(list => {
                return list.newListId === Number(e.target.dataset.newListId)
            })

            const listIndex = array.indexOf(listInAside)

            array.splice(listIndex, 1)
        })
    })


}

function createEmptyAside(){
    const Container = document.querySelector('div');
    const titleH2 = document.createElement('h2');
    const msgP = document.createElement('p')
    
    Container.classList.add('div_container1')
    titleH2.innerText = 'Vagas selecionadas'
    msgP.innerText = 'Você ainda não aplicou para nenhuma vaga'
    
    Container.appendChild(titleH2, msgP)
    return Container


}
function createCadAside(list){
    const divcad = document.createElement('div')
    const titleH2 = document.createElement('h2');
    const enterpriseH3 = document.createElement('h3');
    const locationH4 = document.createElement('h4');
    const buttonRemover = document.createElement('img');

    titleH2.innerText=list.title
    enterpriseH3.innerText=list.enterprise
    locationH4.innerText=list.location

    buttonRemover.src='./assets/img/trash.png'
    buttonRemover.classList.add('remover')
    buttonRemover.dataset.newListId = list.newListId

    divcad.append(titleH2, enterpriseH3, locationH4, buttonRemover);

    return divcad
    
}
function addTocart(){
    const buttons = document.querySelectorAll('.candidatar');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const listfound = jobsData.find(list => {
                return list.id === Number(event.target.dataset.id)
    
            })
            const listTocart = {
                ...listfound,
                newListId: createCadAside.length + 1  
            }

            newList.push(listTocart)

            rederAside(newList)
        })
    })
}
rederAside(newList)
redercards(jobsData)
createCadAside(jobsData)
addTocart()