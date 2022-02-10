
export function botonReglas(){
 //Al hacer click sobre el id rules se despliega el contenido del id rules y se oculta el id rules
 let botonRules = document.getElementById('botonRules');
 botonRules.style.position = "absolute";
   botonRules.style.zIndex = "999";
botonRules.addEventListener('click', function(){
     let rules = document.getElementById('rules');
     rules.style.display = 'block';
       rules.style.position = "absolute";
         rules.style.zIndex = "666";
     //esconder el boton
     botonRules.style.display = 'none';
    rules.addEventListener('click', function(){
     rules.style.display = 'none';
     botonRules.style.display = 'block';
    });
 });
 }

