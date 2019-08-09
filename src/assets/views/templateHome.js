
export const templateHome = () => {
  // creamos div que contendrá la plantilla
  const containerHome = document.createElement('div');

  // creamos el contenido del login
  const contentHome = `
  <div class="home-banner">
    <div class="banner-content container">
      <h1>El mundo te espera</h1>
      <h3>Únete a un grupo para comenzar a vivir nuestras experiencias, conocer gente y disfrutar del mundo</h3>
      <a href="#/create" id="register-btn">Unirse a Sport Match</a>
    </div>
  </div>

  <div class="dark-bg">
    <div class="container center">
      <img class="ico-logo" src="https://firebasestorage.googleapis.com/v0/b/scl010-sport-match.appspot.com/o/sportmatch-ico.png?alt=media&token=3e686acb-abc1-4e79-ac19-b373f4b6cec5" alt="sportmatch-ico">
      <h4>¿Cómo funciona Sport Match?</h4>
      <p class="subtitle">Sport Match es una plataforma que te permite formar grupos de ruta a fines a tus características o metas deportivas al momento de quieras ir a una próxima aventura en trekking.</p>
    </div>

    <div id='two-columns' class="columns container">
        <div class="left">
            <img src="https://firebasestorage.googleapis.com/v0/b/scl010-sport-match.appspot.com/o/ico-descubrir%402x.png?alt=media&token=cb9a03a7-3302-4e35-a472-e11e249982f9" alt="ico-descubrir">
            <div>
                <h3>Descubrir grupos</h3>
                <p>Descubre quién organiza eventos locales que calzan con tu perfil de trekking para sumarte a ellos en una ruta</p>
                <a href="#/create">Unirse a Sport Match<i class="fas fa-arrow-right"></i></a>    
            </div>
        </div>
        <div class="right">
            <img src="https://firebasestorage.googleapis.com/v0/b/scl010-sport-match.appspot.com/o/ico-armar%402x.png?alt=media&token=3d58553a-34ba-4909-96a0-08a40f6dacd0" alt="ico-armar">
            <div>
                <h3>Armar grupos</h3>
                <p>Crea tu propio grupo en Sport Match y benefíciate de una comunidad con múltiples miembros que comparten tus mismas pasiones.</p>
                <a href="#/login">Empezar<span><i class="fas fa-arrow-right"></i></span></a>    
            </div>
        </div>
    </div>
  </div>`;

  // pasar el contenido al div
  containerHome.innerHTML = contentHome;

  // le pido que busque el id del boton dentro del div creado
  return containerHome;
}
