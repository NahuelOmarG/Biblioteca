let biblioteca = []; //array (dentro do [] ira a ficar nossas informacao.)
//tamanho de array sempre comeca com a posicao 0 e a ultima -1 , sempre o array comeca em cero!
let inputTitulo = document.getElementById("cadTitulo");
let inputAutor = document.getElementById("cadAutor");
let inputGenero = document.getElementById("cadGen");
let inputEditora = document.getElementById("cadEditora");
let inputIsbn = document.getElementById("cadIsbn");
let acervo = document.getElementById("acervo");

function add(){
    let livro = {
        titulo:inputTitulo.value,
        autor:inputAutor.value,
        genero:inputGenero.value,
        editora:inputEditora.value,  
        isbn: inputIsbn.value // o "ultimo" atributo nao tem virgula.
    }
    biblioteca.push(livro);
    //parametro () = parentesis.
    inputTitulo.value = null; 
    inputAutor.value = null;
    inputGenero.value = null;
    inputEditora.value = null;
    inputIsbn.value = null
    listagem();  
}
function listagem(){
    let livros = ""; // straing vazia , ainda nao tem atributo (para cada livro contido na biblioteca , vai ser prenchedo os valores de cada imput , titulo , autor, genero, editora.)
    for(let livro of biblioteca){
        livros += "Titulo: " + livro.titulo+"<br>";
        livros += "Autor: " + livro.autor+"<br>";
        livros += "Genero: " + livro.genero+"<br>"
        livros += "Editora: " + livro.editora+"<br>";
        livros += "ISBN: " + livro.isbn+"<br>"; 
        livros += "---------------------------- <br>";
        }
    acervo.innerHTML = livros; //innerHTML , altera o paragrafo.
}

