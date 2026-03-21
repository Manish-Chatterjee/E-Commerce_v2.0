// import Container from '@mui/material/Container'
import React from 'react'
import styled from 'styled-components'
import ProductImages from '../components/ProductImages'
import ProductInfo from '../components/ProductInfo'

const ProductDetails = () => {
  return (
    <Container>
      <ProductImages/>
      <ProductInfo/>
    </Container>
  )
}

export default ProductDetails

const Container = styled.div`
    display: flex;
`