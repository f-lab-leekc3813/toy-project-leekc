import * as S from './categories.styles';

import React from 'react';
import {Image} from 'antd';

export default function CategoriesPageUI() {
    return(
        <S.Wrapper>
            <S.Container>
                <Image
                  width={270}
                  height={256}
                  style={{borderRadius: '8px'}}
                  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-932252447351230677/original/a7666a01-381d-498c-b53b-8f80512ac0c6.jpeg?im_w=720"
                />
                <S.InfoContainer>
                    <S.Region>중구, 한국</S.Region>
                    <S.Categories>해변 근처</S.Categories>
                    <S.Date>10월9일 ~ 14일</S.Date>
                    <S.Price>79.887 /박</S.Price>
                </S.InfoContainer>
            </S.Container> 
        </S.Wrapper>
    )
}