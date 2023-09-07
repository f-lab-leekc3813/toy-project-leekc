import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    height: 100px;
    padding: 5px 220px;
    border-bottom: 1px solid lightgray;
`

export const Container = styled.div`
    margin-right: 15px;
    width : 100px;
    display: flex;
    flex-direction:column;
    cursor: pointer; 
`
export const NavIconContainer = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
      
`
export const NavIcon = styled.img`
    width: 40px;
    height: 40px;
`

export const NavInfoContainer = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: 12px;
`