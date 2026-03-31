import styled from "styled-components";

type Props = {
  brand: {
    name: string;
    description: string;
    image: string;
  };
  index: number;
};

const BrandCard = ({ brand, index }: Props) => {
  return (
    <Card $reverse={index % 2 !== 0}>
      <Image src={brand.image} alt="image" width={100} height={100} />
      <Content>
        <h2>{brand.name}</h2>
        <p>{brand.description}</p>
      </Content>
    </Card>
  );
};

export default BrandCard;

const Card = styled.div<{ $reverse: boolean }>`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 60px 40px;

  height: 250px;

  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: fit-content;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

const Content = styled.div`
  width: 50%;
  background-color: #fef0d1;
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;

  h2 {
    font-size: 28px;
    margin-bottom: 12px;
    width: 100%;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;
