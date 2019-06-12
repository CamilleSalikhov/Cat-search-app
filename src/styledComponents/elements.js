import styled from 'styled-components';

const AppStyled = styled.div`
text-align: center;
`

const HeaderStyled = styled.div`
background-color: #282c34;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`
const FoundDiv = styled.div`
display:flex;
flex-direction: column;
align-items:center
`

const StyledForm = styled.div`
margin-top:40px;
border-style:solid;
border-color:lightBlue;
background-color:lightcyan;
padding:10px
`

const SelectedCat = styled.div`
display:flex;
flex-direction:column;
align-items:center
`


export {AppStyled};
export {HeaderStyled};
export {FoundDiv};
export {StyledForm};
export {SelectedCat}