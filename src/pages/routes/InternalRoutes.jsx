import { Navigate, Route, Routes } from 'react-router-dom';
import { Insumos,MateriaPrima,Packaging,Productos,Producciones } from '../index';



export const InternalRoutes = () => {
  return (
    <>
        <div className="container">
            <Routes>
                <Route path="/" element={<> </>} />
                <Route path="insumos" element={<Insumos />} />
                <Route path="materiasprimas" element={<MateriaPrima />} />
                <Route path="packaging" element={<Packaging />} />
                <Route path="productos" element={<Productos />} />
                <Route path="producciones" element={<Producciones />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    </>
  )
}

