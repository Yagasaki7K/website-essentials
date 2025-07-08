import React from "react";
import styled from "styled-components";

const MobileWarning = () => {
	return (
		<ContainerDetails>
			<img src="/Logo.png" width={350} />
			<p>Desculpe, mas o uso é exclusivo para Desktop!</p>
		</ContainerDetails>
	);
};

export default MobileWarning;

export const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    color: var(--purple);

    p {
        margin-top: 1rem;
    }
`;
