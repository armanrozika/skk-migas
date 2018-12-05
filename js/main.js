//initiate Fullpage
let Fullpage = new fullpage('#fullpage', {
	//options here
    //autoScrolling:true,
    scrollingSpeed: 1000,
    scrollHorizontally: false,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    
    //scroll index positioning
    afterLoad: function(origin, destination, direction){
        var loadedSection = this;
    },
    onLeave: function(origin, destination, direction){
        var loadedSection = this;
        let cover = document.querySelector('.cover-wrapper');
        let whiteOpaque = document.querySelector('.white-opaque');
        let texts = document.querySelectorAll('.white-opaque p');
        let road = document.querySelector('.road-wrapper');
        let static = document.querySelectorAll('.static')

        if(origin.index == 0 && direction == 'down'){
            //console.log('1 down')
            static[0].style.top = '-100%';
            static[1].style.top = '0';
            let smallTruck = document.querySelector('#small-truck');
            let title = document.querySelector('.title');
            let text = document.querySelectorAll('.scene1 p');
            let sceneRoad = document.querySelector('.scene1-road');
            setTimeout(()=>{
                for(let i=0; i<text.length; i++){
                    text[i].style.opacity = '1'
                }
                title.style.opacity = '1'
            }, 1000);
            setTimeout(()=>{
                smallTruck.style.transform = 'translateX(33%) translateY(33%)'
            }, 4000);

            setTimeout(()=>{
                //sceneRoad.style.left = '-100%';
            }, 3000)
           
           
            fullpage_api.setAllowScrolling(false);
            setTimeout(()=>{
                fullpage_api.setAllowScrolling(true);
            }, 1000)
        }
        if(origin.index == 1 && direction == 'up'){
            console.log('2 up')
            static[0].style.top = '0%';
            static[1].style.top = '100%'
            let smallTruck = document.querySelector('#small-truck');
            setTimeout(()=>{
                smallTruck.style.transform = 'translateX(0%) translateY(0%)'
            }, 150);

            let title = document.querySelector('.title');
            let text = document.querySelectorAll('.scene1 p');
            let sceneRoad = document.querySelector('.scene1-road');
            setTimeout(()=>{
                for(let i=0; i<text.length; i++){
                    text[i].style.opacity = '0'
                }
                title.style.opacity = '0'
            }, 100);

            setTimeout(()=>{
                //sceneRoad.style.left = '50%';
            }, 500)
           
        }
        if(origin.index == 1 && direction == 'down'){
            //console.log('2 down')
            let longRoad = document.querySelector('.long-road');
            let text = document.querySelectorAll('.scene1 > p');
            let bigTruck = document.querySelector('#big-truck')
            let title = document.querySelector('.title');
            let longRoadImg = document.querySelectorAll('.long-road img');
            let longRoadText = document.querySelector('.long-road-text');
            setTimeout(()=>{
                longRoadText.style.opacity = '1'
            },6000)
            for(let i = 2; i<longRoadImg.length-1; i++){
                //console.log(i)
                setTimeout(()=>{
                    longRoadImg[i].style.opacity = '1'
                }, (i-1)*800)
            }

            title.style.opacity = '0'
            bigTruck.style.transition = 'left 7s ease'
            longRoad.style.opacity = '1';
            longRoad.style.transition = 'opacity 500ms ease'
            let smallTruck = document.querySelector('#small-truck');
            setTimeout(()=>{
                smallTruck.style.transform = 'translateX(0%) translateY(0%)'
            }, 150);
            for(let i=0; i<text.length; i++){
                text[i].style.opacity = '0'
            }
            setTimeout(()=>{
                for(let i=0; i<text.length; i++){
                    text[i].style.opacity = '0'
                }
                //title.style.opacity = '0'
            }, 100);

            setTimeout(()=>{
               // sceneRoad.style.left = '50%';
            }, 500);
            //show big truck, and set the timeout to make fullpage true again
            fullpage_api.setAllowScrolling(false);
            
            setTimeout(()=>{
                bigTruck.style.left = '100%'
                //console.log('move the truck')e
            }, 1000);

            setTimeout(()=>{
                fullpage_api.setAllowScrolling(true);
            }, 8000);
            let sceneRoad = document.querySelector('.scene1-road');
            sceneRoad.style.opacity = '0'

        }

        if(origin.index == 2 && direction == 'up'){
            let smallTruck = document.querySelector('#small-truck');
            let title = document.querySelector('.title');
            let text = document.querySelectorAll('.scene1 p');
            let sceneRoad = document.querySelector('.scene1-road');
            let longRoad = document.querySelector('.long-road');
           
            longRoad.style.opacity = '0';
            let bigTruck = document.querySelector('#big-truck')
            bigTruck.style.transition = 'none'
            longRoad.style.transition = 'none'
            bigTruck.style.left = '0'
           
            for(let i=0; i<text.length; i++){
                text[i].style.opacity = '1'
            }
            title.style.opacity = '1'
            smallTruck.style.transform = 'translateX(0%) translateY(0%)'
            sceneRoad.style.left = '50%';
            sceneRoad.style.opacity = '1'
            let longRoadImg = document.querySelectorAll('.long-road img');
            let longRoadText = document.querySelector('.long-road-text');
            longRoadText.style.opacity = '0'
            for(let i = 2; i<longRoadImg.length-1; i++){
                longRoadImg[i].style.opacity = '0'
            }
        }

        if(origin.index==2 && direction =='down'){
            let scene1 = document.querySelector('.scene1');
            let scene2 = document.querySelector('.scene2');
            let bigTruck = document.querySelector('#big-truck')
            let longRoadImg = document.querySelectorAll('.long-road img');
            let longRoadText = document.querySelector('.long-road-text');
            
            setTimeout(()=>{
                bigTruck.style.transition = 'none'
                bigTruck.style.left = '0'
                longRoadText.style.opacity = '0'
                for(let i = 2; i<longRoadImg.length-1; i++){
                    longRoadImg[i].style.opacity = '0'
                }
            },1000);
            scene1.style.left = '-100%'
            scene2.style.left = '0%'

            let scene2img = document.querySelectorAll('.scene2 img');
            let scene2p = document.querySelectorAll('.scene2 p')
            let textBottom= document.querySelector('.text-bottom');
            setTimeout(()=>{
                for(let i=1; i<scene2img.length; i++){
                    scene2img[i].style.opacity = '1'
                }
            }, 1500);
            setTimeout(()=>{
                scene2img[1].style.left = '15%'            
            }, 1500)
            setTimeout(()=>{
                scene2img[2].style.width = '20%' 
                scene2p[0].style.opacity = '1' 
                scene2p[1].style.opacity = '1'
                scene2p[2].style.opacity = '1' 
                scene2p[3].style.opacity = '1'              
            }, 1900)

            setTimeout(()=>{
                textBottom.style.opacity = '1';
                fullpage_api.setAllowScrolling(true);
            }, 2500)

            fullpage_api.setAllowScrolling(false);

        }
        if(origin.index==3 && direction=='up'){
            let scene1 = document.querySelector('.scene1');
            let scene2 = document.querySelector('.scene2');
            let bigTruck = document.querySelector('#big-truck');
            let longRoadImg = document.querySelectorAll('.long-road img');
            let longRoadText = document.querySelector('.long-road-text');
            let scene2p = document.querySelectorAll('.scene2 p')
            setTimeout(()=>{
                scene2img[1].style.left = '0%'
                scene2p[0].style.opacity = '0' 
                scene2p[1].style.opacity = '0'
                scene2p[2].style.opacity = '0' 
                scene2p[3].style.opacity = '0'                
            }, 1500)
            scene1.style.left = '0%'
            scene2.style.left = '100%';
            setTimeout(()=>{
                bigTruck.style.transition = 'all 7s ease'
                bigTruck.style.left = '100%'
                setTimeout(()=>{
                    longRoadText.style.opacity = '1'
                },6000)
                for(let i = 2; i<longRoadImg.length; i++){
                    console.log(i)
                    setTimeout(()=>{
                        longRoadImg[i].style.opacity = '1'
                    }, (i-1)*800)
                }
            },1000);
            fullpage_api.setAllowScrolling(false);
            setTimeout(()=>{
                fullpage_api.setAllowScrolling(true);
            }, 8000);
            let scene2img = document.querySelectorAll('.scene2 img');
            let textBottom= document.querySelector('.text-bottom');
            setTimeout(()=>{
                for(let i=1; i<scene2img.length; i++){
                    scene2img[i].style.opacity = '0'
                }
            }, 1500);
            setTimeout(()=>{
                scene2img[2].style.width = '0%' 
                textBottom.style.opacity = '0';
                          
            }, 1700)
        }
        if(origin.index == 3 && direction == 'down'){
            let scene2img = document.querySelectorAll('.scene2 img');
            let textBottom= document.querySelector('.text-bottom');
            let scene2p = document.querySelectorAll('.scene2 p')
            setTimeout(()=>{
                scene2img[1].style.left = '0%'            
            }, 1500)
            setTimeout(()=>{
                for(let i=1; i<scene2img.length; i++){
                    scene2img[i].style.opacity = '0'
                }
            }, 1500);
            
            setTimeout(()=>{
                scene2img[2].style.width = '0%' 
                textBottom.style.opacity = '0';
                scene2p[0].style.opacity = '0' 
                scene2p[1].style.opacity = '0'
                scene2p[2].style.opacity = '0' 
                scene2p[3].style.opacity = '0'            
            }, 1700);

            let scene2 = document.querySelector('.scene2');
            let scene3 = document.querySelector('.scene3');

            scene2.style.top = '-100%'
            scene3.style.top = '0';

            let modal = document.querySelector('.modal');
            setTimeout(()=>{
                modal.style.opacity = '1'
                modal.style.transform = 'scale(1)'
            }, 1000)
           


        }
        if(origin.index==4 && direction=='up'){
            let scene2img = document.querySelectorAll('.scene2 img');
            let textBottom= document.querySelector('.text-bottom');
            let scene2p = document.querySelectorAll('.scene2 p')
            setTimeout(()=>{
                for(let i=1; i<scene2img.length; i++){
                    scene2img[i].style.opacity = '1'
                }
            }, 1500);
            setTimeout(()=>{
                scene2img[1].style.left = '15%'            
            }, 1500)
            setTimeout(()=>{
                scene2img[2].style.width = '20%' 
                textBottom.style.opacity = '1'; 
                scene2p[0].style.opacity = '1' 
                scene2p[1].style.opacity = '1'
                scene2p[2].style.opacity = '1' 
                scene2p[3].style.opacity = '1'                  
            }, 1700);

            let scene2 = document.querySelector('.scene2');
            let scene3 = document.querySelector('.scene3');

            scene2.style.top = '0%'
            scene3.style.top = '100%'
            let modal = document.querySelector('.modal');
            setTimeout(()=>{
                modal.style.opacity = '0'
                modal.style.transform = 'scale(0)'
            }, 1000)
        }

        if(origin.index==4 && direction == 'down'){
            //console.log('4down')
            let scene4 = document.querySelector('.scene4');
            let scene3 = document.querySelector('.scene3');

            scene4.style.top = '0%'
            scene3.style.top = '-100%'
            let modal = document.querySelector('.modal');
            setTimeout(()=>{
                modal.style.opacity = '0'
                modal.style.transform = 'scale(0)'
            }, 1000);

            let s4p = document.querySelector('.s4 p');
            let oilwraper = document.querySelector('.s4 .oil-wraper');
            let graphwraper = document.querySelector('.s4 .graph-wraper');
            let oilImg = document.querySelectorAll('.s4 .oil-wraper img');
          
            fullpage_api.setAllowScrolling(false)
            setTimeout(()=>{
                s4p.style.opacity = '1'
            }, 1100);
            setTimeout(()=>{
                oilwraper.style.opacity = '1'
                graphwraper.style.opacity = '1'
               
            }, 2000);

            setTimeout(()=>{
                oilImg[0].style.marginTop = '-75%'
                oilImg[2].style.marginTop = '100%'
                fullpage_api.setAllowScrolling(true)
            }, 2500)

        }

        if(origin.index==5 && direction == 'up'){
            let scene4 = document.querySelector('.scene4');
            let scene3 = document.querySelector('.scene3');

            scene4.style.top = '100%'
            scene3.style.top = '0%';
            let modal = document.querySelector('.modal');
            setTimeout(()=>{
                modal.style.opacity = '1'
                modal.style.transform = 'scale(1)'
            }, 1000);
            let oilwraper = document.querySelector('.oil-wraper');
            let graphwraper = document.querySelector('.graph-wraper');
            let oilImg = document.querySelectorAll('.s4 .oil-wraper img');
            let s4p = document.querySelector('.s4 p')
            setTimeout(()=>{
                s4p.style.opacity = '0'
                oilwraper.style.opacity = '0'
                graphwraper.style.opacity = '0'
                oilImg[0].style.marginTop = '0'
                oilImg[2].style.marginTop = '0'
            }, 1100)
        }

        if(origin.index == 5 && direction == 'down'){
            console.log('5down')
            let oilwraper = document.querySelector('.oil-wraper');
            let graphwraper = document.querySelector('.graph-wraper');
            let oilImg = document.querySelectorAll('.s4 .oil-wraper img');
            let s4p = document.querySelector('.s4 p')
            setTimeout(()=>{
                s4p.style.opacity = '0'
                oilwraper.style.opacity = '0'
                graphwraper.style.opacity = '0'
                oilImg[0].style.marginTop = '0'
                oilImg[2].style.marginTop = '0'
            }, 1100);

            let oilwraper5 = document.querySelector('.s5 .oil-wraper');
            let graphwraper5 = document.querySelector('.s5 .graph-wraper');
            let oilImg5 = document.querySelectorAll('.s5 .oil-wraper img');
            let s5p = document.querySelector('.s5 p');

            fullpage_api.setAllowScrolling(false)
            setTimeout(()=>{
                s5p.style.opacity = '1'
            }, 1100);
            setTimeout(()=>{
                oilwraper5.style.opacity = '1'
                graphwraper5.style.opacity = '1'
               
            }, 2000);

            setTimeout(()=>{
                //oilImg5[0].style.marginTop = '-75%'
                oilImg5[1].style.marginTop = '100%'
                fullpage_api.setAllowScrolling(true)
            }, 2500)

        }

        if(origin.index == 6 && direction == 'up'){
            let s4p = document.querySelector('.s4 p');
            let oilwraper = document.querySelector('.oil-wraper');
            let graphwraper = document.querySelector('.graph-wraper');
            let oilImg = document.querySelectorAll('.oil-wraper img');
          
            fullpage_api.setAllowScrolling(false)
            setTimeout(()=>{
                s4p.style.opacity = '1'
            }, 1100);
            setTimeout(()=>{
                oilwraper.style.opacity = '1'
                graphwraper.style.opacity = '1'
               
            }, 2000);

            setTimeout(()=>{
                oilImg[0].style.marginTop = '-75%'
                oilImg[2].style.marginTop = '100%'
                fullpage_api.setAllowScrolling(true)
            }, 2500);

            let oilwraper5 = document.querySelector('.s5 .oil-wraper');
            let graphwraper5 = document.querySelector('.s5 .graph-wraper');
            let oilImg5 = document.querySelectorAll('.s5 .oil-wraper img');
            let s5p = document.querySelector('.s5 p');

            fullpage_api.setAllowScrolling(false)
            setTimeout(()=>{
                s5p.style.opacity = '0'
            }, 1100);
            setTimeout(()=>{
                oilwraper5.style.opacity = '0'
                graphwraper5.style.opacity = '0'
               
            }, 2000);

            setTimeout(()=>{
                //oilImg5[0].style.marginTop = '0'
                oilImg5[1].style.marginTop = '0'
                fullpage_api.setAllowScrolling(true)
            }, 2500)
        }

        if(origin.index == 6 && direction=='down'){
           
            console.log('6down')
            let oilwraper5 = document.querySelector('.s5 .oil-wraper');
            let graphwraper5 = document.querySelector('.s5 .graph-wraper');
            let oilImg5 = document.querySelectorAll('.s5arrow');
            let s5p = document.querySelector('.s5 p');

            setTimeout(()=>{
                s5p.style.opacity = '0'
                oilwraper5.style.opacity = '0'
                graphwraper5.style.opacity = '0'
                //oilImg5[0].style.marginTop = '0'
                oilImg5[0].style.marginTop = '0'
            }, 1000);

        }

        if(origin.index == 7 && direction == 'up'){
            let oilwraper5 = document.querySelector('.s5 .oil-wraper');
            let graphwraper5 = document.querySelector('.s5 .graph-wraper');
            let oilImg5 = document.querySelectorAll('.s5 .oil-wraper img');
            let s5p = document.querySelector('.s5 p');

            let scene4 = document.querySelector('.scene4');
            let scene6 = document.querySelector('.scene6');

            scene4.style.top = '0';
            scene6.style.top = '100%'

            fullpage_api.setAllowScrolling(false)
            setTimeout(()=>{
                s5p.style.opacity = '1'
            }, 1100);
            setTimeout(()=>{
                oilwraper5.style.opacity = '1'
                graphwraper5.style.opacity = '1'
            }, 2000);

            setTimeout(()=>{
                //oilImg5[0].style.marginTop = '-75%'
                oilImg5[1].style.marginTop = '100%'
                fullpage_api.setAllowScrolling(true)
            }, 2500);
        }
        if(origin.index == 7 && direction == 'down'){
            fullpage_api.setAllowScrolling(false)
            let scene4 = document.querySelector('.scene4');
            let scene6 = document.querySelector('.scene6');
            console.log('7down')
            scene4.style.top = '-100%';
            scene6.style.top = '0'
        }
        if(origin.index == 8 && direction == 'up'){
            let scene4 = document.querySelector('.scene4');
            let scene6 = document.querySelector('.scene6');
            scene4.style.top = '0';
            scene6.style.top = '100%'
        }

        if(origin.index==8 && direction=='down'){
            let scene7 = document.querySelector('.scene7');
            let scene6 = document.querySelector('.scene6');

            scene7.style.top = '0'
            scene6.style.top = '-100%'
        }

        if(origin.index==9 && direction=='up'){
            let scene7 = document.querySelector('.scene7');
            let scene6 = document.querySelector('.scene6');

            scene7.style.top = '100%'
            scene6.style.top = '0'
        }
        if(origin.index==9 && direction == 'down'){
            let scene8 = document.querySelector('.scene8');
            let scene7 = document.querySelector('.scene7');

            scene8.style.top = '0';
            scene7.style.top = '-100%'
        }
        if(origin.index==10 && direction=='up'){
            let scene8 = document.querySelector('.scene8');
            let scene7 = document.querySelector('.scene7');

            scene8.style.top = '100%';
            scene7.style.top = '0'
        }
    }
});
//default scroll
fullpage_api.setAllowScrolling(false);
//fullpage_api.setKeyboardScrolling(false);


