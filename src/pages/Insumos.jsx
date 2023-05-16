import React from 'react';
import { ListAll } from '../components/ListAll';
import { AddButton } from '../components/AddButton';


export const Insumos = () => {
  return (
   <>
   <AddButton name={'insumos'}/>
   <ListAll name={'Insumos'} data={{}}/>
   </>
  )
}
