// const weatherScorer = (weather) =>{
//     let score
//       if (weather == 'rainy'){
//           score = 1
//       } else if(weather == 'sunny'){
//           score = -1
//       }
//       else{
//           score = 0
//       }
  
//       return score
//   }
//   console.log(weatherScorer('sunny'))


// OPTION 2

// const weatherScorer = (weather, weather2) =>{
//     let score
//       if (weather == 'rainy' && weather2 == 'sunny'){
//           score = 2
//       } else if(weather == 'sunny'){
//           score = -1
//       }
//       else{
//           score = 0
//       }
  
//       return score
//   }
//   console.log(weatherScorer('rainy','overcast'))

const weatherScorer = (weather, weather2) =>{
let score

if (weather == 'rainy' && weather2 == 'overcast'){
    score = 5
}

else if(weather == 'sunny'){
    score = 2
}
else{
    score = 0
}
return score

}
console.log(weatherScorer('rainy','overcast'))