function ShipMovement(){
    let ship = document.querySelector('#ship');
    let bool = true;
  
    setTimeout(()=>{
        ship.style.left = '20%'
    },300);

    setInterval(()=>{
        bool = bool ? false: true;
        if(bool){
            ship.style.left = '3%'
            setTimeout(()=>{
                ship.style.transform = 'rotateY(0deg)'
            }, 1700)
        }else{
            ship.style.left = '20%'
            setTimeout(()=>{
                ship.style.transform = 'rotateY(-180deg)'
            }, 1700)
            
        }
    }, 2500);
}


let waves = document.querySelectorAll('.cover-wrapper img');
function Wave(){
    let bool = true;
    setInterval(()=>{
        bool = bool ? false: true;
        if(bool){
            waves[4].style.bottom = '20%'
        }else{
            waves[4].style.bottom = '18%'
        }
    }, 1000);

    let bool2 = true;
    setInterval(()=>{
        bool2 = bool2 ? false: true;
        if(bool2){
            waves[5].style.bottom = '16%'
        }else{
            waves[5].style.bottom = '18%'
        }
    }, 900);

    let bool3 = true;
    setInterval(()=>{
        bool3 = bool3 ? false: true;
        if(bool3){
            waves[6].style.bottom = '15%'
        }else{
            waves[6].style.bottom = '19%'
        }
    }, 1200);
   
}

