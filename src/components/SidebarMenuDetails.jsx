import styled from 'styled-components'

const SidebarMenuDetails = styled.div`
    padding: 2.5rem 6rem 0rem 3rem;
    border-right: 1px solid var(--gray);

    p {
        font-size: 0.9rem;
        font-style: italic;
        color: var(--gray-alt)
    }

    ul {
        margin: 9rem 0;
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
        color: var(--purple)
    }

    hr {
        width: 5rem;
        margin-bottom: 1rem;
        border: 1px solid var(--gray);
    }

    .page {
        margin: 1rem 0;

        a {
            color: var(--purple);
            text-decoration: none;
        }
    }
`

export default SidebarMenuDetails