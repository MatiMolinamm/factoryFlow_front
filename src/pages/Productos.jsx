import React from 'react';
import { ListAll } from '../components/ListAll';
import { AddButton } from '../components/AddButton';


export const Productos = () => {
  return (
    <>
    <AddButton name={'productos'}/>
    <ListAll name={'Productos'} data={{}}/>
    </>
    
  )
}