function RevealRoad(){
    let greenReveal = document.querySelector('.green-reveal');
    let road = document.querySelector('.road-wrapper');
    setTimeout(()=>{
        if(screen.width<768){
            greenReveal.style.top = '100%'
            greenReveal.style.left = '0'
        }else{
            greenReveal.style.left = '100%'
        }
        road.style.opacity = 1
      
    }, 2000)
}

function ScaleItem(){
    setTimeout(()=>{
        waves[9].style.transform = 'scale(1)';
        waves[9].style.opacity = '1';
    }, 3500);

    setTimeout(()=>{
        waves[8].style.transform = 'scale(1)';
        waves[8].style.opacity = '1';
    }, 3600);

    setTimeout(()=>{
        waves[7].style.transform = 'scale(1)';
        waves[7].style.opacity = '1';
    }, 3700);
   
    setTimeout(()=>{
        waves[12].style.transform = 'scale(1)';
        waves[12].style.opacity = '1';
    }, 3800);

    setTimeout(()=>{
        waves[11].style.transform = 'scale(1)';
        waves[11].style.opacity = '1';
    }, 3900);

    setTimeout(()=>{
        waves[10].style.transform = 'scale(1)';
        waves[10].style.opacity = '1';
    }, 4100);
};

function AnimateSmoke(){
    let smoke = document.querySelector('#landsmoke');
    let bool = true;
    setTimeout(()=>{
        setInterval(()=>{
            bool = bool ? false: true;
            if(bool){
                smoke.style.opacity = '1'
                
            }else{
                smoke.style.opacity = '0' 
            }
        }, 1000)
    }, 3500)
    
}

