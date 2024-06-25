import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Sobre from './page/sobre'
import Projetos from './page/Projetos'
import Contatos from './page/Contatos'
import Page404 from './page/page404'
import PageBase from './page/PaginaBase'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes


/* export default AppRoutes
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Page404 from './pages/Page404'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
        </>
    )
} */

/* export default AppRoutes */




{/* <Routes>
<Route path="/" element={<Home />} ></Route>
<Route path="/sobre" element={<Sobre />} ></Route>
</Routes> */}