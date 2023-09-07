import * as S from './detailNav.styles'

export default function DetailNavPageUI(props) {
    return(
        <S.Container  key={props.title}>
            <S.NavIconContainer>
                <S.NavIcon src={props.image}/>
            </S.NavIconContainer>
            <S.NavInfoContainer  onClick = {props.onClickNavigation} id = {props.title}  >
                {props.title}
            </S.NavInfoContainer>
        </S.Container>
    )
}