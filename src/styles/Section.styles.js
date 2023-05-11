import styled from "styled-components";

// Section Component
export const StSectionContainer = styled.div`
  background-color: ${(props) => props.backgroundColor || "#cad5e3"};
`;

export const StSection = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  align-items: center;
`;

// ======================== //

// Main Section

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const StContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 500px;
  width: 50%;
`;

export const StContentTitle = styled.h1`
  color: var(--color-black);
  font-size: var(--font-extra-large);
`;

export const StContentSubtitle = styled.h2`
  font-size: var(--font-large);
  margin-bottom: 20px;
`;

export const StDescription = styled.p`
  margin-bottom: ${(props) => props.marginBottom};
  font-size: 20px;
`;

export const StContentDescription = styled.div``;

export const ContentImagebox = styled.div`
  width: 50%;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    &:hover{
      transform: translateX(3px)
    }
  }
`;

// ======================== //

// Section About

export const SectionAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const StAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 350px;
  width: 40%;
  padding: 20px;
`;

export const StAboutTitle = styled.h1`
  font-size: 40px;
`;

export const AboutImageBox = styled.div`
  width: 30%;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
// ======================== //

// Section Hot List

export const SectionHotList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
`;

export const StHotListDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 150px;
`;

export const StHotListTitle = styled.h1`
  font-size: var(--font-extra-large);
`;

export const StHotListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`;

export const StHotListImg = styled.img`
  border-radius: 8px;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const Deadline = styled.p`
  position: relative;
  color: var(--color-light-white);
  border-radius: 4px;
  text-align: center;
  padding: 8px;
  width: 90px;
  background-color: var(--color-red);
  top: 5%;
  left: 75%;
`;

export const ProductsBox = styled.div`
  cursor: pointer;
  &:hover {
    transform: translateY(3px);
    transition: 0.5s;
  }
`;

// ======================== //
