// import { useState } from "react";
// import {getIdMobileLegends} from './utils/fetch'

import { BrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import AppRoute from "./routes";

// const App = () => {
//   const [getUser, setGetUser] = useState([])
//   const [selctGame, setSelectGame] = useState('')
//   const [form, setForm] = useState({
//     id: '',
//     server: ''
//   })

//   const handleID = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSelectGame = (e) => {
//     setSelectGame(e.target.value)
//   }

//   const gameOptions = [
//     { label: 'Mobile Legends', value: 'mobile-legends' },
//     { label: 'Free Fire', value: 'free-fire' },
//     { label: 'PUBG Mobile', value: 'pubg-mobile' },
//     { label: 'Call of Duty: Mobile', value: 'call-of-duty-mobile' },
//     { label: 'Arena of Valor', value: 'arena-of-valor' }
//   ]

//   const getIdUser = async () => {
//     const URL = await getIdMobileLegends(selctGame, form.id, form.server)

//     setGetUser(URL.data.data)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await getIdUser()
//   }
//   console.log(getUser)

//   return (
//     <div className="App">
//       <h2>Pilih Game</h2>
//       <form action="">
//         <label htmlFor="game">coose game</label>
//         <select name="game" id="game" value={selctGame} onChange={handleSelectGame}>
//           <option value="">Select a game...</option>
//           {gameOptions.map((option) => (
//             <option key={option.value} value={option.value}>{option.label}</option>
//           ))}
//         </select>
//       </form>

//       <form action="">
//         <label>Id</label>
//         <input type="text" name="id" value={form.id} onChange={handleID} required={true} />
//         <label >Server</label>
//         <input type="text" name="server" value={form.server} onChange={handleID} required={true} />
//         <button onClick={handleSubmit}>Check</button>
//       </form>
//     </div>
//   );
// }

const App = () => {
  return(
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  )
}

export default App;
