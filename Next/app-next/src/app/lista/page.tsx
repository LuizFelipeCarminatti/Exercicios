'use client'
import { IconBallFootball } from "@tabler/icons-react"
import { useState } from "react"

export default function Lista() {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [times, setTimes] = useState([
        '1. Atlético-MG',
        '2. Bahia',
        '3. Botafogo',
        '4. Ceará',
        '5. Corinthians',
        '6. Cruzeiro',
        '7.Flamengo',
        '8. Fluminense',
        '9. Fortaleza',
        '10. Grêmio',
        '11. Internacional',
        '12. Juventude',
        '13. Mirassol',
        '14. Palmeiras',
        '15. Red Bull Bragantino',
        '16. Santos',
        '17. Sport',
        '18. São Paulo',
        '19. Vasco',
        '20. Vitória',
    ])


    return (
        <div className={`flex flex-col justify-center items-center h-screen bg-black`}>
            <h1 className={`flex items-center gap-2 text-5xl text-white`}>
                <IconBallFootball size={50} stroke={1} className={`text-green-600`} />
                Tabela Série A
            </h1>
            <ul>
                {times.map((time, index) => (
                    <li key={index} className={`text-white ${index % 2 === 0 ? 'text-gray-200' : 'text-gray-500'}`}>{time}</li>
                ))}
            </ul>
        </div>
    )
}