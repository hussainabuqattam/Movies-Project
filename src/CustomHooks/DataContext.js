// import React, {createContext, useState } from 'react'
// const MovieData = createContext()

// const DataContext = ({children}) => {
//  const [data,setMovies] = useState(); // save movies data
//  const [page,setpage] = useState(); // save movies page 

//  const ChangeData = (data) => {
//     setMovies(data)
//  }
//  const ChangePage = (data) => {
//     setpage(data)
//  }
//   return (
//     <MovieData.Provider value={{data, ChangeData, page, ChangePage}}>
//         {children}
//     </MovieData.Provider>
//   )
// }

// export { DataContext, MovieData }