//stop fullpage when click modal
function stopFullpage(){
    let click = document.querySelectorAll('.click');
    let h1 = document.querySelectorAll('.click h1')
    let check = document.querySelectorAll('.check');
    let modal = document.querySelectorAll('.modals');
    let close = document.querySelectorAll('.close-tkdn')
    // close.addEventListener('click', ()=>{
    //     modal[0].style.visibility = 'hidden'
    //     modal[0].style.opacity = '0'
    //     console.log('click')
    //     console.log(modal[2])
    // });
    let panah = document.querySelector('.panah')
    close[5].addEventListener('click', ()=>{
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
        panah.style.display = 'block'
    })
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            modal[i].style.transform = 'scale(0)';
            modal[i].style.opacity = '0';
           // 
        })
    }
  
    
    click[0].style.backgroundImage ='linear-gradient(to bottom left, #8A9332, #D2E04F)'
    h1[0].style.opacity = '1';

    let boold = true;
    let clickoneint = setInterval(()=>{
        boold = boold ? false: true;
        if(boold){
            click[0].style.boxShadow = '-2px 1px 18px #4d4b4b'
        }else{
            click[0].style.boxShadow = 'none'
        }
        
    }, 500)
    click[0].addEventListener('click',()=>{
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
        h1[0].style.opacity = '0.4'
        h1[1].style.opacity = '1'
        check[0].style.visibility = 'visible';
        click[0].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
        click[1].style.backgroundImage = 'linear-gradient(to bottom left, #8A9332, #D2E04F)'
        modal[0].style.transform = 'scale(1)';
        modal[0].style.opacity = '1';
        let boold = true;
        clearInterval(clickoneint)
        let clicktwoint = setInterval(()=>{
            boold = boold ? false: true;
            if(boold){
                click[1].style.boxShadow = '-2px 1px 18px #4d4b4b'
            }else{
                click[1].style.boxShadow = 'none'
            }
        
        }, 500)
        click[1].addEventListener('click',()=>{
            fullpage_api.setAllowScrolling(false);
            fullpage_api.setKeyboardScrolling(false);
            h1[1].style.opacity = '0.4'
            h1[2].style.opacity = '1'
            check[1].style.visibility = 'visible';
            click[1].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
            click[2].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
            modal[1].style.transform = 'scale(1)';
            modal[1].style.opacity = '1';
            let boold = true;
            clearInterval(clicktwoint)
            let clickthreeint = setInterval(()=>{
                boold = boold ? false: true;
                if(boold){
                    click[2].style.boxShadow = '-2px 1px 18px #4d4b4b'
                }else{
                    click[2].style.boxShadow = 'none'
                }
            
            }, 500)
            click[2].addEventListener('click',()=>{
                fullpage_api.setAllowScrolling(false);
                fullpage_api.setKeyboardScrolling(false);
                h1[2].style.opacity = '0.4'
                h1[3].style.opacity = '1'
                check[2].style.visibility = 'visible';
                click[2].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                click[3].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
                modal[2].style.transform = 'scale(1)';
                modal[2].style.opacity = '1';
                let boold = true;
                clearInterval(clickthreeint)
                let clickfourint = setInterval(()=>{
                    boold = boold ? false: true;
                    if(boold){
                        click[3].style.boxShadow = '-2px 1px 18px #4d4b4b'
                    }else{
                        click[3].style.boxShadow = 'none'
                    }
                
                }, 500)
                click[3].addEventListener('click',()=>{
                    fullpage_api.setAllowScrolling(false);
                    fullpage_api.setKeyboardScrolling(false);
                    h1[3].style.opacity = '0.4'
                    h1[4].style.opacity = '1'
                    check[3].style.visibility = 'visible';
                    click[3].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                    click[4].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
                    modal[3].style.transform = 'scale(1)';
                    modal[3].style.opacity = '1';
                    clearInterval(clickfourint)
                    let clickfiveint = setInterval(()=>{
                        boold = boold ? false: true;
                        if(boold){
                            click[4].style.boxShadow = '-2px 1px 18px #4d4b4b'
                        }else{
                            click[4].style.boxShadow = 'none'
                        }
                    
                    }, 500)
                    click[4].addEventListener('click',()=>{
                        fullpage_api.setAllowScrolling(false);
                        fullpage_api.setKeyboardScrolling(false);
                        h1[4].style.opacity = '0.4'
                        h1[5].style.opacity = '1'
                        check[4].style.visibility = 'visible';
                        click[4].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                        click[5].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
                        modal[4].style.transform = 'scale(1)';
                        modal[4].style.opacity = '1';
                        clearInterval(clickfiveint)
                        let clicksixint = setInterval(()=>{
                            boold = boold ? false: true;
                            if(boold){
                                click[5].style.boxShadow = '-2px 1px 18px #4d4b4b'
                            }else{
                                click[5].style.boxShadow = 'none'
                            }
                        
                        }, 500)
                        click[5].addEventListener('click',()=>{
                            fullpage_api.setAllowScrolling(false);
                            fullpage_api.setKeyboardScrolling(false);``
                            h1[5].style.opacity = '0.4'
                            check[5].style.visibility = 'visible';
                            click[5].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                            modal[5].style.transform = 'scale(1)';
                            modal[5].style.opacity = '1';
                            clearInterval(clicksixint)
                        });
                    });
                });
            });
        });
    });

  
   
}


