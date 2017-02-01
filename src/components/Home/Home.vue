<template lang="html">
  <div id="home">
    <div class="container z-depth-1">
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
          <div class="col s12 m8 push-m2">
            <div class="nav-wrapper">
              <div class="input-field">
                <input id="search" type="search" placeholder="Que voulez vous rechercher ?" required>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="table">
        <div class="row">
          <div class="col s12">
            <table class="bordered centered responsive-table">
              <thead>
                <tr>
                    <th data-field="id">Numéro de l'entreprise</th>
                    <th data-field="nom">Nom de l'entreprise</th>
                    <th data-field="codePostal">Code postale</th>
                    <th data-field="ville">Ville</th>
                    <th data-field="rue">Rue</th>
                    <th data-field="tel">Téléphone</th>
                    <th data-field="email">Email</th>
                    <th data-field="action">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Neilab</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>210 Rue Emile Gaboriau</td>
                  <td>06xxxx6525</td>
                  <td>contact@neilab.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Entre-prises</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des potiers</td>
                  <td>04xxxx3395</td>
                  <td>contact@entre-prises.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Neilab</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>210 Rue Emile Gaboriau</td>
                  <td>06xxxx6525</td>
                  <td>contact@neilab.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Entre-prises</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des potiers</td>
                  <td>04xxxx3395</td>
                  <td>contact@entre-prises.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Neilab</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>210 Rue Emile Gaboriau</td>
                  <td>06xxxx6525</td>
                  <td>contact@neilab.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Entre-prises</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des potiers</td>
                  <td>04xxxx3395</td>
                  <td>contact@entre-prises.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Neilab</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>210 Rue Emile Gaboriau</td>
                  <td>06xxxx6525</td>
                  <td>contact@neilab.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Entre-prises</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des potiers</td>
                  <td>04xxxx3395</td>
                  <td>contact@entre-prises.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>InfoGérence</td>
                  <td>34000</td>
                  <td>Montpellier</td>
                  <td>Rue des cables</td>
                  <td>04xxxx2285</td>
                  <td>contact@infogerence.fr</td>
                  <td><a href="#!ensavoirplus" class="waves-effect btn-savoir btn">+ d'infos</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<script src="./assets/js/home.js"></script>
<style src="./assets/css/home.css"></style>
