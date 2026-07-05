import { Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InformationForm = () => {
  // const { values } = useFormikContext<any>();
  // console.log(values);
  return (
    <>
      {/* INFORMATION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Information</h2>
        <p style={{ fontSize: "12px", color: "gray" }}>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
      <h4>Personal Information</h4>
      <InputContainer>
        <FieldStyled type="text" name="First name" placeholder="First name" />
        <FieldStyled type="text" name="Last name" placeholder="Last name" />
        <FieldStyled
          type="tel"
          name="Phone number"
          placeholder="Phone number"
        />
        <FieldStyled type="email" name="Email" placeholder="Email" />
      </InputContainer>

      {/* <div>
        <h2>Shipping Information</h2>
      </div> */}
      <h4>Personal Information</h4>
      <InputContainer>
        <FieldStyled
          type="text"
          name="Country/Region"
          placeholder="Country / Region"
        />
        <FieldStyled type="text" name="City" placeholder="City" />
        <FieldStyled type="text" name="Address" placeholder="Address" />
        <FieldStyled
          type="number"
          name="Zip/Postal code"
          placeholder="Zip / Postal code"
        />
      </InputContainer>

      {/* <CheckBtn> */}
      {/* {values.agree ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>} */}
      {/* <HiddenCheckbox type="checkbox" name="agree" />I agree to data processing */}
      {/* <Field type="chec" /> */}
      {/* </CheckBtn> */}
    </>
  );
};

export default InformationForm;

const FieldStyled = styled(Field)`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

const InputContainer = styled.div`
  /* margin: 0; */
  /* padding: 0; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

// const Checkbox = styled.div<{ checked: boolean }>`
//   width: 18px;
//   height: 18px;
//   border: 2px solid black;
//   border-radius: 4px;
//   position: relative;
//   background: ${({ checked }) => (checked ? "black" : "white")};
//   transition: 0.2s;

//   /* display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center; */

//   &::after {
//     content: "";
//     position: absolute;
//     /* left: 4px;
//     top: 0px; */
//     left: 50%;
//     top: 50%;
//     /* transform: translate(-50%, -50%); */
//     width: 5px;
//     height: 10px;
//     border: solid white;
//     border-width: 0 2px 2px 0;
//     transform: ${({ checked }) =>
//       checked
//         ? "translate(-50%, -50%) rotate(45deg) scale(1)"
//         : "translate(-50%, -50%) rotate(45deg) scale(0)"};
//     transition: 0.2s;
//   }
// `;
