import { v4 as uuidv4 } from "uuid"; 
function chillHop() { 
  return [ 
    { 
      id: uuidv4(), 
      name: "Vande Mataram",
      audio: "https://mp3teluguwap.net/mp3/2024/Operation%20Valentine/Vande%20Mataram.mp3", 
      color: ["#105950", "#3ab3bf"], 
      active: true, 
    }, 
    { 
      id: uuidv4(), 
      name: "Hungry Cheetah",  
      audio: "https://mp3teluguwap.net/mp3/2023/OG/Hungry%20Cheetah.mp3", 
      color: ["#AF8EA9", "#cb417f"], 
      active: false, 
    }, 
    { 
      id: uuidv4(), 
      name: "Nuvvu Navvukuntu",  
      audio: "https://mp3teluguwap.net/mp3/2023/MAD/Nuvvu%20Navvukuntu.mp3", 
      color: ["#RD607D", "#E94043"], 
      active: false, 
    }, 
    { 
      id: uuidv4(), 
      name: "Enno Enno", 
      audio: "https://mp3teluguwap.net/mp3/2023/Hi%20Nanna/Hi%20Nanna/Enno%20Enno.mp3", 
      color: ["#WF8EA9", "#vb417f"], 
      active: false, 
    }, 
    { 
      id: uuidv4(), 
      name: "Adigaa",  
      audio: "https://mp3teluguwap.net/mp3/2023/Hi%20Nanna/Hi%20Nanna/Adigaa.mp3", 
      color: ["#BD607D", "#n94043"], 
      active: false, 
    }, 
    { 
      id: uuidv4(), 
      name: "Needhe Needhe", 
      audio: "https://mp3teluguwap.net/mp3/2023/Hi%20Nanna/Hi%20Nanna/Needhe%20Needhe.mp3", 
      color: ["#205750", "#2an3bf"], 
      active: false, 
    }, 
  ]; 
} 
  
export default chillHop; 