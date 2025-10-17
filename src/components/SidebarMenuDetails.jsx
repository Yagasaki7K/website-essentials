import styled from "styled-components";

const SidebarMenuDetails = styled.div`
    min-width: 280px;
    max-width: 280px;
    
    padding: 3.5rem 2rem 2rem 2.5rem;
    background: transparent;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.25);

    p {
        font-size: 0.9rem;
        font-style: italic;
        color: var(--gray-alt)
    }

    ul {
        margin: 2rem 0;

        p {
            color: var(--font);
        }
    }
    
    li {
        list-style: none;
        margin-bottom: 1.2rem;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: 0.3s;
    }

    li:hover {
        background: -webkit-linear-gradient(90deg, var(--purple), var(--blue));
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    li.active {
        background: -webkit-linear-gradient(90deg, var(--purple), var(--blue));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
    }

    hr {
        width: 5rem;
        margin-bottom: 1rem;
        border: 1px solid var(--border);
    }

    .page {
        margin: 1rem 0;

        a {
            background: -webkit-linear-gradient(90deg, var(--purple), var(--blue));
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
        }
    }
`;

export default SidebarMenuDetails;
