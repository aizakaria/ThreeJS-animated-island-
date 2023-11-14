let shark;
// //creation de la scene
const scene = new THREE.Scene();
//positionnement de la camera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z=1055
camera.position.y=2380



//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#cfebfd");
document.body.appendChild(renderer.domElement);
var OrbitControl = new THREE.OrbitControls(camera, renderer.domElement);
OrbitControl.update();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////obj qui est une montagne dans laquelle j'ai ajouté une texture
var loader = new THREE.OBJLoader();
loader.load("/Images/montagne.obj", function(object){
   var material = new THREE.MeshBasicMaterial( {}  ); 
   var texture = new THREE.TextureLoader().load("/Images/color.png");
   material.map= texture;
   object.material = material;  
   object.scale.set(30,70,40);  
   object.position.set(3500,-40,-7200) 
   object.traverse( function (child){
       if(child.isMesh)
       {
           child.material = material;
           child.geometry.computeVertexNormals();
       }
   }    );     
scene.add(object); 
});
const geometry_lamp = new THREE.SphereGeometry( 80, 100, 100 );
var texture_lamp = new THREE.TextureLoader().load("/Images/lamp.jpg");
const material_lamp = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide,map : texture_lamp} );
const lamp = new THREE.Mesh( geometry_lamp, material_lamp);
lamp.position.set(3400,2100,-7100)
scene.add( lamp );
////////////////////////////////////////////////////////////////////////////////////////////////////////SUN
const geometry_soleil = new THREE.SphereGeometry( 600, 800, 800 );
var texture_soleil = new THREE.TextureLoader().load("/Images/sun.jpg");
const material_soleil = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide,map : texture_soleil} );
const soleil_ = new THREE.Mesh( geometry_soleil, material_soleil);
scene.add( soleil_ );


//////////////////////////////////////////////////////////////////////////////////////////////////////////l'ajout de l'ile
const geometry_ = new THREE.SphereGeometry( 600, 800, 800 );
var texture_ = new THREE.TextureLoader().load("/Images/sable.jpg");
const material_ = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, side: THREE.DoubleSide,map : texture_} );
const sphere = new THREE.Mesh( geometry_, material_ );
scene.add( sphere );

