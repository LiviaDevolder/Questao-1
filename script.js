function estoque() {
    var pessoas = prompt("Digite a quantidade de pessoas na fila de vacinação. Utilize apenas números.");
    var vacinas = []
    var cv = 0
    var az = 0

    if (pessoas == null || pessoas == 0) {
        alert("O campo foi preenchido incorretamente ou não foi preenchido, a página será recarregada!");
        document.location.reload()
    } else {
        do {
            vacinas.push(prompt("Digite o tipo de vacina de cada pessoa. CoronaVac = 1 e AstraZenca = 2. Se o tipo de vacina digitado for inválido, automaticamente o paciente será vacinado com AstraZeneca."))
        } while (vacinas.length < pessoas);
        for (let i = 0; i < vacinas.length; i++) {
            if (vacinas[i] == 1) {
                cv += 1
            } else {
                az += 1
            }
        }
        var estoqueC = prompt("Digite a quantidade de vacinas CoronaVac disponíveis. Se o número não for válido, automáticamente o valor será interpretado como 0.")
        var restoc = estoqueC - cv


        var estoqueA = prompt("Digite a quantidade de vacinas AstraZeneca disponíveis. Se o número não for válido, automáticamente o valor será interpretado como 0.")
        var restoa = estoqueA - az


        if (restoc >= 0 && restoa >= 0) {
            document.getElementById("res").innerHTML = "<p>Há vacinas disponíveis para todos os pacientes na fila.</p>"           
        } else {
            document.getElementById("res").innerHTML = "<p><strong>Não</strong> há vacinas disponíveis para todos os pacientes na fila.</p>"
        }
    }
}