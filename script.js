
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
  
  // console.log(total_population)
  document.getElementById("totalpop").innerHTML = total_population;
  let docmestic_demand1 = (200*total_population)/1000000
  document.getElementById("domdemand").innerHTML =  docmestic_demand1 + " MLD";
  let industrial_demand1 = ((200*total_population)*20/100)/1000000
  document.getElementById("indudemand").innerHTML = industrial_demand1 + " MLD";
  let institurinal_demand1 = ((200*total_population)*30/100)/1000000
  document.getElementById("insdemand").innerHTML = institurinal_demand1 + " MLD";
  let fire_demand1 = firedemand/1000000
  document.getElementById("firedemand").innerHTML = fire_demand1 + " MLD";
  let public_demand1 = ((200*total_population)*10/100)/1000000
  document.getElementById("publdemand").innerHTML = public_demand1 + " MLD";
  let losses1 = ((200*total_population)*30/100)/1000000;
  document.getElementById("loss").innerHTML = losses1 + " MLD" 
  // let max_daily_consume = document.getElementById("maxdailyconsup").innerHTML = ((200*total_population)*30/100)/1000000 + " MLD";
  let totaldemand1 = (parseInt(docmestic_demand1)+parseInt(industrial_demand1)+parseInt(institurinal_demand1)+parseInt(fire_demand1)+parseInt(losses1))
  document.getElementById("totaldemand").innerHTML = totaldemand1 + " MLD";
  console.log(totaldemand1, total_population)
  let max_daily_consume1 = 1.8*(totaldemand1*1000000/total_population)
  console.log(max_daily_consume1)
  document.getElementById("maxdailyconsup").innerHTML = Math.round(max_daily_consume1) + " lpcd"
  calculatedData.style.display = "block"
})

