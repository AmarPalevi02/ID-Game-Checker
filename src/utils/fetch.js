import axios from "axios"
import { configs } from "../config"

export const getIdMobileLegends = async (id, server) => {
   try {
      const URL = await axios.get(`${configs.base_url}/mobile-legends/${id}/${server}`, {
         headers: {
            'X-RapidAPI-Key': '21cad4bf71msh475c1b32967d6ebp19d0b6jsn32d87c30f531',
            'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
         }
      })

      if (URL.data && URL.data.error) {
         throw Error(URL.data.error)
      }

      return URL.data
   } catch (error) {
      return {
         error: true,
         msg: `Can't find a username for "User ID: ${id}@${server}".`
      }
   }
}

export const getPUBG = async (id) => {
   try {
      const URL = await axios.get(`${configs.base_url}/pubgm-global/${id}`, {
         headers: {
            'X-RapidAPI-Key': '21cad4bf71msh475c1b32967d6ebp19d0b6jsn32d87c30f531',
            'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
         }
      })

      if (URL.data && URL.data.error) {
         throw Error(URL.data.error)
      }

      return URL.data
   } catch (error) {
      return {
         error: true,
         msg: `Can't find a username for "User ID: ${id}".`
      }
   }
}

export const GetFreeFire = async (id) => {
   try {
      const URL = await axios.get(`${configs.base_url}/free-fire/${id}`, {
         headers: {
            'X-RapidAPI-Key': '21cad4bf71msh475c1b32967d6ebp19d0b6jsn32d87c30f531',
            'X-RapidAPI-Host': 'id-game-checker.p.rapidapi.com'
         }
      })

      if (URL.data && URL.data.error) {
         throw new Error(URL.data.error)
      }

      return URL
   } catch (error) {
      return {
         error: true,
         msg: `Can't find a username for "User ID: ${id}".`
      }
   }
}