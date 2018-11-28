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


        // if(origin.index==1 && direction == 'up'){
        //     for(let i=0; i<texts.length; i++){
        //         setTimeout(()=>{
        //             texts[i].style.left = '-100%'
        //         },i*300 )
        //     }
        //     setTimeout(()=>{
        //         road.style.zIndex = 8;
        //         waves[10].style.zIndex = 9;
        //         whiteOpaque.style.opacity = '0';
        //         let birds = document.querySelectorAll('.cover-wrapper img');
        //         for(let i=15; i<birds.length; i++){
        //             birds[i].style.zIndex = 9;
        //         }
        //     }, 1000);
        // }
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
            }, 1500);

            setTimeout(()=>{
                sceneRoad.style.left = '-100%';
            }, 3000)
           
           
            fullpage_api.setAllowScrolling(false);
            setTimeout(()=>{
                fullpage_api.setAllowScrolling(true);
            }, 3600)
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
                sceneRoad.style.left = '50%';
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
            for(let i = 2; i<longRoadImg.length; i++){
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
            for(let i = 2; i<longRoadImg.length; i++){
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
                for(let i = 2; i<longRoadImg.length; i++){
                    longRoadImg[i].style.opacity = '0'
                }
            },1000);
            scene1.style.left = '-100%'
            scene2.style.left = '0%'

            let scene2img = document.querySelectorAll('.scene2 img');
            let textBottom= document.querySelector('.text-bottom');
            setTimeout(()=>{
                for(let i=1; i<scene2img.length; i++){
                    scene2img[i].style.opacity = '1'
                }
            }, 1500);
            setTimeout(()=>{
                scene2img[2].style.width = '20%'            
            }, 1700)

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
            setTimeout(()=>{
                for(let i=1; i<scene2img.length; i++){
                    scene2img[i].style.opacity = '0'
                }
            }, 1500);
            setTimeout(()=>{
                scene2img[2].style.width = '0%' 
                textBottom.style.opacity = '0';           
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
            setTimeout(()=>{
                for(let i=1; i<scene2img.length; i++){
                    scene2img[i].style.opacity = '1'
                }
            }, 1500);
            setTimeout(()=>{
                scene2img[2].style.width = '20%' 
                textBottom.style.opacity = '1';           
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
                oilImg[0].style.marginTop = '-5vh'
                oilImg[2].style.marginTop = '3vh'
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
                oilImg5[0].style.marginTop = '-5vh'
                oilImg5[2].style.marginTop = '3vh'
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
                oilImg[0].style.marginTop = '-5vh'
                oilImg[2].style.marginTop = '3vh'
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
            let oilwraper5 = document.querySelector('.s5 .oil-wraper');
            let graphwraper5 = document.querySelector('.s5 .graph-wraper');
            let oilImg5 = document.querySelectorAll('.s5 .oil-wraper img');
            let s5p = document.querySelector('.s5 p');

            setTimeout(()=>{
                s5p.style.opacity = '0'
                oilwraper5.style.opacity = '0'
                graphwraper5.style.opacity = '0'
                oilImg5[0].style.marginTop = '0'
                oilImg5[2].style.marginTop = '0'
            }, 1000);

            let s6p = document.querySelector('.s6 p');
            let s6bawah = document.querySelector('#bawah6')
            setTimeout(()=>{
                s6p.style.opacity = '1'
                s6bawah.style.opacity = '1'
            }, 1100);

        }

        if(origin.index == 7 && direction == 'up'){
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
                oilImg5[0].style.marginTop = '-32px'
                oilImg5[2].style.marginTop = '72px'
                fullpage_api.setAllowScrolling(true)
            }, 2500);


            let s6p = document.querySelector('.s6 p');
            setTimeout(()=>{
                s6p.style.opacity = '0'
            }, 1000);
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

// function MoveBirds(){
//     let birds = document.querySelectorAll('.cover-wrapper img');
  
//         for(let i=13; i<19; i++){
//             birds[i].style.opacity = 1;
//             birds[i].style.zIndex = 9;
//         }

//         function moving(e){
//             for(let i=13; i<19; i++){
//                 let j = birds[i].offsetLeft;
//                 let k = birds[i].offsetTop;
//                 if(e.clientX<positionX){
//                     //console.log('left')
//                     birds[i].style.left = `${j+1}px`;
//                 }else{
//                     //console.log('right')
//                     birds[i].style.left = `${j-1}px`;
//                 }

//                 if(e.clientY<positionY){
//                     //console.log('up')
//                     birds[i].style.top = `${k+1}px`;
//                 }else{
//                     //console.log('down')
//                     birds[i].style.top = `${k-1}px`;
//                 }
//             }
//             positionX = e.clientX;
//             positionY = e.clientY;
//         }
//         let positionX = 0;
//         positionY = 0;
//         window.addEventListener('mousemove', moving)
   
// }

window.addEventListener('load', ()=>{
    ShipMovement();
    Wave();
    RevealRoad();
    ScaleItem();
    AnimateSmoke();
    //MoveBirds();
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

    //scrollPageTwo()
    
})
