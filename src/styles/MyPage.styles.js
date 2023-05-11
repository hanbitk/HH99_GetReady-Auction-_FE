import styled from "styled-components";

// ============= Profile =============//

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 135px;
`

export const StProfile = styled.div``;

export const StProfileIcon = {
  fontSize: "30px",
  color: "var(--color-primary)",
  borderRadius: "50%",
  border: "2px solid var(--color-primary)",
  cursor: "pointer",
};

// ==================================//

export const SectionMyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const StMyPageButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-inline: 30px;
  width: 300px;

  ul {
    display: flex;
    flex-direction: row;
  }
`;

export const StMyPageArticle = styled.article`
  display: flex;
  justify-content: start;
  gap: 45px;
  padding: 30px;
  flex-wrap: wrap;
  height: 100vh;
`;

export const StMyProductImg = styled.img`
  border-radius: 8px;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const ProductsBox = styled.div`
  cursor: pointer;
  &:hover {
    transform: translateY(3px);
    transition: 0.5s;
  }
`;

// ==================================//

export const StLayout = styled.div`
  max-width: 1200px;
  gap: 50px;
  /* margin:40px; */
  margin: 10px auto 20px auto;
  border: 1px solid pink;
  height: 800px;
  justify-content: center;
`;
export const StFlex = styled.div`
  display: flex;
  gap: 70px;
`;
export const StMyPage2 = styled.div`
  border: 1px solid var(--color-green);
  height: 800px;
  min-width: 130px;
`;
export const StDropdownList = styled.div`
  display: block;
`;
export const StItems = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
`;
export const StItem = styled.div`
  border: 1px solid var(--color-green);
  width: 250px;
  height: 300px;
  margin-top: 10px;
  border-radius: 12px;
  flex-wrap: nowrap;
`;
export const StPicture = styled.div`
  border: 1px solid pink;
  margin-top: 10px;
  margin-left: 9px;
  border-radius: 12px;
  width: 230px;
  height: 200px;
  /* justify-content: center; */
`;
export const StBackgroundImage = styled.div`
  background-image: url(/img/plus.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  /* background-attachment: fixed; */
  width: 50px;
  height: 50px;
`;
export const StSearchBar = styled.div`
  border: 1px solid pink;
  border-radius: 4px;
  width: 350px;
  padding: 10px;

`