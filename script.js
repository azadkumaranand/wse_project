
const findpop = document.getElementById("findpop")
const calculatedData = document.getElementById("calculatedData")

findpop.addEventListener("click", ()=>{
  const yearofpop = document.getElementById("yearofpop").value
  const pop2001 = document.getElementById("pop2001").innerText
  const pop2011 = document.getElementById("pop2011").innerText
  const total_population = Math.round(pop2011 + ((yearofpop - 2011)/10)*(pop2011-pop2001))
  // alert(total_population)
  
  console.log(total_population)
  document.getElementById("totalpop").innerHTML = total_population;
  document.getElementById("domdemand").innerHTML = (total_population*25)/100;
  document.getElementById("indudemand").innerHTML = total_population;
  document.getElementById("insdemand").innerHTML = total_population;
  document.getElementById("firedemand").innerHTML = total_population;
  document.getElementById("loss").innerHTML = total_population;
  calculatedData.style.display = "block"
})

