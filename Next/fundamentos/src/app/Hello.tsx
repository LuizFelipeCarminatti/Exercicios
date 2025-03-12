import Image from 'next/image'

export default function Hello() {

    return (
        <div className="flex justify-center items-center h-[100%] w-[100%]">
            <div className="flex flex-col items-center">
                <Image src='/olamundo.jpg' alt="Olá, Mundo!" width='300' height='300' className='rounded-full'/>
                <h1 className="text-gray-600 text-3xl">Aproveite nosso site</h1>
            </div>
        </div>
    )
}