
const findpop = document.getElementById("findpop")
const calculatedData = document.getElementById("calculatedData")

findpop.addEventListener("click", ()=>{
  const yearofpop = document.getElementById("yearofpop").value
  const pop2001 = document.getElementById("pop2001").innerHTML
  const pop2011 = document.getElementById("pop2011").innerHTML
  const total_population = Math.round(parseInt(pop2011) + ((yearofpop - 2011)/10)*(parseInt(pop2011)-parseInt(pop2001)))
  // alert(total_population)

  let firedemand1 = 3182*Math.sqrt(total_population/1000)*60*24
  let firedemand2 = 1136*(total_population/10000 + 10)*60*24
  let firedemand3 = 5663*Math.sqrt(total_population/1000)*60*24

  let firedemand = Math.max(firedemand1, firedemand2, firedemand3)
  
  console.log(total_population)
  document.getElementById("totalpop").innerHTML = total_population;
  document.getElementById("domdemand").innerHTML = (200*total_population)/1000000 + " MLD";
  document.getElementById("indudemand").innerHTML = ((200*total_population)*20/100)/1000000 + " MLD";
  document.getElementById("insdemand").innerHTML = ((200*total_population)*30/100)/1000000 + " MLD";
  document.getElementById("firedemand").innerHTML = firedemand/1000000 + " MLD";
  document.getElementById("publdemand").innerHTML = ((200*total_population)*10/100)/1000000 + " MLD";
  document.getElementById("loss").innerHTML = ((200*total_population)*30/100)/1000000 + " MLD";
  calculatedData.style.display = "block"
})

