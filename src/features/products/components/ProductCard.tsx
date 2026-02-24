// import React from 'react'

import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import { LuDot, LuTruck } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import ProductItem from "./ProductItem";
import Button from "../commonUI/Button";

const ProductCard = () => {
  return (
    <>
      <Container>
        <p>Order ID</p>
        <IDandStatus>
          <IDContainer>
            <IoBagHandleOutline />
            <span>CTH-89765</span>
          </IDContainer>
          <StatusContainer>
            <span>Estimated arrival: 28 May 2054</span>
            <Status>
              <GoDotFill /> On Deliver
            </Status>
          </StatusContainer>
        </IDandStatus>

        <LocationInfo>
          <Location>
            <LuTruck />
            Bangalore, India
          </Location>
          <MidLine>
            <LuDot />
            <LocationLine></LocationLine>
            <IoMdArrowDropright />
          </MidLine>
          <Location>
            <CiLocationOn />
            Bangalore, India
          </Location>
        </LocationInfo>
      

      <ProductItem />
      <ProductItem />

      <PricingDetails>
        <span>
          <span>Total: Rp 849.000</span>
          <span>(2 items)</span>
        </span>
        <Button>Details</Button>
      </PricingDetails>
      </Container>
    </>
  );
};

export default ProductCard;

const Container = styled.div`
  border: 5px solid green;
  border-radius: 5px;
  flex: 4;
`;

const Status = styled.span`
  background-color: #ff00002c;
  color: #ca0000;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 3px;
  width: fit-content;
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid gray;
  border-radius: 100px;
  width: fit-content;
  padding: 5px;
`;

const LocationLine = styled.div`
  border: 1px dashed black;
  height: 0px;
  width: 100px;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const MidLine = styled.span`
  display: flex;
  align-items: center;
`;

const LocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IDandStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IDContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StatusContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PricingDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
