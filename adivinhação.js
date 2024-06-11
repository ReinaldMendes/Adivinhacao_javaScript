let usuario;
let tentativa = 0;
let dificuldade;
let aleatorio;
let inFatorialChallenge = false;

console.log(
  "Escolha sua dificuldade: \n" +
    "10 ----Facil----\n" +
    "50 ----Medio----\n" +
    "100 ----Dificil----\n" +
    "200 ----Hard----\n"
);

process.stdin.on("data", function (data) {
  const input = data.toString().trim();
  if (tentativa == 5) {
    console.log(
      "Você já gastou 5 tentativas, mais ainda da tempo de ganhar, o numero era o " +
        aleatorio +
        " mais ele fugiu. \n Agora continue escolhendo, você tem mais 5 tentativas"
    );
    aleatorio = Math.floor(Math.random() * dificuldade);
  }
  if (!dificuldade) {
    // Escolha da dificuldade
    dificuldade = Number(input);
    if (![10, 50, 100].includes(dificuldade)) {
      console.log("Escolha inválida. Reinicie o jogo e escolha 10, 50 ou 100.");
      process.exit();
    }
    aleatorio = Math.floor(Math.random() * dificuldade);
    console.log(aleatorio);
    console.log("Tente adivinhar o número!");
  } else if (input.toLowerCase() === "sair" || tentativa >= 10) {
    console.log(
      tentativa >= 10
        ? "Acabaram suas tentativas por hoje, volte amanhã."
        : "O jogo está encerrado"
    );
    process.exit();
  } else if (inFatorialChallenge) {
    // Desafio do fatorial
    const resposta = Number(input);
    if (resposta === calcularFatorial(aleatorio)) {
      console.log("Correto! Você pode continuar jogando.");
      tentativa = 0;
      aleatorio = Math.floor(Math.random() * dificuldade);
      console.log("Vamos lá..., adivinhe o próximo número.");
      inFatorialChallenge = false;
    } else {
      console.log(
        `Errado! O fatorial de ${aleatorio} é ${calcularFatorial(
          aleatorio
        )}. Jogo encerrado.`
      );
      process.exit();
    }
  } else {
    // Jogo de adivinhação
    usuario = Number(input);
    tentativa++;

    if (usuario === aleatorio) {
      console.log("Uhuuuul, você encontrou o número!");

      // Novo desafio: Calcular o fatorial
      console.log(`Para continuar, calcule o fatorial de ${aleatorio}:`);
      inFatorialChallenge = true;
    } else if (usuario === Math.floor(aleatorio * 0.9)) {
      console.log(
        "Você está quente. O número digitado está 90% próximo do número correto."
      );
    } else if (usuario === Math.floor(aleatorio * 0.1)) {
      console.log(
        "Você está frio. O número está 1% próximo do número correto."
      );
    } else {
      console.log("Não foi dessa vez, digite outro número.");
    }
  }
});

function calcularFatorial(n) {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
    console.log(fatorial);
  }
  return fatorial;
}
