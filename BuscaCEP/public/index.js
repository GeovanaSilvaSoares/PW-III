function buscarCEP() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  console.log(cep)

  if (!cep || cep.length !== 8) {
    alert('CEP inválido');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      if (!response.ok) throw new Error('Erro na requisição');
      return response.json();
    })
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado');
        limpaFormulario();
      } else {
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;
        document.getElementById('ibge').value = data.ibge;
      }
    })
    .catch(err => {
      console.error('Erro ao buscar CEP:', err);
      alert('Erro ao buscar CEP');
    });
}

function limpaFormulario() {
  document.getElementById('cep').value = '';
  document.getElementById('rua').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('uf').value = '';
  document.getElementById('ibge').value = '';
}
