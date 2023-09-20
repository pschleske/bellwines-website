import { useEffect, useState } from 'react';
import axios from 'axios';

export const Footer = () => {
    const [data, setData] = useState([]);
    const [quotes, setQuotes] = useState(0);

    async function getApi() {
        const res = await axios.get('/api/quotes')
            .catch((err) => console.log(err))
        // console.log(res.data)
        setData(res.data)
    }

    async function changeQuotes() {
        setQuotes(quotes + 1)
    }

    // const api_url = "https://zenquotes.io/api/quotes";

    const quote = data.map((el) => `${el.q}  -- ${el.a}`)

    // async function getApi(url) {
    //     const response = await axios.get(url).catch((err) => console.log(err))
    //     console.log(response)
    // }
    useEffect(() => {
        getApi()
    }, [])


    return (
        <footer>
            <h4>Quote of the day:</h4>

            {quote[quotes]}
            <button onClick={changeQuotes}>New Quote</button>

            <div>
                <h4>Contact Us</h4>
                <ul>
                    <li>
                        <a href="mailto:bellwines@email.com">Email Bellwines</a>
                    </li>
                </ul>
            </div>
        </footer >
    )
}
