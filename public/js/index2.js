const p1 = document.querySelector("#information")

p1.addEventListener('click',async()=>{
    fetch(`https://www.abibliadigital.com.br/api/verses/nvi/gn/1`).then(response => {
    console.log(response);    
    return response.json();
    }).then(data=>{
        console.log(data);
        p1.textContent = `Autor do livro foi ${data.book.author}. \n Livro de ${data.book.name}. \n Versículos de ${data.chapter.number}
         á ${data.chapter.verses}  `
    })
})