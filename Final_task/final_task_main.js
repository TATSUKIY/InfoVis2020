function main()
{
   
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
        var S = i / 255.0; // [0,1]
        var R = Math.max( Math.cos( (S - 1.0) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( (S - 0.5) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }
   
    var sw_shader = 0;    
    var sw_ref = 0;       
    screen.init(volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });
    setup();
    screen.loop();

    function setup()
    {
        var color = new KVS.Vec3( 0, 0, 0 );
        var box = new KVS.BoundingBox();
        box.setColor( color );
        box.setWidth( 2 );

        var smin = volume.min_value;
        var smax = volume.max_value;
        var isovalue = KVS.Mix( smin, smax, 0.5 );      

        var mat_color = KVS.Mix( smin, smax, 0.5 );     


        document.getElementById('label_col').innerHTML = "Color: " + Math.round( mat_color )+ "\n";

        var line = KVS.ToTHREELine( box.exec( volume ) );
        screen.scene.add( line );

        var surfaces = Isosurfaces( volume, isovalue, mat_color, cmap, sw_shader, sw_ref );
        screen.scene.add( surfaces );


        document.getElementById('color')
        .addEventListener('mousemove', function() {
            var c_value = +document.getElementById('color').value;
            var mat_color = KVS.Mix( smin, smax, c_value );
            document.getElementById('label_col').innerHTML = "Color: " + Math.round( mat_color ) + "\n";
        });
        /********************************/
        var element_Lamb = document.getElementById("Lambertian");

        document.getElementById('change-status-button')
        .addEventListener('click', function() {
            screen.scene.remove( surfaces );
  

            ///color///
            c_value = +document.getElementById('color').value;
            var mat_color = KVS.Mix( smin, smax, c_value );
            ///////////

         
            var radios = document.getElementsByName("shader");

            var result;
            for(var i=0; i<radios.length; i++){
                if (radios[i].checked) {
                  
                    result = radios[i].value;
                    break;
                }
            }

            if(result=="gouraud"){
                sw_shader = 0;
            }else if (result == "phong") {
                sw_shader = 1;
            }
      
            radios = document.getElementsByName("reflection");

            for(var i=0; i<radios.length; i++){
                if (radios[i].checked) {
                  
                    result = radios[i].value;
                    break;
                }
            }
            if(result=="Lambertian"){
                sw_ref = 0;
            }else if (result == "Phong") {
                sw_ref = 1;
            }

            /*******************************/


            surfaces = Isosurfaces( volume, isovalue, mat_color, cmap, sw_shader, sw_ref);
            screen.scene.add( surfaces );
        });
        /**********************/

        document.addEventListener( 'mousemove', function() {
            screen.light.position.copy( screen.camera.position );
        });

        window.addEventListener('resize', function() {
            screen.resize([
                window.innerWidth * 0.8,
                window.innerHeight
            ]);
        });

        screen.draw();
    }
}
