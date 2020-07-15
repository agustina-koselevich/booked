var result = $('#result-p');
var step1 = $('#step1');
var step2 = $('#step2');
var step3 = $('#step3');
var step4 = $('#step4');
var step5 = $('#step5');
var step6 = $('#step6');
var step7 = $('#step7');

$(document).ready(function () {
    $('.btn-help').click(function(){
        result.toggle(1000);
    })

    $('.btn1').click(function(){
        step1.hide();

    })

    $('.btn1').click(function(){
        step2.show(5000);

    })

    $('.btn-send').click(function(){
        step2.hide(5000);

    })

  
    $('.btn-send').click(function(){
        step3.show(5000);

    })

    $('.boton1-bi').click(function(){
        step3.hide(5000);

    })


    $('.boton1-bi').click(function(){
        step4.show();

    })

    $('.btn1-r').click(function(){
        step4.hide();

    })

    $('.btn1-r').click(function(){
        step5.show();

    })

    $('.btn-send2').click(function(){
        step5.hide();

    })

    $('.btn-send2').click(function(){
        step6.show();

    })
    
    $('.btn-ctz1').click(function(){
        step6.hide();

    })

    $('.btn-ctz1').click(function(){
        step7.show();

    })
        
        

});


document.querySelector('.btn-send').addEventListener('click', traerDatos());

function traerDatos(){
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'js/data.json', true);

    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            
        let data = JSON.parse(this.responseText);
        //console.log(data);
        
        let res = document.querySelector('#hotel1');
        res.innerHTML = '';

        for(let item of data){
            //console.log(item.location);
            res.innerHTML += `
            <img class="hotel1-img" src="${item.img}" alt="hotel1"/>
            <div class="contenedor-hoteles-textos">
            <h4 class="nombre-hotel">${item.name}</h4>
            <h4 class="ubicacion-hotel"><img class="location-hotel" src="images/location-hotel.svg" alt="location"/>${item.location}</h4>
            <p class="descripcion-hotel">${item.description}</p>
            <p class="price-hotel">${item.precio}<span class="texto-night-light"> / night</span></p>
            <img class="stars-fav" src="images/stars-hotel.svg" alt="heart"/>
            <p class="stars-hotel">${item.rate}</p>

            `
            
        }

        }
    }
}