import axios from 'axios';








export async function randomAdvice() {
    const response = await axios.get('https://api.adviceslip.com/advice')



    return response
}

