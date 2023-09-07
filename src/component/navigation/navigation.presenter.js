import DetailNavPage from './detail/detailNav.container';
import * as S from './navigation.styles';

export default function NavigationPageUI(props) {
    return (
        <S.Wrapper>
            {
                props.navigationInfo.map((data) =>{
                    return(
                        <DetailNavPage
                            title = {data.title}
                            image = {data.image}
                         />
                    )
                }
                )
            }
        </S.Wrapper>
    )
}