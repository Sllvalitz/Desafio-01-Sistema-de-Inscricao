// Faz com que a seleção da trilha seja funcional
document.querySelectorAll('.path-option').forEach(option => {
    option.addEventListener('click', function () {
        document.querySelectorAll('.path-option').forEach(el => el.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Cria a função de avançar ou retroceder as abas de inscrição, além de criar a função de inscrever-se
let currentStep = 1;

function nextStep() {
    const currentGroup = document.querySelector(`.input-group-step[data-step="${currentStep}"]`);
    const nextGroup = document.querySelector(`.input-group-step[data-step="${currentStep + 1}"]`);

    if (currentGroup && nextGroup) {
        currentGroup.style.display = 'none';
        nextGroup.style.display = 'block';
        currentStep++;
    }
}

function returnStep() {
    const currentGroup = document.querySelector(`.input-group-step[data-step="${currentStep}"]`);
    const returnGroup = document.querySelector(`.input-group-step[data-step="${currentStep - 1}"]`);

    if (currentGroup && returnGroup) {
        currentGroup.style.display = 'none';
        returnGroup.style.display = 'block';
        currentStep--;
    }
}

// Cria a função de inscrição, ao clicar em inscrever-se manda o candidato a primeira aba de isncrição para revisar os dados e somente após o segundo clique que realmente sera efetuada a isncrição
let review = false;     

function submitStep() {
    if (!review) {
        currentStep = 1;        
        document.querySelectorAll('.input-group-step').forEach(el => el.style.display = 'none'); 
        document.querySelector(`.input-group-step[data-step="1"]`).style.display = 'block'; 
        review = true;        
    } else {
        alert("Inscrição realizada com sucesso!");   
    }        
}
