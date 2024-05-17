import axios from "axios"

export const getIdMobileLegends = async (id, server) => {
   const URL = await axios.get(`https://id-game-checker.p.rapidapi.com/mobile-legends/${id}/${server}`, {
      headers: {
         'X-RapidAPI-Key': '21cad4bf71msh475c1b32967d6ebp19d0b6jsn32d87c30f531',
         'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
       }
   })

   return URL.data
}

export const getPUBG = async () => {
   
}