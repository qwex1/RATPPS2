import axios from 'axios'
import { output } from '../output/index.js'

const apiUrl = 'https://tolltech.ru/study'

async function ping() {
    while (true) {
        try {
            const result = await axios.get(`${apiUrl}/ping`)
            return true
        } catch(e) {
            continue
        }
    }
}

async function getInputData() {
    try {
        let isReady = await ping()
        if (!isReady) {
            throw new Error('HTTP request exception')
        }

        const { data } = await axios.get(`${apiUrl}/GetInputData`)
        return data
    } catch(e) {
        console.log(e)
        return null
    }
}

async function writeAnswer(answer) {
    try {
        let isReady = await ping()
        if (!isReady) {
            throw new Error('HTTP request exception')
        }
        
        const result = await axios.post(`${apiUrl}/WriteAnswer`, JSON.stringify(answer))
        return true
    } catch(e) {
        console.log(e)
        return false
    }
}

export { ping, getInputData, writeAnswer }