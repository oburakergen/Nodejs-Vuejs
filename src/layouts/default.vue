<template>
  <div>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">
          DataCose
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" exact>
              Posts
            </b-nav-item>
            <b-nav-item to="/todos">
              Todos
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main>
      <b-container>
        <Nuxt />
      </b-container>
    </main>
  </div>
</template>

<style>
.nuxt-link-active {
  color: white !important;
}

td {
  cursor: pointer;
}
</style>