sphere.position.z=-2240;
sphere.position.x=-2480;
sphere.rotateX(-20.4);
sphere.position.y=-340;
//////////////////////////////////////////////////////////////////////////////////////////////////////////ajout d'un palmier
var loader2 = new THREE.OBJLoader();
loader2.load("/Images/palmm.obj", function(object){
   var material_2 = new THREE.MeshBasicMaterial( {}  ); 
   var texture = new THREE.TextureLoader().load("/Images/treepalm.jpg");
   material_2.map= texture;
   object.material = material_2;  
   object.scale.set(10,10,10);  
   //object.position.set(-4300,400,3000) 

    object.position.z=-2240;
    object.position.x=-2480;
    object.rotateX(-20.4);
    object.position.y=-1;

   object.traverse( function (child){
       if(child.isMesh)
       {
           child.material = material_2;
           child.geometry.computeVertexNormals();
       }
   }    );     
scene.add(object); 
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////obj 2 qui est un phare qui controle les bateau
var loader2 = new THREE.OBJLoader();
loader2.load("/Images/tour.obj", function(object){

   var material = new THREE.MeshBasicMaterial( {}  ); 
   var texture = new THREE.TextureLoader().load("/Images/1_BaseColor.jpg");
   material.map= texture;
   object.material = material;  
   object.scale.set(30,30,30);  
   object.position.set(3500,-5,-7200) 
   object.traverse( function (child){
       if(child.isMesh)
       {
           child.material = material;
           child.geometry.computeVertexNormals();
       }
   }    );     
scene.add(object); 
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////obj 3 un bateau avec une texture en bois
var loader3 = new THREE.OBJLoader();
loader3.load("/Images/boat.obj", function(boat){

   var material = new THREE.MeshBasicMaterial( {}  ); 
   var texture = new THREE.TextureLoader().load("/Images/hood.jpg");
   material.map= texture;
   boat.material = material;  
   boat.scale.set(3,3,3);  
   boat.position.set(-1900,60,-2480) 
   boat.traverse( function (child){
       if(child.isMesh)
       {
           child.material = material;
           child.geometry.computeVertexNormals();
       }
   }    );     
scene.add(boat); 
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////coffre contenant un tresor sur l'ile
var loader20 = new THREE.OBJLoader();
loader20.load("/Images/chest.obj", function(chest){

   var material = new THREE.MeshBasicMaterial( {}  ); 
   var texture = new THREE.TextureLoader().load("/Images/hood.jpg");
   material.map= texture;
   chest.material = material;  
   chest.scale.set(80,80,80);  
   chest.rotation.x=10;
   chest.position.set(-2500,240,-2600) 
   chest.traverse( function (child){
       if(child.isMesh)
       {
           child.material = material;
           child.geometry.computeVertexNormals();
       }
   }    );     
scene.add(chest); 
});
///////////////////////////////////////////////////////////////////////////////////////////ocean
var loader21 = new THREE.OBJLoader();
loader21.load("/Images/ocean.obj", function(ocean){
   var material = new THREE.MeshBasicMaterial( {}  ); 
   var texture = new THREE.TextureLoader().load("/Images/mer.jpg");
   material.map= texture;
   ocean.material = material;  
   ocean.scale.set(3500,3500,3500);  
   ocean.position.set(-1500,-50,-6600) 
   ocean.traverse( function (child){
       if(child.isMesh)
       {
           child.material = material;
           child.geometry.computeVertexNormals();
       }
   }    );     
scene.add(ocean); 
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////OBJ j'ai ajouté un requin 
var loader4 = new THREE.OBJLoader();
loader4.load("/Images/shark.obj", function(shark){

   var material = new THREE.MeshBasicMaterial( {}  ); 
   var texture = new THREE.TextureLoader().load("/Images/shark2.jpg");
   material.map= texture;
   shark.material = material;  
   shark.scale.set(100,100,100);  
   //shark.position.set(1000,-500,100)
   shark.position.y=-320 ;
   shark.position.x=-2000 ;
   shark.position.z=-5400 ;

///////////////////////////////////////////////////////la fonction qui vas nous permettre de faire bouger le requing en ytilisant les touches du clavier
document.addEventListener("keypress", onKeyUp, false);
function onKeyUp(event)
{ 
   if (event.key == 'z')
   {
    shark.position.z +=20;
   }
   else if (event.key == 's')
   {
    shark.position.z -=20;
   }
   else if (event.key == 'd')
   {
    shark.position.x -=20;
   }
   else if (event.key == 'q')
   {
    shark.position.x +=20;
   }
}

   shark.traverse( function (child){
       if(child.isMesh)
       {
           child.material = material;
           child.geometry.computeVertexNormals();
       }
   }    );     
scene.add(shark); 
});

flash = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
flash.position.set(200,300,100);
scene.add(flash);
//////////////////////////////////////////////////////////////////////////////////////////////////////////plan
const plan = new THREE.PlaneGeometry(10000, 10000,2000);
var texture = new THREE.TextureLoader().load("/Images/mer.jpg");
const material2 = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide,map :texture });
const plane = new THREE.Mesh(plan, material2);
plane.position.y = -1;
plane.rotateX(29.84999); //pour incliner le plan
plane.position.z=-5000;
//scene.add(plane);
OrbitControl.update(); 

//fonction de rotation du soleil
function guiparametre()
 {
     var guifenetre = new dat.GUI();
     var speed = 0.1;
     var jar;
     parameters = {

        a : 0,
        b : 0, 
        c : 0,
     }
     
     var dimen = guifenetre.addFolder('Dimension');

     var dx = dimen.add(parameters, 'a').min(1).max(20).step(speed).name('Axe X');
     var dy =dimen.add(parameters, 'b').min(1).max(20).step(speed).name('Axe Y');
     var dz =dimen.add(parameters, 'c').min(1).max(20).step(speed).name('Axe Z');
     
     dx.onChange(function(jar)
     {
        soleil_.scale.x=jar;
     });

     dy.onChange(function(jar)
     {
        soleil_.scale.y=jar;
     });

     dz.onChange(function(jar)
     {
        soleil_.scale.z=jar;
     });
     
     guifenetre.open();
     guifenetre.close();
 }

 guiparametre();

           ambient = new THREE.AmbientLight(0x555555);
           scene.add(ambient);
           directionalLight = new THREE.DirectionalLight(0xffeedd);
           directionalLight.position.set(0,0,1);
           scene.add(directionalLight);

  //fonction d'affichage         
function animate()
{
requestAnimationFrame( animate );
render();
OrbitControl.update();
}
var render = function()
 {
    const time = Date.now() / 2200;
	soleil_.position.y = 4000 * Math.cos( time );
	soleil_.position.z = 11000 * Math.sin( time )-8280 ;
    soleil_.rotation.y+=0.001;

    lamp.rotation.y+=0.01;
    lamp.rotateX +=1;
    
    requestAnimationFrame(render);
    renderer.render(scene,camera);
 } 
 render(); 

      