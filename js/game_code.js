

    // once everything is loaded, we run our Three.js stuff.
    function init() {
		var controls;
		var loader = new THREE.ColladaLoader();
		var goblin = new THREE.ColladaLoader();
	//	var raycaster = new THREE.Raycaster();
		//var mouse = new THREE.Vector2();

		var projector = new THREE.Projector(), 
    mouse_vector = new THREE.Vector3(),
    mouse = { x: 0, y: 0, z: 1 },
    ray = new THREE.Raycaster( new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0) ),
    intersects = []; 
		loader.options.convertUpAxis = true;
		goblin.options.convertUpAxis = true;
		document.addEventListener( 'click', onMouseMove, false );
		
		function onMouseMove(evt)
		{
		console.log("hi");
		console.log(evt);
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1		
		
    mouse_vector.set( mouse.x, mouse.y, mouse.z );
    
    //the final step of the transformation process, basically this method call
    //creates a point in 3d space where the mouse click occurd
    projector.unprojectVector( mouse_vector, camera );
    
    var direction = mouse_vector.sub( camera.position ).normalize();
    
    //ray = new THREE.Raycaster( camera.position, direction );
    ray.set( camera.position, direction );
	intersects = ray.intersectObjects( scene.children );
	
	for (var i=0;i<intersects.length;i++)
	{
	 if(intersects[i].object)
	 {
	  if(intersects[i].object.name=="change")
	  {
		alert("change Project selected")
	  }
	 }
	}
	}	
		function render3d(collada)
		{
			var dae = collada.scene;

			var skin = collada.skins[ 0 ];

			dae.position.set(100,0,0);//x,z,y- if you think in blender dimensions ;)
			dae.scale.set(8.5,8.5,8.5);
	
			scene.add(dae);

		}
		
		function renderGoblin(collada)
		{
			var dae = collada.scene;

			var skin = collada.skins[ 0 ];

			dae.position.set(200,100,100);//x,z,y- if you think in blender dimensions ;)
			dae.scale.set(8.5,8.5,8.5);
	
			scene.add(dae);

		}
		loader.load( 'resources/shuttle.dae', render3d);
		loader.load( 'resources/rover_mesh.dae', render3d);
		goblin.load('resources/Goblin.dae',renderGoblin);
 //du
		Physijs.scripts.worker = 'lib/physijs_worker.js';
		Physijs.scripts.ammo='ammo.js';
		var stats = initStats();
		var ismoving=false;
		var dir=true;
        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new Physijs.Scene();
	    scene.setGravity(new THREE.Vector3(0,-30,0));
        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer();

      //  renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
		
		clock = new THREE.Clock();
		controls = new THREE.FirstPersonControls(camera);
		controls.movementSpeed = 50;
		controls.lookSpeed = 0.05;
		
		var trackballControls = new THREE.TrackballControls(camera);
		trackballControls.rotateSpeed = 1.0;
		trackballControls.zoomSpeed = 1.0;
		trackballControls.panSpeed = 1.0;
        // create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(580,670,51,51);
        var planeMaterial = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('resources/Apollo15.jpg')});
        var plane = new Physijs.PlaneMesh(planeGeometry,planeMaterial);
        plane.receiveShadow  = true;
		
		ground_material = Physijs.createMaterial(
			new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'resources/Apollo15.jpg' ) }),
			.8, // high friction
			.3 // low restitution
		);
		ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
		ground_material.map.repeat.set( 3, 3 );
		
		ground = new Physijs.BoxMesh(
			new THREE.BoxGeometry(100, 1, 100),
			ground_material,
			0 // mass
		);
		scene.add(ground);
        // rotate and position the plane
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x=25
        plane.position.y=0
        plane.position.z=0

        // add the plane to the scene
        scene.add(plane);
		scene.fog=new THREE.FogExp2( 0xffffff, 0.005 );

        // create a cube
        var cubeGeometry = new THREE.BoxGeometry(4,4,4);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        var cube = new Physijs.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;

        // position the cube
        cube.position.x=-4;
        cube.position.y=3;
        cube.position.z=0;

        // add the cube to the scene
        scene.add(cube);
		  var boxMaterial = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
		color:0x0000FF
		}),0,1);
  var directionalLight = new THREE.DirectionalLight( 0xff0000, 0.5 );
