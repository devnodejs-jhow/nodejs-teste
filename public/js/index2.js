const p1 = document.querySelector("#information")
const div_content = document.querySelector("#content")
const form_select = document.querySelector("#select-book")
const form_captule = document.querySelector("#select-capitule")
const buttom_submit = document.querySelector("#buttom-submit")
let index = 0
let list_outhors;
let book = [];

//Aqui ele carrega a lista de livros no select

const init = () => {

    fetch(`https://www.abibliadigital.com.br/api/books`).then(response => {  
        return response.json();
    }).then(data => {
        book.push(...data);
        // //console.log(book);
        data.forEach((element) => {
            form_select.innerHTML += `<option value="${element.abbrev.pt}">${element.name}</option>`
        });
    })
}   
init();
//Pega o Livro escolhido e traz os versiculos
form_select.addEventListener("input", () => {
    book.forEach((element)=>{
        //console.log(form_select.value == element.abbrev.pt);
        if(form_select.value == element.abbrev.pt){
            for (let i = 1; i < element.chapters; i++) {
                form_captule.innerHTML += `<option value="${i}">${i}</option>`
            }
        }
        // //console.log("Book elemento=>",element,"versos name", data.book.name);
    })

    })

    form_captule.addEventListener("input", ()=>{
        //console.log(form_captule.value);
            fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${form_select.value}/${form_captule.value}`).then(response => {
                // //console.log(response);    
                return response.json();
            }).then(data => {
                list_outhors = data.book.author.split(",")
                //console.log(data);
                 p1.textContent = `Livro ${data.book.name} ` + list_outhors != 0 ? `Autores `:`autor ${data.book.author}`  
                if(list_outhors != 0){
                    for (let i = 0; i < list_outhors.length; i++) {
                        p1.textContent  += `${list_outhors[i]},`;
    
                    }
                    }
                data.verses.forEach(element => {
                   index++
                   div_content.innerHTML += ` ${index} ${element.text}`
    
                });
            })
    
    })