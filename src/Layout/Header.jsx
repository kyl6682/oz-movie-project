import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const NavStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`

const LogoStyle = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: black;
`

const SearchInput = styled.input`
    border: none;
    background-color: #efefef;
    padding: 0 16px;
    width: 250px;
    height: 30px;
    border-radius: 7px;
`

const AccountDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

function Header () {
    const navigate = useNavigate()

    return (
        <>
            <NavStyle>
                <Link to={'/'}><LogoStyle>OZ 무비</LogoStyle></Link>
                <SearchInput 
                    onChange={(e) => {
                        navigate(`/search?movie=${e.target.value}`)
                    }}
                />
                <AccountDiv>
                    <button>로그인</button>
                    <button>회원가입</button>
                </AccountDiv>
            </NavStyle>
        </>
    )
}

export default Header
