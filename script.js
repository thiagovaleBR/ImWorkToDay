function verificar() {
    const date = new Date(document.getElementById('date').value);
    const team = document.querySelector('input[name="team"]:checked').value;
    const startingDate = new Date(2023, 3, 1); // 01/04/2023
    const timeDiff = Math.abs(date.getTime() - startingDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const workingDay = (diffDays % 2 === 0 && team === 'A') || (diffDays % 2 !== 0 && team === 'B');
  
    if (workingDay) {
      document.getElementById('resultado').innerHTML = 'Você vai trabalhar neste dia.';
    } else {
      document.getElementById('resultado').innerHTML = 'Você não vai trabalhar neste dia.';
    }
  }
  