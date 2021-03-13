
let cities = []
let doneWithCities = false 
let i = 0

while (doneWithCities == false) {
    cities[i] = prompt ("Enter the next city:")
    cities++
    doneWithCities = confirm ("Are you done entering cities?")    
  }    
      
//Shows while statement, determines when loop breaks
while (doneWithCities == false) {
    console.log(cities.toLowerCase())
    }

