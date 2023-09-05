
// exercicio 1
let dia = "noite"
if (dia === "claro") {
    console.log ("O dia está claro")

}else {
    console.log("Está de noite")
}

// exercicio 2

let contador = 0;
while (contador < 20) {
    console.log((contador+=2));
}

// exercicio 3

function triplo(primeiroValor) {
   console.log(primeiroValor * 3);
 }
 triplo(5);

//  exercicio 4

function nome(Iuri) {
   console.log("Iuri");
 }
 nome();

//  exercicio 5

function exibirInfo(nome, idade, musica) {
       console.log(`Meu nome é ${nome} tenho ${idade} e gosto de ${musica}`);
     }
     exibirInfo("Iuri", 27, "rap");
 

//  exercicio 6
function exibirInfo(filme, musica) {
    console.log(`Meu filme preferido é ${filme} e minha musica favorita é ${musica}`);
  }
  exibirInfo("A casa dos sonhos","This is américa");

//  exercicio 7

function triplo(primeiroValor) {
    console.log(primeiroValor * 3);
  }
  triplo(13);

//   exercicio 8

let variavel = true;

 function verificar() {
   console.log(`A variável é ${variavel}`);
  if (variavel === true) {
    console.log("A variável é verdadeira!");
  } else {
    console.log("A variavel é falsa!");
  }
}
verificar();

// exercicio 9

let numeros = [
    {
      amigos: [13,30,2,3,31]} ]
      console.log(numeros)

    //   exercicio 10

    

    // exercicio 19
      
    let cadastro = [
        {
          nome: "Merry",
          idade: 16,
          telefone: 123,
          amigos: ["João", "Naiara", "Allan", "Agata"]
        },
        {
          nome: "Bruno",
          idade: 16,
          telefone: 123,
          amigos: ["Ester", "Savio", "Pietro", "Rafael"]
        },
        {
          nome: "Eliane",
          idade: 16,
          telefone: 123,
          amigos: ["Bruno", "Isaque", "Carla", "Luiz"]
        },
        {
          nome: "Santiago",
          idade: 16,
          telefone: 123,
          amigos: ["Janiele", "Iuri", "Muslin", "Isaque"]
        },
        {
          nome: "David",
          idade: 16,
          telefone: 123,
          amigos: ["Savio", "Iuri", "Gustavo", "Naiara"]
        }
      ];
      
      // exercicio 20 
      
     
      console.log(cadastro[0].amigos[0]);
      console.log(cadastro[1].amigos[1]);
      
      console.log(cadastro.amigos[0]);

