var nome = prompt('Come ti chiami?');
console.log(nome);
var cognome = prompt('Quale è il tuo cognome?');
console.log(cognome);
var colore = prompt('Quale è il tuo colore preferito?');
console.log(colore);
var password = nome + cognome +  colore;
console.log(password)
document.getElementById('password').innerHTML = password + '19';
