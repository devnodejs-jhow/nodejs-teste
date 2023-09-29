
const p1 = document.querySelector("#information")

const div_content = document.querySelector("#content")

const form_select = document.querySelector("#select-book")

const form_captule = document.querySelector("#select-capitule")

const buttom_submit = document.querySelector("#buttom-submit")

const p_invisyble = document.querySelectorAll('.text-temp')

const hidden_form = document.querySelectorAll(".container-form")

const buttom_return = document.querySelector("#btn")

let index = 0

let list_outhors;

let book = [];

//Aqui ele carrega a lista de livros no select

const init = () => {

    fetch(`https://www.abibliadigital.com.br/api/books`).then(response => {

        return response.json();

    }).then(data => {

        book.push(...data);

        data.forEach((element) => {

            form_select.innerHTML += `<option value="${element.abbrev.pt}">${element.name}</option>`

        });

    })

}

init();

//Pega o Livro escolhido e traz os versiculos

form_select.addEventListener("input", () => {

    book.forEach((element) => {

        //console.log(form_select.value == element.abbrev.pt);

        if (form_select.value == element.abbrev.pt) {

            for (let i = 1; i < element.chapters; i++) {

                form_captule.innerHTML += `<option value="${i}">${i}</option>`

            }

        }

        // //console.log("Book elemento=>",element,"versos name", data.book.name);

    })

})

form_captule.addEventListener("input", () => {

    p_invisyble.forEach(element => {

        element.setAttribute('style', 'display:none')

        console.log(element);

    })
    hidden_form.forEach(element => {

        element.setAttribute('style', 'display:none')

        console.log(element);

    })

    buttom_return.setAttribute("style", "diplay:block")

    //console.log(form_captule.value);

    fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${form_select.value}/${form_captule.value}`).then(response => {

        // //console.log(response);    

        return response.json();

    }).catch(error => console.log(error)).then(data => {

        list_outhors = data.book.author.split(",")

        //console.log(data);

        p1.append(`<h3>Livro ${data.book.name} ` + list_outhors != 0 ? `Autor(a) ` : `Autor(a) ${data.book.author}</h3>`)

        if (list_outhors != 0) {

            for (let i = 0; i < list_outhors.length; i++) {

                p1.append(`${list_outhors[i]}`);

            }

        }

        data.verses.forEach(element => {

            index++

            p1.innerHTML += ` <p>${index} ${element.text}</p>`



        });

    }).catch(error => console.log(error))



})

buttom_return.addEventListener("click",()=>{
    location.reload()
})