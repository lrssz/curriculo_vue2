<script>
export default {
};
</script>

<template>
  <div class="app">
    <header>
      <h1>Olá, eu me chamo Lorena!</h1>
      <p>Seja bem-vindo ao meu site pessoal &lt;3</p>
      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="ativo">Sobre</router-link></li>
          <li><router-link to="/gostos" exact-active-class="ativo">Gostos</router-link></li>
          <li><router-link to="/contatos" exact-active-class="ativo">Contatos</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>
