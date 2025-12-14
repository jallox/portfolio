import React from 'react'
import TextArrow from '../TextArrow'
import AnimatedRandomText from '../AnimatedRandomText'

function Technologies() {
    return (
        <section className='relative max-w-3/4 md:max-w-2/4 mx-auto mb-6'>
            {/* Fondo de luz púrpura */}
            <div className="absolute top-105 right-190 w-3xl h-192 bg-orange-500 opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-55 -right-5 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            <p className='text-orange-500'>
                <TextArrow pixels={6} color={'orange'}>
                    <p className='text-gray-300 text-sm uppercase'>
                        <AnimatedRandomText messages={"Known technologies"} />
                    </p>
                </TextArrow>
            </p>

            <div className='bg-gray-500/20 border-gray-700 border-2 rounded-2xl px-6 pb-6 pt-2 mt-4 transition-colors duration-300 hover:shadow-[0_0_15px_2px_rgba(250,180,100,0.2)] hover:border-orange-500'>
                <h1 className='text-orange-500 font-pixel text-5xl'>Frontend</h1>
                <div className='flex flex-row flex-wrap gap-12 mt-6 justify-center md:justify-center'>

                    <div className='text-center'>
                        <img src="/technologies/react.svg" alt="React" className='w-16 h-16 mx-auto mb-2' />
                        <p className='text-gray-300'>React</p>
                    </div>
                    <div className='text-center'>
                        <img src="/technologies/html.svg" alt="HTML" className='w-16 h-16 mx-auto mb-2' />
                        <p className='text-gray-300'>HTML</p>
                    </div>
                    <div className='text-center'>
                        <img src="/technologies/next.svg" alt="Next.js" className='w-16 h-16 mx-auto mb-2' />
                        <p className='text-gray-300'>Next.js</p>
                    </div>
                    <div className='text-center'>
                        <img src="/technologies/css.svg" alt="CSS" className='w-16 h-16 mx-auto mb-2' />
                        <p className='text-gray-300'>CSS</p>
                    </div>
                    <div className='text-center'>
                        <img src="/technologies/tailwind.svg" alt="Tailwind" className='w-16 h-16 mx-auto mb-2' />
                        <p className='text-gray-300'>Tailwind</p>
                    </div>
                    <div className='text-center'>
                        <img src="/technologies/javascript.svg" alt="JavaScript" className='w-16 h-16 mx-auto mb-2' />
                        <p className='text-gray-300'>JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-4">
                <div className="col-start-1 row-start-1 row-span-3 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2 bg-gray-500/20 border-gray-700 border-2 rounded-2xl px-6 pb-6 pt-2 mt-4 transition-colors duration-300 hover:shadow-[0_0_15px_2px_rgba(250,180,100,0.2)] hover:border-orange-500">
                    <h1 className='text-orange-500 font-pixel text-5xl'>Backend</h1>
                    <div className='flex flex-row flex-wrap gap-12 mt-6 justify-center md:justify-center'>

                        <div className='text-center'>
                            <img src="/technologies/nodejs.svg" alt="Node.js" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Node.js</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/typescript.svg" alt="TypeScript" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>TypeScript</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/express.svg" alt="Express.js" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Express.js</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/java.svg" alt="Java" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Java</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/docker.svg" alt="Docker" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Docker</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/mysql.svg" alt="MySQL" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>MySQL</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/redis.svg" alt="Redis" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Redis</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/mongodb.svg" alt="MongoDB" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>MongoDB</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/cloudflare.svg" alt="Cloudflare" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Cloudflare KV/R2</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/workers.svg" alt="Workers" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Workers</p>
                        </div>
                    </div>
                </div>

                <div className="col-start-1 row-start-4 md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-1 bg-gray-500/20 border-gray-700 border-2 rounded-2xl px-6 pb-6 pt-2 mt-4 transition-colors duration-300 hover:shadow-[0_0_15px_2px_rgba(250,180,100,0.2)] hover:border-orange-500">
                    <h1 className='text-orange-500 font-pixel text-5xl'>Mobile & desktop apps</h1>
                    <div className='flex flex-row flex-wrap gap-12 mt-6 justify-center md:justify-center'>

                        <div className='text-center'>
                            <img src="/technologies/electron.svg" alt="Electron" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Electron</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/react.svg" alt="React Native" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>React Native</p>
                        </div>
                    </div>
                </div>

                <div className="col-start-1 row-start-5 md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1 bg-gray-500/20 border-gray-700 border-2 rounded-2xl px-6 pb-6 pt-2 transition-colors duration-300 hover:shadow-[0_0_15px_2px_rgba(250,180,100,0.2)] hover:border-orange-500">
                    <h1 className='text-orange-500 font-pixel text-5xl'>Others</h1>
                    <div className='flex flex-row flex-wrap gap-12 mt-6 justify-center md:justify-center'>

                        <div className='text-center'>
                            <img src="/technologies/linux.svg" alt="Linux" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Linux</p>
                        </div>
                        <div className='text-center'>
                            <img src="/technologies/arduino.png" alt="Arduino" className='w-16 h-16 mx-auto mb-2' />
                            <p className='text-gray-300'>Arduino</p>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Technologies