directionalLight.position.set( 0, 0, 1 );

   // var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xff0000, 0.6 );
            
       //     hemiLight.position.set( 0, 500, -500 );
		//	scene.add(hemiLight);
		//scene.add( directionalLight );
  box =new Physijs.BoxMesh(
  
 
   new THREE.CubeGeometry(5,5,5),
   boxMaterial
);
var ambiColor = "#ff0000";
var ambientLight = new THREE.AmbientLight(0x000000);
scene.add(ambientLight);

var pointColor = "#ff0000";
var pointLight = new THREE.PointLight(pointColor);
pointLight.distance = 200;
scene.add(pointLight);
 box.position.y=50;
 box.position.z=-10;
 box.rotation.z=10;
 box.rotation.x=50;
 
/* box.name ="box";*/
scene.add(box); 
        var sphereGeometry = new THREE.SphereGeometry(4,20,20);
        var sphereMaterial = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('resources/Micro.png')});
        var sphere = new Physijs.SphereMesh(sphereGeometry,sphereMaterial,undefined,{ restitution: Math.random() * 1.5 });
		
		var particle, material; 
 
	// we're gonna move from z position -1000 (far away) 
	// to 1000 (where the camera is) and add a random particle at every pos. 
	for ( var zpos= -1000; zpos < 1000; zpos+=20 ) {
 
		// we make a particle material and pass through the 
		// colour and custom particle render function we defined. 
		sizex=Math.random()*4;
		sizey=Math.random()*4;
		sizez=Math.random()*4;
		color=new THREE.Color(Math.random() * 0xffffff);
		  var meteorMaterial = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
		color:color,
		}),0,0.5);
  
		
		particle =new Physijs.BoxMesh(
		
 
		new THREE.CubeGeometry(sizex,sizex,sizex),
		meteorMaterial
		);
 
		// give it a random x and y position between -500 and 500
		particle.position.x = Math.random() * 100 - 50;
		particle.position.y = Math.random() * 1000 - 500;
		
	   particle.position.z = Math.random() * 200 -50;
		// set its z position
		
 
		// scale it up a bit
		
 
		// add it to the scene
		scene.add( particle );
 
		// and to the array of particles. 
		
	}
	
		geometry = new THREE.IcosahedronGeometry( 20, 1 );
		
		material = new THREE.MeshBasicMaterial( { color: 0x0000ff} );
		mesh = new Physijs.Mesh( geometry, material );
		mesh.name="change";
		scene.add( mesh );
		
		mesh.position.y=20;
        
		var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
			var material = new THREE.MeshBasicMaterial( { color: 0xffff00 ,  wireframe: true} );
