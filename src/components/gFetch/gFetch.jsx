import React from 'react'
let productos =[
  {id:1,
    nombre:'Acuario Bettera Pecera Betta Ez Care 2.5 Lts Marina Black',
    img:'../../src/img/PECERA.jpg',
    precio:1200,
    categoria:"Productos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:2
  },
  
  {id:2,
    nombre:"Alimento Peces Agua Fría Acuario Tetra Goldfish Pellets 53g",
    img:"../../src/img/ALIMENTOPECES.jpg",
    precio:999,
    categoria:"Alimentos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:0
  },
  
  {id:3,
    nombre:"Alimento Excellent Perros Adulto Small Breed 3kg Razas Mini",
    img:"../../src/img/ALIMENTOEXELLENT.jpg",
    precio:1710,
    categoria:"Alimentos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:4,
    nombre:"Curabichera Cicatrizante Bactrovet Plata Aerosol 420ml Konig",
    img:"../../src/img/CURABICHERA.png",
    precio:800,
    categoria:"Productos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:5,
    nombre:"Bandeja Sanitaria Perros Cachorro Pasto 45×32 Facil Limpieza",
    img:"../../src/img/BANDEJASANITARIA.jpg",
    precio:3250,
    categoria:"Productos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:6,
    nombre:"Alimento Gatos Balanceado Purina Proplan Adult +7 Cat 7.5 Kg",
    img:"../../src/img/ALIMENTOPROPLANGATO.jpg",
    precio:10300,
    categoria:"Alimentos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:7,
    nombre:"Arnes Pretal Conejos Chinchillas Cobayos Gatos Large Azul",
    img:"../../src/img/ARNESGATO.jpg",
    precio:2700,
    categoria:"Productos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:8,
    nombre:"Alimento Chinchilla Mezcla Especial Balanceado 600gr",
    img:"../../src/img/ALIMENTOCHINCHILLA.png",
    precio:300,
    categoria:"Alimentos",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:9,
    nombre:"Reptiles",
    img:"../../src/img/REPTILES.png",
    precio:20000,
    categoria:"Animales",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:10,
    nombre:"Aves",
    img:"../../src/img/AVES.png",
    precio:10000,
    categoria:"Animales",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  },
  
  {id:11,
    nombre:"Gatos",
    img:"../../src/img/GATOS.png",
    precio:30000,
    categoria:"Animales",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
  }, 
 
  {id:12,
    nombre:"Perros",
    img:"../../src/img/PERROS.png",
    precio:40000,
    categoria:"Animales",
    descripcion:'Esta es la descripcion que sirve para decir todo hacerca del producto, quizas falta mas texto quizas no. hay que ver, pero yo escrito total es para rellenar',
    stock:10
   } ]
                
export  const gFetch = new Promise((resolve,reject)=>{
    let condition=true
  
    if (condition) {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    } else {
      reject('no se resolvio')
    }
   })