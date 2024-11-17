const form = documentt.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const alt = documnet.getElementById('alt').value;

    const bmi = (peso / (alt * alt)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi <18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    }

    value.textContent = bmi;
    document.getElementById('description').textContent = description;
});