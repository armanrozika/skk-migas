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
            let oilImg = document.querySelectorAll('.oil-wraper img');
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
            let oilwraper = document.querySelector('.oil-wraper');
            let graphwraper = document.querySelector('.graph-wraper');
            let oilImg = document.querySelectorAll('.oil-wraper img');
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
                oilImg5[0].style.marginTop = '-75%'
                oilImg5[2].style.marginTop = '100%'
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
                oilImg5[0].style.marginTop = '0'
                oilImg5[2].style.marginTop = '0'
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
                oilImg5[0].style.marginTop = '0'
                oilImg5[1].style.marginTop = '0'
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
                oilImg5[0].style.marginTop = '-75%'
                oilImg5[2].style.marginTop = '100%'
                fullpage_api.setAllowScrolling(true)
            }, 2500);
        }
        if(origin.index == 7 && direction == 'down'){
            let scene4 = document.querySelector('.scene4');
            let scene6 = document.querySelector('.scene6');

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
        road.style.opacity = 1
        greenReveal.style.left = '100%'
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
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            modal[i].style.transform = 'scale(0)';
            modal[i].style.opacity = '0';
            fullpage_api.setAllowScrolling(true);
        })
    }
  
    // for(let i=0; i<click.length; i++){
    //     modal[i].addEventListener('click', (e)=>{
    //         if(e.target == modal[i]){
    //             modal[i].style.transform = 'scale(0)';
    //             modal[i].style.opacity = '0';
    //             fullpage_api.setAllowScrolling(true);
    //         }
    //     })
    // }
    click[0].style.backgroundImage ='linear-gradient(to bottom left, #8A9332, #D2E04F)'
    h1[0].style.opacity = '1'
    click[0].addEventListener('click',()=>{
        fullpage_api.setAllowScrolling(false);
        h1[0].style.opacity = '0.4'
        h1[1].style.opacity = '1'
        check[0].style.visibility = 'visible';
        click[0].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
        click[1].style.backgroundImage = 'linear-gradient(to bottom left, #8A9332, #D2E04F)'
        modal[0].style.transform = 'scale(1)';
        modal[0].style.opacity = '1';
        click[1].addEventListener('click',()=>{
            fullpage_api.setAllowScrolling(false);
            h1[1].style.opacity = '0.4'
            h1[2].style.opacity = '1'
            check[1].style.visibility = 'visible';
            click[1].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
            click[2].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
            modal[1].style.transform = 'scale(1)';
            modal[1].style.opacity = '1';
            click[2].addEventListener('click',()=>{
                fullpage_api.setAllowScrolling(false);
                h1[2].style.opacity = '0.4'
                h1[3].style.opacity = '1'
                check[2].style.visibility = 'visible';
                click[2].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                click[3].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
                modal[2].style.transform = 'scale(1)';
                modal[2].style.opacity = '1';
                click[3].addEventListener('click',()=>{
                    fullpage_api.setAllowScrolling(false);
                    h1[3].style.opacity = '0.4'
                    h1[4].style.opacity = '1'
                    check[3].style.visibility = 'visible';
                    click[3].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                    click[4].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
                    modal[3].style.transform = 'scale(1)';
                    modal[3].style.opacity = '1';
                    click[4].addEventListener('click',()=>{
                        fullpage_api.setAllowScrolling(false);
                        h1[4].style.opacity = '0.4'
                        h1[5].style.opacity = '1'
                        check[4].style.visibility = 'visible';
                        click[4].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                        click[5].style.backgroundImage = 'linear-gradient(to bottom left,#8A9332, #D2E04F)'
                        modal[4].style.transform = 'scale(1)';
                        modal[4].style.opacity = '1';
                        click[5].addEventListener('click',()=>{
                            fullpage_api.setAllowScrolling(false);
                            h1[5].style.opacity = '0.4'
                            check[5].style.visibility = 'visible';
                            click[5].style.backgroundImage = 'linear-gradient(to bottom left, #750a0c, #f11f1f)'
                            modal[5].style.transform = 'scale(1)';
                            modal[5].style.opacity = '1';
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
    function movetkdn3(e){
        if(e.deltaY>0){
            console.log('down');
        }else{
            tkdn2.style.left = '0' 
            tkdn3.style.left = '100%' 
            scroll.style.left = '33%'
        }
    }
    
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
    
    dbhSatu.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            dbhSatu.style.top = '-100%'
            dbhDua.style.top = '0'
            dbhScroller.style.top = '15%'
        }
    });

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

    dbhTujuh.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){

        }else{
            dbhScroller.style.top = '75%'
            dbhTujuh.style.top = '100%'
            dbhEnam.style.top = '0';
        }
    })




    //BUMD
    let bumd1 = document.querySelector('.bumd1');
    let bumd2 = document.querySelector('.bumd2');
    let bumdScroller = document.querySelector('.bumd-scroller')

    bumd1.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            bumd1.style.top = '-100%'
            bumd2.style.top = '0'
            bumdScroller.style.top = '50%'
        }
    })

    bumd2.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            //down
        }else{
            bumd1.style.top = '0'
            bumd2.style.top = '100%'
            bumdScroller.style.top = '5px'
        }
    });


    //PINGGIRAN

    let pinggiran1 = document.querySelector('.pinggiran1');
    let pinggiran2 = document.querySelector('.pinggiran2');
    let pinggiran3 = document.querySelector('.pinggiran3');
    let pinggiran4 = document.querySelector('.pinggiran4');
    let pinggiran5 = document.querySelector('.pinggiran5')
    let pinggirScroll = document.querySelector('.pinggiran-scroller')


    pinggiran1.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            pinggiran1.style.top = '-100%';
            pinggiran2.style.top = '0'
            pinggirScroll.style.top = '20%'
        }
    });

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

    pinggiran5.addEventListener('wheel', (e)=>{
        if(e.deltaY>0){
            //down
        }else{
            pinggirScroll.style.top = '60%'
            pinggiran5.style.top = '100%'
            pinggiran4.style.top = '0';
        }
    })
    
}

window.addEventListener('load', ()=>{
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
            for(let i=15; i<birds.length; i++){
                birds[i].style.zIndex = 4;
            }
        fullpage_api.setAllowScrolling(true);
    },4500);
    stopFullpage();

    scrollModal();
})
