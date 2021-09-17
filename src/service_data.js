// https://randomuser.me/api/?seed=coodesh&nat=BR&results=50&inc=gender,name,nat,picture,dob,cell,location,login,email

export function handlerData (results, uuid = null){
  const adapterData = []
  
  for (const iterator of results) {
  
    const newObject = {}
  
    newObject.id = `${iterator.id.value}`
    newObject.nome = `${iterator.name.first} ${iterator.name.last}`
    newObject.email = `${iterator.email}`
    newObject.uuid = `${iterator.login.uuid}`
    newObject.endereco = `${iterator.location.street.name}, Nº ${iterator.location.street.number}, ${iterator.location.city}`
    newObject.telefone = `${iterator.cell}`
    newObject.genero = `${iterator.gender === 'female' ? "Feminino" : 'Masculino'}`
    newObject.idade = `${idade(iterator.dob.date)}`
    newObject.nascimento = `${timeConverter(iterator.dob.date)}`
    newObject.estado = `${iterator.location.state}`
    newObject.imgUrl = `${iterator.picture.large}`
    adapterData.push(newObject)
  }
  //calcular idade
  function idade(ano_nascimento) {
    let d = new Date,
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate()
  
    let u = new Date(ano_nascimento),
      nascimento = u.getFullYear(),
      mes_aniversario = u.getMonth() + 1,
      dia_aniversario = u.getDate()
  
    let quantos_anos = ano_atual - nascimento;
  
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
      quantos_anos--;
    }
  
    return quantos_anos < 0 ? 0 : quantos_anos;
  }
  
  //converter timestamp pra data legivel
  function timeConverter(timestamp, format = 1) {
    if (format == 1) {
  
      var a = new Date(timestamp),
        months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        year = a.getFullYear(),
        month = months[a.getMonth()],
        date = a.getDate(),
        hour = a.getHours(),
        min = a.getMinutes(),
        sec = a.getSeconds(),
  
        time = date + ' de ' + month + ' de ' + year
  
      return time;
  
    } else if (format == 2) {
  
      var data = new Date(timestamp),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
  
      return diaF + "/" + mesF + "/" + anoF;
  
    } else {
  
      return "algo errado com a função timeConverter"
    }
  }
    if (uuid) {
      const value = adapterData.filter(res => res.uuid === uuid)
      return value
    }
    return adapterData
  }