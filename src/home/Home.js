import React from 'react'
import './home.css'
import Header from '../comon/header/Header'
import List from '../home/list/List'
import Search from '../home/search/Search'
import Footer from '../comon/footer/Footer'

export default function Home({ lang, setLang, data, dataType, t }) {
  const [query, setQuery] = React.useState('')
  const dataFilter = data.filter((pokemon) => {
    if (pokemon.names[t].toLowerCase().includes(query.toLowerCase())) {
      return true
    } else {
      return false
    }
  })

  return (
    <>
      <Header lang={lang} setLang={setLang}></Header>
      <Search query={query} setQuery={setQuery}></Search>
      <List pokemons={dataFilter} types={dataType} t={t}></List>
      <Footer />
    </>
  )
}