function scrollModal(){
    //TKDN
    let tkdn1 = document.querySelector('.dnscroll1');
    let tkdn2 = document.querySelector('.dnscroll2');
    let scroll = document.querySelector('.scroller');
    let tkdn3 = document.querySelector('.dnscroll3');

    let touchstartY = 0;
    let touchendY = 0;

    tkdn1.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    tkdn1.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            tkdn1.style.left = '-100%'
            tkdn2.style.left = '0' 
            scroll.style.left = '33%'
        }
        
        if (touchendY > touchstartY) {
            //
        }
    }, false);
    let prev = document.querySelector('#prev')
    let next = document.querySelector('#next')

    let initState = 0;

    prev.addEventListener('click', ()=>{
        initState--;
        if(initState <=0){
            initState = 0;
        }
        if(initState==1){
            tkdn2.style.left = '0' 
            tkdn3.style.left = '100%' 
            scroll.style.left = '33%'
        }
        if(initState==0){
            tkdn1.style.left = '0'
            tkdn2.style.left = '100%' 
            scroll.style.left = '5px'
        }
       
    });

    next.addEventListener('click', ()=>{
        initState++;
        if(initState==1){
            tkdn1.style.left = '-100%'
            tkdn2.style.left = '0' 
            scroll.style.left = '33%'
        }
        if(initState==2){
            tkdn2.style.left = '-100%'
            tkdn3.style.left = '0' 
            scroll.style.left = '67%'
        }
        if(initState>=2){
            initState =2;
        }
        
    })
    
    function movetkdn1(e){
        if(e.deltaY>0){
            console.log('down');
            tkdn1.style.left = '-100%'
            tkdn2.style.left = '0' 
            scroll.style.left = '33%'
        }else{

        }
    }
    function movetkdn2(e){
        if(e.deltaY>0){
            console.log('down');
            tkdn2.style.left = '-100%'
            tkdn3.style.left = '0' 
            scroll.style.left = '67%'
        }else{
            tkdn1.style.left = '0'
            tkdn2.style.left = '100%' 
            scroll.style.left = '5px'
        }
    }
    tkdn2.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    tkdn2.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            tkdn2.style.left = '-100%'
            tkdn3.style.left = '0' 
            scroll.style.left = '67%'
        }
        
        if (touchendY > touchstartY) {
            tkdn1.style.left = '0'
            tkdn2.style.left = '100%' 
            scroll.style.left = '5px'
        }
    }, false);

    function movetkdn3(e){
        if(e.deltaY>0){
            console.log('down');
        }else{
            tkdn2.style.left = '0' 
            tkdn3.style.left = '100%' 
            scroll.style.left = '33%'
        }
    }

    tkdn3.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    tkdn3.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
           
        }
        
        if (touchendY > touchstartY) {
            tkdn2.style.left = '0' 
            tkdn3.style.left = '100%' 
            scroll.style.left = '33%'
        }
    }, false);
    
    tkdn1.addEventListener('wheel', movetkdn1)
    tkdn2.addEventListener('wheel', movetkdn2)
    tkdn3.addEventListener('wheel', movetkdn3)


    //DBH
   let dbhSatu = document.querySelector('.dbhSatu');
   let dbhDua = document.querySelector('.dbhDua');
   let dbhTiga = document.querySelector('.dbhTiga');
   let dbhEmpat = document.querySelector('.dbhEmpat');
   let dbhLima = document.querySelector('.dbhLima');
   let dbhEnam = document.querySelector('.dbhEnam')
   let dbhTujuh = document.querySelector('.dbhTujuh')
   let dbhScroller = document.querySelector('.dbh-scroller')

   let dbhPrev = document.querySelector('.prev')
   let dbhNext = document.querySelector('.next')

   let initdbh = 0;
   dbhPrev.addEventListener('click', ()=>{
        initdbh--;
        console.log(initdbh)
        if(initdbh<=0){
            initdbh = 0;
        }
        if(initdbh==5){
            dbhScroller.style.top = '75%'
            dbhTujuh.style.top = '100%'
            dbhEnam.style.top = '0';
        }
        if(initdbh==4){
            dbhScroller.style.top = '60%'
            dbhEnam.style.top = '100%';
            dbhLima.style.top = '0'
        }
        if(initdbh==3){
            dbhScroller.style.top = '45%'
            dbhLima.style.top = '100%'
            dbhEmpat.style.top = '0'
        }
        if(initdbh == 2){
            dbhTiga.style.top = '0'
            dbhEmpat.style.top = '100%'
            dbhScroller.style.top = '30%'
        }
        if(initdbh==1){
            dbhTiga.style.top = '100%'
            dbhDua.style.top = '0'
            dbhScroller.style.top = '15%'
        }
        if(initdbh==0){
            dbhSatu.style.top = '-0'
            dbhDua.style.top = '100%'
            dbhScroller.style.top = '5px'
        }
        
   });

   dbhNext.addEventListener('click', ()=>{
        initdbh++;

        if(initdbh==1){
            dbhSatu.style.top = '-100%'
            dbhDua.style.top = '0'
            dbhScroller.style.top = '15%'
        }
        if(initdbh==2){
            dbhDua.style.top = '-100%'
            dbhTiga.style.top = '0'
            dbhScroller.style.top = '30%'
        }
        if(initdbh==3){
            dbhEmpat.style.top = '0'
            dbhTiga.style.top = '-100%'
            dbhScroller.style.top = '45%'
        }
        if(initdbh==4){
            dbhEmpat.style.top = '-100%'
            dbhLima.style.top = '0'
            dbhScroller.style.top = '60%'
        }
        if(initdbh==5){
            dbhLima.style.top = '-100%'
            dbhEnam.style.top = '0';
            dbhScroller.style.top = '75%'
        }
        if(initdbh==6){
            dbhScroller.style.top = '80%'
            dbhEnam.style.top = '-100%';
            dbhTujuh.style.top = '0'
        }
        if(initdbh>=6){
            initdbh==6;
        }
   })
    
    dbhSatu.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            dbhSatu.style.top = '-100%'
            dbhDua.style.top = '0'
            dbhScroller.style.top = '15%'
        }
    });

    dbhSatu.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    dbhSatu.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            dbhSatu.style.top = '-100%'
            dbhDua.style.top = '0'
            dbhScroller.style.top = '15%'
        }
        
        if (touchendY > touchstartY) {
           //
           
        }
    }, false);

    dbhDua.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            dbhDua.style.top = '-100%'
            dbhTiga.style.top = '0'
            dbhScroller.style.top = '30%'
        }else{
            dbhSatu.style.top = '-0'
            dbhDua.style.top = '100%'
            dbhScroller.style.top = '5px'
        }
    });

    dbhDua.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    dbhDua.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            dbhDua.style.top = '-100%'
            dbhTiga.style.top = '0'
            dbhScroller.style.top = '30%'
        }
        
        if (touchendY > touchstartY) {
           //
           dbhSatu.style.top = '-0'
            dbhDua.style.top = '100%'
            dbhScroller.style.top = '5px'
        }
    }, false);

    dbhTiga.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            dbhEmpat.style.top = '0'
            dbhTiga.style.top = '-100%'
            dbhScroller.style.top = '45%'
        }else{
            dbhTiga.style.top = '100%'
            dbhDua.style.top = '0'
            dbhScroller.style.top = '15%'
        }
    });

    dbhTiga.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    dbhTiga.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            dbhEmpat.style.top = '0'
            dbhTiga.style.top = '-100%'
            dbhScroller.style.top = '45%'
        }
        
        if (touchendY > touchstartY) {
           //
           dbhTiga.style.top = '100%'
            dbhDua.style.top = '0'
            dbhScroller.style.top = '15%'
        }
    }, false);

    dbhEmpat.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            //down
            dbhEmpat.style.top = '-100%'
            dbhLima.style.top = '0'
            dbhScroller.style.top = '60%'
        }else{
            dbhTiga.style.top = '0'
            dbhEmpat.style.top = '100%'
            dbhScroller.style.top = '30%'
        }
    });

    dbhEmpat.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    dbhEmpat.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            dbhEmpat.style.top = '-100%'
            dbhLima.style.top = '0'
            dbhScroller.style.top = '60%'
        }
        
        if (touchendY > touchstartY) {
           //
           dbhTiga.style.top = '0'
            dbhEmpat.style.top = '100%'
            dbhScroller.style.top = '30%'
        }
    }, false);

    dbhLima.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            //down
            dbhLima.style.top = '-100%'
            dbhEnam.style.top = '0';
            dbhScroller.style.top = '75%'
        }else{
            dbhScroller.style.top = '45%'
            dbhLima.style.top = '100%'
            dbhEmpat.style.top = '0'
        }
    });

    dbhLima.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    dbhLima.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            dbhLima.style.top = '-100%'
            dbhEnam.style.top = '0';
            dbhScroller.style.top = '75%'
        }
        
        if (touchendY > touchstartY) {
           //
           dbhScroller.style.top = '45%'
            dbhLima.style.top = '100%'
            dbhEmpat.style.top = '0'
        }
    }, false);

    dbhEnam.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            dbhScroller.style.top = '80%'
            dbhEnam.style.top = '-100%';
            dbhTujuh.style.top = '0'
        }else{
            dbhScroller.style.top = '60%'
            dbhEnam.style.top = '100%';
            dbhLima.style.top = '0'
        }
    });

    dbhEnam.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    dbhEnam.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            dbhScroller.style.top = '80%'
            dbhEnam.style.top = '-100%';
            dbhTujuh.style.top = '0'
        }
        
        if (touchendY > touchstartY) {
           //
           dbhScroller.style.top = '60%'
            dbhEnam.style.top = '100%';
            dbhLima.style.top = '0'
        }
    }, false);

    dbhTujuh.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){

        }else{
            dbhScroller.style.top = '75%'
            dbhTujuh.style.top = '100%'
            dbhEnam.style.top = '0';
        }
    })

    dbhTujuh.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    dbhTujuh.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            //
        }
        
        if (touchendY > touchstartY) {
           //
           dbhScroller.style.top = '75%'
            dbhTujuh.style.top = '100%'
            dbhEnam.style.top = '0';
        }
    }, false);




    //BUMD
    let bumd1 = document.querySelector('.bumd1');
    let bumd2 = document.querySelector('.bumd2');
    let bumdScroller = document.querySelector('.bumd-scroller')
    let prevbumd = document.querySelector('.prevbumd')
    let nextbumd = document.querySelector('.nextbumd')
    let initbumd = 0;

    prevbumd.addEventListener('click', ()=>{
        initbumd--;
        console.log(initbumd)
        if(initbumd<=0){
            bumd1.style.top = '0'
            bumd2.style.top = '100%'
            bumdScroller.style.top = '5px'
            initbumd=0;
        }
        if(initbumd==1){
            // bumd1.style.top = '0'
            // bumd2.style.top = '100%'
            // bumdScroller.style.top = '5px'
        }
    });

    nextbumd.addEventListener('click', ()=>{
        initbumd++;
        if(initbumd==1){
            bumd1.style.top = '-100%'
            bumd2.style.top = '0'
            bumdScroller.style.top = '50%'
        }
        if(initbumd>=1){
            initbumd=1;
        }
    })
    bumd1.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            bumd1.style.top = '-100%'
            bumd2.style.top = '0'
            bumdScroller.style.top = '50%'
        }
    });


    bumd1.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    bumd1.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            bumd1.style.top = '-100%'
            bumd2.style.top = '0'
            bumdScroller.style.top = '50%'
        }
        
        if (touchendY > touchstartY) {
           //
          
        }
    }, false);

    bumd2.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            //down
        }else{
            bumd1.style.top = '0'
            bumd2.style.top = '100%'
            bumdScroller.style.top = '5px'
        }
    });

    bumd2.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    bumd2.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            bumd1.style.top = '-100%'
            bumd2.style.top = '0'
            bumdScroller.style.top = '50%'
        }
        
        if (touchendY > touchstartY) {
            bumd1.style.top = '0'
            bumd2.style.top = '100%'
            bumdScroller.style.top = '5px'
          
        }
    }, false);


    //PINGGIRAN

    let pinggiran1 = document.querySelector('.pinggiran1');
    let pinggiran2 = document.querySelector('.pinggiran2');
    let pinggiran3 = document.querySelector('.pinggiran3');
    let pinggiran4 = document.querySelector('.pinggiran4');
    let pinggiran5 = document.querySelector('.pinggiran5')
    let pinggirScroll = document.querySelector('.pinggiran-scroller')

    let nextpinggiran = document.querySelector('.nextpinggiran');
    let prevpinggiran = document.querySelector('.prevpinggiran')
    let initpinggiran = 0;

    prevpinggiran.addEventListener('click', ()=>{
        initpinggiran--;
        if(initpinggiran==3){
            pinggirScroll.style.top = '60%'
            pinggiran5.style.top = '100%'
            pinggiran4.style.top = '0';
        }
        if(initpinggiran==2){
            pinggiran4.style.top = '100%';
            pinggiran3.style.top = '0';
            pinggirScroll.style.top = '40%'
        }
        if(initpinggiran==1){
            pinggiran2.style.top = '0'
            pinggiran3.style.top = '100%';
            pinggirScroll.style.top = '20%'
        }
        if(initpinggiran<=0){
            pinggiran1.style.top = '0'
            pinggiran2.style.top = '100%'
            pinggirScroll.style.top = '5px'
            initpinggiran = 0;
        }
    });

    nextpinggiran.addEventListener('click', ()=>{
        initpinggiran++;
        if(initpinggiran==1){
            pinggiran1.style.top = '-100%';
            pinggiran2.style.top = '0'
            pinggirScroll.style.top = '20%'
        }
        if(initpinggiran==2){
            pinggiran3.style.top = '0';
            pinggiran2.style.top = '-100%'
            pinggirScroll.style.top = '40%'
        }
        if(initpinggiran==3){
            pinggiran4.style.top = '0'
            pinggiran3.style.top = '-100%';
            pinggirScroll.style.top = '60%'
        }
        if(initpinggiran>=4){
            pinggiran5.style.top = '0'
            pinggiran4.style.top = '-100%';
            pinggirScroll.style.top = '80%'
            initpinggiran = 4;
        }
    })

    pinggiran1.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            pinggiran1.style.top = '-100%';
            pinggiran2.style.top = '0'
            pinggirScroll.style.top = '20%'
        }
    });
    pinggiran1.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    pinggiran1.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            pinggiran1.style.top = '-100%';
            pinggiran2.style.top = '0'
            pinggirScroll.style.top = '20%'
        }
        
        if (touchendY > touchstartY) {
          
        }
    }, false);

    pinggiran2.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            pinggiran3.style.top = '0';
            pinggiran2.style.top = '-100%'
            pinggirScroll.style.top = '40%'
        }else{
            pinggiran1.style.top = '0'
            pinggiran2.style.top = '100%'
            pinggirScroll.style.top = '5px'
        }
    });

    pinggiran2.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    pinggiran2.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            pinggiran3.style.top = '0';
            pinggiran2.style.top = '-100%'
            pinggirScroll.style.top = '40%'
        }
        
        if (touchendY > touchstartY) {
            pinggiran1.style.top = '0'
            pinggiran2.style.top = '100%'
            pinggirScroll.style.top = '5px'
        }
    }, false);

    pinggiran3.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            pinggiran4.style.top = '0'
            pinggiran3.style.top = '-100%';
            pinggirScroll.style.top = '60%'
        }else{
            pinggiran2.style.top = '0'
            pinggiran3.style.top = '100%';
            pinggirScroll.style.top = '20%'
        }
    });

    pinggiran3.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    pinggiran3.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            pinggiran4.style.top = '0'
            pinggiran3.style.top = '-100%';
            pinggirScroll.style.top = '60%'
        }
        
        if (touchendY > touchstartY) {
            pinggiran2.style.top = '0'
            pinggiran3.style.top = '100%';
            pinggirScroll.style.top = '20%'
        }
    }, false);

    pinggiran4.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            pinggiran5.style.top = '0'
            pinggiran4.style.top = '-100%';
            pinggirScroll.style.top = '80%'
        }else{
            pinggiran4.style.top = '100%';
            pinggiran3.style.top = '0';
            pinggirScroll.style.top = '40%'
        }
    });

    pinggiran4.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    pinggiran4.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
            pinggiran5.style.top = '0'
            pinggiran4.style.top = '-100%';
            pinggirScroll.style.top = '80%'
        }
        
        if (touchendY > touchstartY) {
            pinggiran4.style.top = '100%';
            pinggiran3.style.top = '0';
            pinggirScroll.style.top = '40%'
        }
    }, false);

    pinggiran5.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            //down
        }else{
            pinggirScroll.style.top = '60%'
            pinggiran5.style.top = '100%'
            pinggiran4.style.top = '0';
        }
    })

    pinggiran5.addEventListener('touchstart', function(event) {
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    pinggiran5.addEventListener('touchend', function(event) {
        touchendY = event.changedTouches[0].screenY;
        if (touchendY < touchstartY) {
           //
        }
        
        if (touchendY > touchstartY) {
            pinggirScroll.style.top = '60%'
            pinggiran5.style.top = '100%'
            pinggiran4.style.top = '0';
        }
    }, false);
    
}

//change laut image;
let laut = document.querySelector('#laut');
let roadMobile = document.querySelector('#roadmobile')
if(screen.width<768){
    laut.src = './img/scene_1/laut_mobile.png'
    roadMobile.src = './img/road_mobile.png'
}

let preloadContent = document.querySelector('.preload-content img')
let setBool = true;
let loader = setInterval(()=>{
    setBool = setBool ? false: true;
    if(setBool){
        preloadContent.style.opacity = '1'
    }else{
        preloadContent.style.opacity = '0'
    }
}, 400);


let panah = document.querySelector('.panah');
let bools = true;
setInterval(()=>{
    bools = bools ? false: true;
    if(bools){
        panah.style.bottom = '10px'
    }else{
        panah.style.bottom = '7px'
    }
}, 500)

window.addEventListener('load', ()=>{
        let preloader = document.querySelector('.preloader');
        preloader.style.opacity = 0;
        clearInterval(loader)
    ShipMovement();
    Wave();
    RevealRoad();
    ScaleItem();
    AnimateSmoke();
    setTimeout(()=>{
        let cover = document.querySelector('.cover-wrapper');
        let whiteOpaque = document.querySelector('.white-opaque');
        let texts = document.querySelectorAll('.white-opaque p');
        let road = document.querySelector('.road-wrapper');
        let static = document.querySelectorAll('.static')
        road.style.zIndex = 6;
            waves[10].style.zIndex = 7;
            whiteOpaque.style.opacity = '1';
            for(let i=0; i<texts.length; i++){
                setTimeout(()=>{
                    texts[i].style.left = '0'
                },i*150 );
            }
            let birds = document.querySelectorAll('.cover-wrapper img');
            for(let i=15; i<birds.length-1; i++){
                birds[i].style.zIndex = 4;
            }
        fullpage_api.setAllowScrolling(true);
        let scroll = document.querySelector('#scroll');
        scroll.style.opacity = '1'
        let bool = true;
        setInterval(()=>{
            bool = bool ? false : true;
            if(bool){
                scroll.style.bottom = '65px'
            }else{
                scroll.style.bottom = '8px'
            }
        }, 400)
    },4500);
    stopFullpage();

    scrollModal();
})
