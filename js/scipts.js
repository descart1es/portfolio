//class Bankaccount{
   // constructor(owner,balance){
        //this.owner = descartes;
       // this.balance  = 100;
    //}
   // showbalance(){
      //console.log('solde:' + this.balance + 'Euro')
   // }
//}
//const newAccount = new BankAccount("Will Alexander", 500);

//newAccount.showBalance(500); // imprime "Solde: 500 EUR" à la console
//const account = new Bankaccount('descartes', 100);
//console.log('affichersold')
class Livre{
  constructor(titre,auteur,nbrepages){
    this.titre = titre;
    this.auteur = auteur;
    this.nbrepages = nbrepages;

  }
}
let monLivre = new Livre("georges orwell", "Orwell", 100);
let Livre2 = new Livre("georges orwell", "Orwell", 300);
console.log(monLivre);
console.log(Livre2);