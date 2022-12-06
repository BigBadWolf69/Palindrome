function Palindrome(entree)
{}
Palindrome();
var entree = prompt("Veuillez saisir votre mot").toLowerCase();
entree_1 = [...entree].reverse().join('');

if (entree === "") {
    alert('Veuillez saisir un mot d\'abord');
}

else if (entree === entree_1) {
    alert(entree + ' est un palindrome');
}

else {
    alert(entree + ' n\'est pas un palindrome');
}