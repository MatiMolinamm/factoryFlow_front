import { Navigate, Route, Routes } from 'react-router-dom';
import { Add,Insumos,MateriaPrima,Packaging,Productos,Producciones } from '../index';




export const InternalRoutes = () => {
  return (
    <>
        <div className="container">
            <Routes>
                
                <Route path="/insumos" element={<Insumos />} />
                <Route path="/materiasprimas" element={<MateriaPrima />} />
                <Route path="/packaging" element={<Packaging />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/producciones" element={<Producciones />} />
                <Route path="/addinsumo" element={<Add name={'insumo'}/>} />
                <Route path="/addmp" element={<Add name={'materia prima'}/>} />
                <Route path="/addpackaging" element={<Add name={'packaging'}/>} />
                <Route path="/addproduccion" element={<Add name={'produccion'}/>} />
                <Route path="/addproducto" element={<Add name={'producto'}/>} />
                
            </Routes>
        </div>
    </>
  )
}

