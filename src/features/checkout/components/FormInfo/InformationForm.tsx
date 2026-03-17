import { Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InformationForm = () => {
  // const { values } = useFormikContext<any>();
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
        <p style={{ fontSize: "12px", color:"gray" }}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
      <h4>Personal Information</h4>
      <InputContainer>
        <FieldStyled type="email" name="email" placeholder="Email" />
        <FieldStyled type="email" name="email" placeholder="Email" />
        <FieldStyled type="email" name="email" placeholder="Email" />
        <FieldStyled type="email" name="email" placeholder="Email" />
      </InputContainer>

      {/* <h4>Personal Information</h4>
      <FieldStyled type="email" name="email" placeholder="Email" />
      <FieldStyled type="email" name="email" placeholder="Email" />
      <FieldStyled type="email" name="email" placeholder="Email" />
      <FieldStyled type="email" name="email" placeholder="Email" /> */}

      <div>
        <h2>Information</h2>
      </div>
      <h4>Personal Information</h4>
      <InputContainer>
        <FieldStyled type="email" name="email" placeholder="Email" />
        <FieldStyled type="email" name="email" placeholder="Email" />
        <FieldStyled type="email" name="email" placeholder="Email" />
        <FieldStyled type="email" name="email" placeholder="Email" />
      </InputContainer>

      {/* <h4>Personal Information</h4>
      <FieldStyled type="email" name="email" placeholder="Email" />
      <FieldStyled type="email" name="email" placeholder="Email" />
      <FieldStyled type="email" name="email" placeholder="Email" />
      <FieldStyled type="email" name="email" placeholder="Email" /> */}

      <label>
        <Field type="checkbox" name="agree" />I agree to data processing
      </label>
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
