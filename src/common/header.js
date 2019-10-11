import styled from "styled-components"
export const HeaderWrap=styled.div`
    width:100%;
    height:58px;
`
export const HeaderTitle=styled.img.attrs({src:"https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"})`
    width:100px;
    height:56px;
    float:left
`
export const HeaderMenu=styled.div`
    float:left;
    display:flex;
    margin:0 0 0 150px;
    height:56px;
    line-height:56px;
    position:relative
`
export const HeaderPerson=styled.div`
    float:right;
    background:blue;
    display:flex;
    height:56px;
    position:relative;
    line-height:56px
`