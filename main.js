import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"

const novaTarefa = document.querySelector('[data-form-button]')
var novaTarefaText = ""

const criarTarefa = (event) => {

    event.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    novaTarefaText = input.value
        
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content"> ${novaTarefaText}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa)   
    input.value = ""

}


novaTarefa.addEventListener('click', criarTarefa)
    



