import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
    @media only screen and (max-width: 400px) {
    /* For mobile: */
    margin-top: 4rem;
    }
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;

    h3{
        margin-top: 1rem;
        font-weight: 600;
    }

    img{
        width: 6rem;
        height: 6rem;
        border-radius: 30px;
        object-fit: cover;
        border: 0.5px solid var(--grey);
    }
`

export const BtnContainer = styled.div`
    width: 100%;
    max-width: 80vw;
    margin-bottom: 3rem;
    @media only screen and (min-width: 300px) {
    /* For mobile: */
    max-width: 90vw;
    }
`

export const IconContainer  = styled.div`
    display: flex;
    flex-direction: row;
`

export const Icon = styled.div`
    margin: 0 1rem;
    cursor: pointer;
`