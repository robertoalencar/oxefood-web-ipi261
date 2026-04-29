import { Route, Routes } from "react-router-dom";

import FormCategoriaProduto from "./views/categoriaproduto/FormCategoriaProduto";
import ListCategoriaProduto from "./views/categoriaproduto/ListCategoriaProduto";
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';
import FormProduto from "./views/produto/FormProduto";
import ListProduto from "./views/produto/ListProduto";
import { ProtectedRoute } from './views/util/ProtectedRoute';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <FormLogin/> } />
                
                <Route path="/home" element={ 
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                } />

                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />

                <Route path="form-categoria" element={ <FormCategoriaProduto/> } />
                <Route path="list-categoria" element={ <ListCategoriaProduto/> } />

                <Route path="form-produto" element={ 
                    <ProtectedRoute>
                        <FormProduto/> 
                    </ProtectedRoute>
                } />

                <Route path="list-produto" element={ 
                    <ProtectedRoute>
                        <ListProduto/>
                    </ProtectedRoute>
                } />
            </Routes>
        </>
    )
}

export default Rotas