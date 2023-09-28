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
        // console.log(book);
        data.forEach((element) => {
            form_select.innerHTML += `<option value="${element.abbrev.pt}">${element.name}</option>`
        });
    })
}   
init();
//Pega o Livro escolhido e traz os versiculos
form_select.addEventListener("input", () => {
        fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${form_select.value}/${'1'}`).then(response => {
            // console.log(response);    
            return response.json();
        }).then(data => {
            book.forEach((element)=>{
                console.log(data,"===========>",element);
                if(data.book.name == element.name){
                    for (let i = 1; i < element.chapters; i++) {
                        form_captule.innerHTML += `<option value="${i}">${i}</option>`
                    }
                }
                // console.log("Book elemento=>",element,"versos name", data.book.name);
            })
            list_outhors = data.book.author.split(",")
            console.log(data);
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

    const addText =()=>{
        fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${form_select.value}/2`).then(response => {
            // console.log(response);    
            return response.json();
        }).then(data => {
            list_outhors = data.book.author.split(",")
            console.log(data);
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
    }

    buttom_submit.addEventListener("click",()=>{

    })