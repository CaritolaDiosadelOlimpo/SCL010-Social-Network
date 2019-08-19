# Sport Match

Sport Match es una red social que permite realizar conexiones entre personas interesadas en practicar deporte como el trekking en grupo, enfocada a personas solas o grupos que se interesen en formar comunidad para practicar dicho deporte en comunidad según tus características físicas o intereses al momento de practicar el deporte.

## Descripción de Usuario

El usuario de Sport Match es una persona mayor de edad, hombre o mujer, que realiza actividades deportivas regularmente o se quiere iniciar en el deporte pero que no cuenta con amistades o compañeros que quieran adherirse a su actividad por lo que necesita generar nuevos vínculos para practicar dichas actividades deportivas en grupo.

El usuario que realiza trekking es una persona activa, apasionada por la naturaleza y las actividades al aire libre, una vez insertado en el deporte se preocupa siempre de ir cumpliendo metas ya sea físicas o recreativas y por lo tanto se prepara y se informa con anticipación antes de realizar o planificar sus visitas a los cerros, es decir, se equipa con implementos, vestimenta y accesorios para facilitar su ascenso o descenso y al mismo tiempo se informa sobre las condiciones de terreno y clima a las que se enfrentará.


## Necesidad encontrada

La necesidad del usuario se manifiesta al no tener con quién armar grupo o encontrar un compañero para realizar actividades físicas o deportes que requieran más de un integrante.


## Solución a la necesidad


Se plantea crear una red social que permita un emparejamiento en base a tus gustos, cualidades, preferencias y capacidades al momento de elegir o practicar un deporte, con otra persona que calce con dichos parámetros y facilitar su comunicación y posterior encuentro en caso de se desee.


## Contexto ¿Por qué trekking?


Si bien la necesidad se encuentra y aplica en la mayoría de los deportes, trekking es un deporte que aunque su concepto es el caminar individualmente, se necesita formar grupos por un tema de seguridad como también por un tema también técnico según las cualidades del terreno. También se da el caso que al practicar el trekking en grupo se dan instancias más recreativas y de disfrute.

Es un deporte con una gran comunidad activa, sin embargo no existen plataformas de comunicación (o no son muy difundidas ) que permitan dar solución a la necesidad del usuario.


## Historias de Usuario:

**Historia de Usuario General:** Yo como aficionado al trekking quiero encontrar un compañero de ruta para poder realizar recorridos en compañía.

*Criterios de Aceptación:* 
Se crea la aplicación Sport Match para poder entregarle al usuario la necesidad de encontrar compañeros de ruta según afinidades físicas y de interés.

+ **Historia de Usuario 1:** Yo como aficionado al trekking quiero poder registrarme en Sport Match para poder generar mi perfil de usuario y especificar las cualidades, objetivos y metas que me permitan realizar el emparejamiento con otros usuarios.

*Criterios de Aceptación:*  
Crear un botón en la página de inicio o principal dónde el usuario pueda encontrar fácilmente la opción de registro. Al hacer click en dicho botón se ingresa a una página de registro, en la cual se encuentra un formulario que solicita nombre, apellido, correo electrónico, contraseña y repetición de contraseña.
En una segunda etapa de registro se agregan parámetro que funcionarán a favor de realizar “match” con otros usuarios para sugerir eventos a rutas o nuevos amigos.
Los datos ingresados en el formulario se guardar a través de Firebase en una basa de datos de usuarios.


- **Historia de Usuario 2:** Yo como aficionado al trekking quiero poder iniciar sesión en Sport March para poder ingresar a mi perfil y que todas los preferencias o cambios personalizados se mantengan igual independicen del dispositivo por el cual ingrese.

*Criterios de Aceptación:* 
Crear un botón en la página de inicio o principal dónde el usuario pueda encontrar fácilmente la opción de inicio de sesión. Al hacer click en dicho botón se ingresa a una página de Login, en la cual se encuentra un formulario simple que solicita correo y contraseña la cual se valida a través de Firebase.
También se encuentra la opción de iniciar sesión con Google.


+ **Historia de Usuario 3:** Yo como aficionado al trekking quiero poder cerrar sesión en Sport March para poder cerrar mi perfil de usuario que otra persona no pueda acceder a mis datos.

*Criterios de Aceptación:*
Crear un botón de cerrar sesión dentro del perfil de usuario para que así pueda cerrar la sesión activa dentro del dispositivo en que se encuentre.


- **Historia de Usuario 4:** Yo como aficionado al trekking quiero poder restablecer mi contraseña ya que necesito la opción de poder recuperarla en caso de que se olvide.

*Criterios de Aceptación:* 
Dentro de la ventana de iniciar sesión se encuentra el botón con la opción de “recuperar contraseña” en donde el usuario tendrá la opción de recuperar su contraseña olvidada. El proceso se realiza a través de un correo electrónico de recuperación que llega al email registrado que a su vez deriva a una vista de la app que permite escribir la contraseña nueva. Una vez realizado el proceso el usuario es notificado de que puede ingresar a su cuenta sin problemas.


+ **Historia de Usuario 5:** Yo como aficionado al trekking quiero poder tener una visión general de la aplicación antes de registrarme ya que necesito saber de qué trata antes de ingresar mis datos.

*Criterios de Aceptación:*
Dentro de la página de inicio contiene información breve y concisa de lo que trata la aplicación, la oportunidad que ofrece y botones con las acciones principales de “unirme a Sport Match” y “Crear Grupo".


