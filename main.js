const form = document.getElementById("form-cadastro");

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeContato = document.getElementById("name");
  const numeroContato = document.getElementById("phone");

  let linha = "<tr>";

  linha += `<td>${nomeContato.value}</td>`;
  linha += `<td>${numeroContato.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;

  nomeContato.value = "";
  numeroContato.value = "";
});
