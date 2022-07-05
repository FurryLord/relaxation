import { useNavigate } from 'react-router-dom'




export function Index() {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/meme_page')}>
            Test
        </button>
    )
}