- **Historia de Usuario 6:** Yo como aficionado al trekking quiero poder ver eventos-grupos recomendados para realizar alguna ruta a un cerro en particular para poder adherirme a ellos fácilmente.

*Criterios de Aceptación:*
Una vez registrado a la aplicación el usuario tendrá disponible en su feed recomendaciones de cerros o rutas según sus especificaciones y cualidades ingresadas en el registro, como también sugerencias de eventos y grupos ya formados para unirse a su ruta previamente creada. Estos eventos se verán reflejados en modo de tarjetas al que el usuario puede unirse fácilmente a través de un botón de “asistiré” o si lo desea puede ver más información del evento haciendo click en la tarjeta misma.


+ **Historia de Usuario 7:** Yo como aficionado al trekking quiero poder crear eventos-grupo para poder reunir gente con mis mismas cualidades de usuario en una misma ruta.

*Criterios de Aceptación:*
Si el usuario no coincide o no calza con algún grupo mostrado en su feed, este tendrá la opción de crear un nuevo evento al cual puede ingresar, lugar, fecha, descripción y punto de encuentro, como también puede agregar amigos ya registrados o enviar invitaciones por correo electrónico.


- **Historia de Usuario 8:** Yo como aficionado al trekking quiero poder comentar dentro de los eventos para poder expresar alguna opinión o poder dejar un mensaje dentro del muro.

*Criterios de Aceptación:*
Cuando el usuario puedo “asistiré” a un evento o unido a un grupo, este podrá realizar comentarios dentro del mismo a través de una caja de texto con un botón “comentar” dentro de un feed interno, estos comentarios serán vistos por los asistentes o participares del mismo grupo o event

+ **Historia de Usuario 9:** Yo como aficionado al trekking usuario de Sport Match, quiero poder darle like a los comentarios, propios o de otros, dentro de un evento-grupo para poder demostrar mi interés en ellos.

*Criterios de Aceptación:*
El usuario podrá visualizar todos los comentarios a través de un feed en los grupos o eventos a los que participe, por lo tanto podrá darle “like” a través de un botón de “me gusta” debajo de las cajas de cada comentario.


- **Historia de Usuario 10:** Yo como aficionado al trekking usuario de Sport Match, quiero poder editar o eliminar mis comentarios para así tener la oportunidad de cambiar algo escrito o borrar el contenido que he creado.

*Criterios de Aceptación:*
El usuario puede editar o borrar su comentario a través de un botón de “ver más” que se verá reflejado solo en las cajas de comentarios creadas por él, que al desplegarse podrá editar en tiempo real el comentario ingresado.

+ **Historia de Usuario 11:** Yo como aficionado al trekking quiero ver la información detallada de los cerros cercanos a mí  para poder planificar mi viaje y saber con anticipación a la ruta que me quiero enfrentar.

*Criterios de Aceptación:*
Sport match tiene un apartado en su página de información sobre los cerros disponibles en todo el territorio chileno, en primera instancia se acotará a Santiago para posteriormente ampliarse a todo Chile.
En esta database de cerros o senderos, se especificará lugar geolocalizado, nivel de expertos necesario, tipo de terreno, entre otros en un modo tipo “ficha” para que el usuario sea capaz de informarse con previamente antes de organizar un viaje o una ruta.


- **Historia de Usuario 12:** Yo como aficionado al trekking usuario de Sport Match quiero agregar amigos dentro de la red social para poder mantener un contacto con ellos o poder agregarlos posteriormente con mayor facilidad al crear mis eventos.

*Criterios de Aceptación:*
Dentro del feed de recomendaciones de eventos y grupos, también tendría la recomendación de amigos que serán posibles match para el usuario según las características especificadas en el registro.


+ **Historia de Usuario 13:** Yo como aficionado al trekking usuario de Sport Match quiero poder tener acceso a la ficha médica de todos mis compañeros de grupo para poder conocer su historial médico en caso de emergencia.

*Criterios de Aceptación:*
Una vez iniciada la ruta podré tener acceso a los datos médicos de mis compañeros en caso de cualquier emergencia. Para poder acceder a ellos el usuario debe ingresar al evento y hacer click en el ícono o foto del participante para poder ingresar a su perfil y visualizar su ficha médica.


- **Historia de Usuario 14:** Yo como aficionado al trekking usuario de Sport Match quiero poder invitar amigos a la red social para poder ampliar la comunidad dentro de ésta.

*Criterios de Aceptación:*
El usuario podrá agregar amigas dentro de un botón de “invitar” en la parte superior de su feed personal. Al hacer click se desplegará un pop-up de invitación donde ingresando el correo del invitado o copiando un link para compartir la invitación sea difundida entre las personas que el usuario desee.


## Diseño de la aplicación.
![flujo inicial](http://www.imagenonline.com/imagenes/1/510-c253a502c3d995528b922a998a0c9a8ed3ff1aa3.png)

![guía de estilos](http://www.imagenonline.com/imagenes/1/507-cf80a4a3b3574cb0064ad7fb81580280ed21534d.png)

### Prototipo de alta fidelidad

![Home web](http://www.imagenonline.com/imagenes/1/509-9830fe40375dccfbbc8a536961672a0cd0316087.jpg)

![vistas mobile](http://www.imagenonline.com/imagenes/1/508-968050a8b24f44ece71703b2cc5f2ebe0703cbc3.png)







