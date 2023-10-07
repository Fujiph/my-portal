import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
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