var torus = new THREE.Mesh( geometry, material );
scene.add( torus );
torus.position.x=-40;
torus.position.y=20;
		// position the sphere
        sphere.position.x=20;
        sphere.position.y=50;
        sphere.position.z=2;
        sphere.castShadow=true;

        // add the sphere to the scene
        scene.add(sphere);

        // position and point the camera to the center of the scene
        camera.position.x = 0;
        camera.position.y = 20;
        camera.position.z = 100;
        camera.lookAt(scene.position);
		
		var light = new THREE.PointLight( 0xff0000, 1, 100 ); light.position.set( -50, 50, -500 ); scene.add( light );
        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( -20, 140, 20 );
        spotLight.castShadow = true;
        scene.add( spotLight );

		var spotLight1 = new THREE.SpotLight( 0xffff00 );
        spotLight.position.set( -20, 140, 20 );
        spotLight.castShadow = true;
        scene.add( spotLight );
		
		var pointColor = "#ffffff";
		var spotLight = new THREE.SpotLight(pointColor);
		spotLight.position.set(0, 0, 10);
		spotLight.castShadow = true;
		spotLight.target = plane;
		scene.add(spotLight);
		
		var textureFlare0 = THREE.ImageUtils.loadTexture("resources/Micro.png");
		var flareColor = new THREE.Color(0xffaacc);
		var lensFlare = new THREE.LensFlare(textureFlare0, 350, 0.0, THREE.
		AdditiveBlending, flareColor);
		lensFlare.position.x = 10;
		lensFlare.position.y=10;
		lensFlare.position.z=10;
		scene.add(lensFlare);
        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);
		
		document.addEventListener("onmousewheel",mouseWheel,false);
		
        // call the render function
        var step=0;
        render1();
		function mouseWheel(oEvent)
		{
		
		
		}
        function renderScene() {
            stats.update();
            // rotate the cube around its axes
            if(ismoving)
			{
			if(dir == 'N')
			{
			
		    camera.position.z++;
			
			}
			else if(dir =='S')
			{
			
			camera.position.z--;
			
			}
			else if(dir =='W')
			{
			
			camera.position.x--;
			}
			else if(dir =='E')
			{
			
			camera.position.x++;
			}
			}
			cube.rotation.x += 0.06;
            cube.rotation.y += 0.06;
            cube.rotation.z += 0.06;
			
			mesh.rotation.y+=0.02;
			mesh.rotation.x+=0.04;
			mesh.rotation.z+=0.04;
			
		
			
		//	torus.position.y+=0.04;
		//	torus.position.x+=0.04;
		//	torus.position.z+=0.04;
            
          step+=0.02;
            sphere.position.x = 20+( 30*(Math.cos(step)));
            sphere.position.y = 2 +( 10*Math.abs(Math.sin(step))); 

            // render using requestAnimationFrame
			scene.simulate();
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
        }
		
		
		function initStats() {

            var stats = new Stats();

            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
	debugger;
            document.getElementById("Stats-output").appendChild( stats.domElement );

            return stats;
        }
		
		function kewdownhandler(event)
		{
		console.log("down");
		if(event.keyCode==38)
		{
		ismoving=true;
		dir="N";
		}
		else if(event.keyCode==40)
		{
		ismoving=true;
		dir="S";
		}
		else if(event.keyCode==37)
		{
		ismoving=true;
		dir="W";
		}
		else if(event.keyCode==39)
		{
		ismoving=true;
		dir="E";
		}
		
		console.log(event.keyCode);
		}
		
		function keyuphandler(event)
		{
		console.log("Key is up");
		if(event.keyCode==38)
		{
		ismoving=false;
		
		}
		else if(event.keyCode==40||event.keyCode==37||event.keyCode==39)
		{
		ismoving=false;
		
		}
		}
		
		

		function render() {
var delta = clock.getDelta();
trackballControls.update(delta);
requestAnimationFrame(render);
webGLRenderer.render(scene, camera);
}
function render1()
{	   stats.update();
		
//raycaster.setFromCamera( mouse, camera );
//var intersects = raycaster.intersectObjects( scene.children );

	/*for ( var intersect in intersects ) {

		intersect.object.material.color = new THREE.Color( 0xff0000 );
	
	}*/
cube.rotation.x += 0.06;
            cube.rotation.y += 0.06;
            cube.rotation.z += 0.06;
			
			mesh.rotation.y+=0.02;
			mesh.rotation.x+=0.04;
			mesh.rotation.z+=0.04;
					
			torus.rotation.y+=0.04;
			torus.rotation.x+=0.04;
			torus.rotation.z+=0.04;
			
		
			scene.simulate();
	//		   step+=0.01;
      //      sphere.position.x = 2+( 30*(Math.cos(step)));
        //    sphere.position.y = 2 +( 10*Math.abs(Math.sin(step))); 
	requestAnimationFrame(function animate() {
	//scene.simulate;

	renderer.render(scene, camera);
	controls.update(clock.getDelta());
	requestAnimationFrame(render1);
});	
 }  
		
 };
 
        

    window.onload = init;