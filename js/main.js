//fish, name, photo, where and when to find
//villager name photo birthday


const url = 'https://acnhapi.com/v1/fish/'

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      let thing = Object.keys(data)
      let fishies = thing.sort()
      for(i=0;i<fishies.length;i++){
        const name = document.createElement("h2");
        const photo = document.createElement("img");
        
        const where = document.createElement("p");
        const when = document.createElement("p");
        const time=document.createElement("p")

      name.innerText = fishies[i]
      let fish=fishies[i]
       photo.src = data[fish].image_uri
       where.innerText = data[fish].availability.location
      //  when.innerText = data[fish].availability.time
      time.innerText=data[fish].availability.time
      let arr = data[fish].availability["month-array-northern"]
      let beg = data[fish].availability["month-array-northern"][0]
      let end = data[fish].availability["month-array-northern"][arr.length-1]
      //turn beg and end into month switch statement
      switch (beg){
        case 1:
          beg="Jan"
          break;
        case 12:
          beg="Dec"
          break;
        case 2:
          beg="Feb"
          break;
        case 3:
          beg="Mar"
          break;
        case 4:
          beg="April"
          break;
        case 5:
          beg="May"
          break;
        case 6:
          beg="June"
          break;
        case 7:
          beg="July"
          break;
        case 8:
          beg="Aug"
          break;
        case 9:
          beg="Sept"
          break;
        case 10:
          beg="Oct"
          break;
        case 11:
          beg="Nov"
          break;
      }
      switch (end){
        case 1:
          end="Jan"
          break;
        case 12:
          end="Dec"
          break;
        case 2:
          end="Feb"
          break;
        case 3:
          end="Mar"
          break;
        case 4:
          end="April"
          break;
        case 5:
          end="May"
          break;
        case 6:
          end="June"
          break;
        case 7:
          end="July"
          break;
        case 8:
          end="Aug"
          break;
        case 9:
          end="Sept"
          break;
        case 10:
          end="Oct"
          break;
        case 11:
          end="Nov"
          break;
      }
      when.innerText = beg+"-"+end
      const currentDiv = document.getElementById("main");
document.body.insertBefore(name, currentDiv)
  document.body.insertBefore(photo, currentDiv)

 document.body.insertBefore(where, currentDiv)
 document.body.insertBefore(when, currentDiv)
 document.body.insertBefore(time, currentDiv)
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });