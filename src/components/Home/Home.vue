<template lang="html">
  <div id="home">
      <div class="row">
        <div class="col s12 center">
          <h2>Bienvenue à toi étudiant !</h2>
          <p id="intro-text" class="flow-text">
            Cette application va te permêtre de chercher facilement une entreprise dans laquelle effectuer tes stages
            selons plusieurs critères, dans notre base de données des entreprises.
          </p>
        </div>
      </div>

      <section id="search">
        <div class="row">
          <div class="col s12 m10 push-m1">
            <ul class="collapsible" data-collapsible="accordion">
              <li>
                <div class="collapsible-header center"><i class="material-icons">search</i>Rechercher</div>
                <div class="collapsible-body">
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s6">
                          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- <div class="col s12 m8 push-m2">
            <div class="nav-wrapper">
              <div class="input-field">
                <input id="search" type="search" placeholder="Que voulez vous rechercher ?" required>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </div>
          </div> -->
        </div>
      </section>

      <section id="table">
        <div class="row">
          <div class="col s12">
            <table class="bordered centered responsive-table">
              <thead>
                <tr>
                    <th data-field="id">Stage</th>
                    <th data-field="entreprise">Entreprise</th>
                    <th data-field="ville">Ville</th>
                    <th data-field="option">Option</th>
                    <th data-field="annee">Année</th>
                    <th data-field="sujet">Sujet</th>
                    <th data-field="action">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="stage in stages">
                  <td>{{ stage.id }}</td>
                  <td>{{ stage.entreprise }}</td>
                  <td>{{ stage.ville }}</td>
                  <td>{{ stage.option }}</td>
                  <td>{{ stage.annee }}</td>
                  <td>{{ stage.sujet }}</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">infos</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      stages: [{
        id: 1,
        entreprise: 'Entreprise',
        ville: 'Montpellier',
        option: 'SLAM',
        annee: 1,
        sujet: 'Développement web back-office PHP'
      }, {
        id: 2,
        entreprise: 'Entreprise',
        ville: 'Montpellier',
        option: 'SISR',
        annee: 1,
        sujet: 'Maintenance Réseaux'
      }, {
        id: 3,
        entreprise: 'Entreprise',
        ville: 'Montpellier',
        option: 'SLAM',
        annee: 2,
        sujet: 'Développement d\'une application bureau en C#'
      }]
    }
  }
}
</script>

<style src="./assets/css/home.css"></style>
