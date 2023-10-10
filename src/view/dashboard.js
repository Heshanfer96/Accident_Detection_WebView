import React from 'react'
import DisplayTable from './table/table'
import { Container } from '@mui/material'
import Header from "./header/Header"

function Dashboard() {
  return (
    <Container>
        <Header/>
        <DisplayTable/>
    </Container>
  )
}

export default Dashboard