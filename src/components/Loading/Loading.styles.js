import styled from "styled-components";

export const LoadingStyled = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.834);
    z-index: 1;
}

.spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: var(--color-primary) transparent var(--color-primary) transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
}

@keyframes spin-anim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
