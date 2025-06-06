<script>
export default {
  data() {
    return {
      section: 'sobre',
      mostrarMais: false
    };
  }
};
</script>

<template>

  <div class="app">

    <header>
      <h1>Olá, eu me chamo Lorena!</h1>
      <p>Seja bem-vindo ao meu site pessoal &lt;3</p>
      <nav>
        <ul>
          <li :class="{ativo: section === 'sobre'}" @click="section = 'sobre'">Sobre</li>
          <li :class="{ativo: section === 'gostos'}" @click="section = 'gostos'">Gostos</li>
          <li :class="{ativo: section === 'contatos'}" @click="section = 'contatos'">Contatos</li>
        </ul>
      </nav>
    </header>

    <main>
      <section v-if="section === 'sobre'" class="card">
        <h2>Sobre mim</h2>
        <ul>
          <li> ✦ Tenho 18 anos</li>
          <li> ✦ Sou natural da cidade de Floresta/PE, mas morei em Petrolândia durante toda minha vida</li>
          <li> ✦ Concluí o Ensino Fundamental na EREFAF - João Rodrigues de Almeida (2018-2021)</li>
          <li> ✦ Atualmente sou estudante do 4º ano, Técnico em Informática no IFBA - Campus Paulo Afonso</li>
          <li> ✦ Faço parte do Projeto de Pesquisa e Extensão CaraibeirasTech, como bolsista de Iniciação Científica Junior pelo CNPq</li>
        </ul>
      </section>

      <section v-if="section === 'gostos'" class="card">
        <h2>Gostos</h2>
        <ul>
          <li> ✦ Viajar</li>
          <li> ✦ Ler (principalmente Holly Black)</li>
          <li> ✦ Passar tempo com minha família e meus amigos</li>
          <li> ✦ Ouvir música</li>
          <li> ✦ Fotografia</li>
          <li> ✦ Snoopy</li>
          <li> ✦ The Spectacular Spider-Man</li>
        </ul>
      </section>

      <section v-if="section === 'contatos'" class="card">
        <h2>Contatos</h2>
        <div class="contatos">
          <a href="https://santosrachel372@gmail.com" target="_blank">
            <i class="fas fa-envelope"></i> E-mail
          </a>
          <a href="https://github.com/lrssz" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://santosrachel372@gmail.com" target="_blank">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="http://lattes.cnpq.br/8354917688956625" target="_blank">
            <i class="fas fa-file-alt"></i> Lattes
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
