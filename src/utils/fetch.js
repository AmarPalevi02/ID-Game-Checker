import axios from "axios"

export const getIdMobileLegends = async (resorch, id, server) => {
   const URL = await axios.get(`https://id-game-checker.p.rapidapi.com/${resorch}/${id}/${server}`, {
      headers: {
         'X-RapidAPI-Key': '06a3224c79mshc7c7e1cfe50ba14p13ae49jsnebfe9d98fe9f',
         'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
      }
   })

   return URL
}