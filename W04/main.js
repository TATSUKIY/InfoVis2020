function main()

{

    var width = 500;

    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;

    var aspect = width / height;

    var near = 1;

    var far = 1000;

    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

    camera.position.set( 0, 0, 5 );

    scene.add( camera );


    var renderer = new THREE.WebGLRenderer();

    renderer.setSize( width, height );

    document.body.appendChild( renderer.domElement );



    var vertices = [

        [-1, 1, -1], // v0

		[-1,-1, -1], // v1

		[1, -1, -1], //v2

		[1, 1, -1],

		[-1, 1, 1], // v0

		[-1,-1, 1], // v1

		[1, -1, 1], //v2

	    [1, 1, 1]

	];



    var faces = [

	    [4,5,7], // f0: v0-v1-v2

	    [6,7,5],

	    [0,2,1],

	    [2,0,3],

	    [0,4,3],

	    [3,4,7],

	    [1,6,5],

	    [1,2,6],

	    [0,1,4],

	    [4,1,5],

	    [3,7,6],

	    [6,2,3]

    ];



    var v0 = new THREE.Vector3().fromArray( vertices[0] );

    var v1 = new THREE.Vector3().fromArray( vertices[1] );

    var v2 = new THREE.Vector3().fromArray( vertices[2] );

    var v3 = new THREE.Vector3().fromArray( vertices[3] );

    var v4 = new THREE.Vector3().fromArray( vertices[4] );

    var v5 = new THREE.Vector3().fromArray( vertices[5] );

    var v6 = new THREE.Vector3().fromArray( vertices[6] );

    var v7 = new THREE.Vector3().fromArray( vertices[7] );



    var id = faces[0];

    var f0 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[1];

    var f1 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[2];

    var f2 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[3];

    var f3 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[4];

    var f4 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[5];

    var f5 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[6];

    var f6 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[7];

    var f7 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[8];

    var f8 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[9];

    var f9 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[10];

    var f10 = new THREE.Face3( id[0], id[1], id[2] );

    id = faces[11];

    var f11 = new THREE.Face3( id[0], id[1], id[2] );



    var geometry = new THREE.Geometry();

    geometry.vertices.push( v0 );

    geometry.vertices.push( v1 );

    geometry.vertices.push( v2 );

    geometry.vertices.push( v3 );

    geometry.vertices.push( v4 );

    geometry.vertices.push( v5 );

    geometry.vertices.push( v6 );

    geometry.vertices.push( v7 );



    geometry.faces.push( f0 );

    geometry.faces.push( f1 );

    geometry.faces.push( f2 );

    geometry.faces.push( f3 );

    geometry.faces.push( f4 );

    geometry.faces.push( f5 );

    geometry.faces.push( f6 );

    geometry.faces.push( f7 );

    geometry.faces.push( f8 );

    geometry.faces.push( f9 );

    geometry.faces.push( f10 );

    geometry.faces.push( f11 );



    var material = new THREE.MeshBasicMaterial();

    material.vertexColors = THREE.FaceColors;



    for(var i = 0; i < geometry.faces.length; i++) {

        geometry.faces[i].color = new THREE.Color(1,0,0)

    }



    geometry.computeFaceNormals();



    material.side = THREE.FrontSide



    var cube = new THREE.Mesh( geometry, material );

    scene.add( cube );


    loop();



    function loop() {

    	requestAnimationFrame( loop );

        cube.rotation.x += 0.001;

    	cube.rotation.y += 0.001;

        renderer.render( scene, camera );

    }

}