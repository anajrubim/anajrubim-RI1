const personagem = {
    nome: 'Steve Rogers',
    codinome:'Capitão América',
    armaPrincipal: 'Escudo americano',
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}

const personagem2 = {
    nome: 'Bruce Banner',
    codinome:'Hulk',
    armaPrincipal: 'Punhos',
    armaSecundaria: '',
    velocidade: 40,
    forca: 95,
    resistencia: 90,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}
const personagem3 = {
    nome: 'Tony Stark',
    codinome:'Homem de Ferro',
    armaPrincipal: 'Armadura de Ferro',
    armaSecundaria: '',
    velocidade: 80,
    forca: 60,
    resistencia: 75,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}
const personagem4 = {
    nome: 'Natasha Romanoff',
    codinome:'Viúva Negra',
    armaPrincipal: 'Manoplas com descargas elétricas e bastões de choque',
    armaSecundaria: 'Facas',
    velocidade: 70,
    forca: 65,
    resistencia: 75,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}
const personagem5 = {
    nome: 'Thor',
    codinome:'Thor',
    armaPrincipal: 'Mjölnir',
    armaSecundaria: 'Raios e trovões',
    velocidade: 90,
    forca: 90,
    resistencia: 90,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}
const personagem6 = {
    nome: 'Thanos',
    codinome:'Thanos',
    armaPrincipal: 'Manopla do Infinito',
    armaSecundaria: '',
    velocidade: 85,
    forca: 85,
    resistencia: 90,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}
const personagem7 = {
    nome: 'Wanda Maximoff',
    codinome:'Feiticeira Escarlate',
    armaPrincipal: 'Magia',
    armaSecundaria: '',
    velocidade: 55,
    forca: 80,
    resistencia: 70,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}
const personagem8 = {
    nome: 'Peter Parker',
    codinome:'Homem-Aranha',
    armaPrincipal: 'Teias',
    armaSecundaria: '',
    velocidade: 80,
    forca: 70,
    resistencia: 80,
    descricao: function() {
        return "Nome do personagem: "+this.nome+"\n" +
        "Codinome do personagem: "+this.codinome+"\n" +
        "Arma principal: "+this.armaPrincipal+"\n" +
        "Arma secundária: "+this.armaSecundaria+"\n" +
        "Nível de Força: "+this.forca+"\n" +
        "Nível de Velocidade: "+this.velocidade+"\n" +
        "Nome do resistência: "+this.resistencia+"\n"
    }
}

let lista = [personagem,personagem2,personagem3,personagem4,personagem5,personagem6,personagem7,personagem8]

lista.forEach(function(p1) {
    let total = p1.forca + p1.resistencia + p1.velocidade
    lista.forEach(function(p2){
        if (p1 !== p2) {
            let totalVS = p2.forca + p2.resistencia + p2.velocidade
            if (total > totalVS){
                console.log(p1.descricao() + " ganhou de " + p2.descricao())
            }
            else if (total < totalVS){
                console.log(p2.descricao() + " ganhou de " + p1.descricao())
            }
            else {
                console.log(p2.descricao() + " empatou com " + p1.descricao())
            }
        }
    })
})
lista.shift()
