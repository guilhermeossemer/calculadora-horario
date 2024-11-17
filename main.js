function calcularSaida() {
    // Pega os valores do input
    const entrada = document.getElementById("entrada").value;
    const saidaAlmoco = document.getElementById("saidaAlmoco").value;
    const voltaAlmoco = document.getElementById("voltaAlmoco").value;
    const horasTrabalho = document.getElementById("horasTrabalho").value;

    if (!entrada || !saidaAlmoco || !voltaAlmoco || !horasTrabalho) {
        document.getElementById("resultado").textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Converte os horários para minutos
    const [entradaHoras, entradaMinutos] = entrada.split(":").map(Number);
    const [saidaAlmocoHoras, saidaAlmocoMinutos] = saidaAlmoco.split(":").map(Number);
    const [voltaAlmocoHoras, voltaAlmocoMinutos] = voltaAlmoco.split(":").map(Number);
    const [horasTrabalhoHoras, horasTrabalhoMinutos] = horasTrabalho.split(":").map(Number);

    const entradaTotalMinutos = entradaHoras * 60 + entradaMinutos;
    const saidaAlmocoTotalMinutos = saidaAlmocoHoras * 60 + saidaAlmocoMinutos;
    const voltaAlmocoTotalMinutos = voltaAlmocoHoras * 60 + voltaAlmocoMinutos;
    const horasTrabalhoTotalMinutos = horasTrabalhoHoras * 60 + horasTrabalhoMinutos;

    // Calcula o tempo trabalhado antes do almoço
    const trabalhoAntesAlmoco = saidaAlmocoTotalMinutos - entradaTotalMinutos;

    // Calcula o tempo restante de trabalho após o almoço
    const tempoRestanteTrabalho = horasTrabalhoTotalMinutos - trabalhoAntesAlmoco;

    // Calcula o horário de saída
    const horarioSaidaTotalMinutos = voltaAlmocoTotalMinutos + tempoRestanteTrabalho;
    const horarioSaidaHoras = Math.floor(horarioSaidaTotalMinutos / 60);
    const horarioSaidaMinutos = horarioSaidaTotalMinutos % 60;

    // Formata o horário de saída
    const horarioSaida = `${String(horarioSaidaHoras).padStart(2, '0')}:${String(horarioSaidaMinutos).padStart(2, '0')}`;

    document.getElementById("resultado").textContent = "Horário de Saída: " + horarioSaida;
}