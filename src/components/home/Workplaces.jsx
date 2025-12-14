import React from 'react'
import TextArrow from '../TextArrow'
import AnimatedRandomText from '../AnimatedRandomText'
import { SquareArrowOutUpRight } from 'lucide-react'

function Workplaces() {
    return (
        <section className='relative max-w-3/4 md:max-w-2/4 mx-auto mb-6'>
            {/* Fondo de luz púrpura */}
            <div className="absolute top-85 left-90 w-lg h-128 bg-purple-500 opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-55 -right-5 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            <p className='text-purple-500'>
                <TextArrow pixels={6} color={'purple'}>
                    <p className='text-gray-300 text-sm uppercase'>
                        <AnimatedRandomText messages={"Previous workplaces"} />
                    </p>
                </TextArrow>
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 relative z-10 mt-4'>

                <div className="border-2 border-gray-600 bg-gray-500/10 rounded-2xl px-6 mr-2 transition-colors duration-300 hover:shadow-[0_0_15px_2px_rgba(167,139,250,0.2)] hover:border-purple-500">
                    <p className="text-sm text-gray-500 mt-5">NOV 2024 - TODAY</p>
                    <h1 className="text-2xl">Smarts Hub</h1>

                    <div className="flex flex-wrap gap-2 mt-2 mb-2">
                        <span className="bg-emerald-900 rounded-full py-1 px-4 border border-emerald-500 text-sm">Frontend</span>
                        <span className="bg-red-900 rounded-full py-1 px-4 border border-red-500 text-sm">Backend</span>
                        <span className="bg-orange-900 rounded-full py-1 px-4 border border-orange-500 text-sm">Java Dev</span>
                    </div>

                    <p className="text-gray-300 mb-3">
                        Smarts Hub is a small development team which aims to create powerful and reliable Minecraft plugins, discord bots.
                    </p>
                    <a href="https://www.smartshub.dev/" className="flex items-center mb-6 gap-4 hover:text-purple-500 transition-colors">
                        Visit website <SquareArrowOutUpRight size={16} />
                    </a>
                </div>

                <div className="border-2 border-gray-600 bg-gray-500/10 rounded-2xl px-6 ml-2 transition-colors duration-300 hover:shadow-[0_0_15px_2px_rgba(167,139,250,0.2)] hover:border-purple-500">
                    <p className='text-sm text-gray-500 mt-5'>JUL 2025 - OCT 2025</p>
                    <h1 className='text-2xl'>Dynamic Nodes</h1>
                    <div className='flex flex-wrap gap-2 mt-2 mb-2'>
                        <span className='bg-emerald-900 rounded-full py-1 px-4 border border-emerald-500 text-sm'>Frontend</span>
                    </div>
                    <p className='text-gray-300 mb-4'>Dynamic nodes was a Minecraft, VPS, and Web hosting in Dallas, Texas. My role there was to develop responsive and awesome-looking webpages and UIs</p>
                </div>
            </div>
            <div className="mt-4 border-2 border-gray-600 bg-gray-500/10 rounded-2xl px-6 transition-colors duration-300 hover:shadow-[0_0_15px_2px_rgba(167,139,250,0.2)] hover:border-purple-500">
                <p className='text-sm text-gray-500 mt-5'>JAN 2023 - TODAY</p>
                <h1 className='text-2xl'>Supracraft Studios</h1>
                <div className='flex flex-wrap gap-2 mt-2 mb-2'>
                    <span className='bg-emerald-900 rounded-full py-1 px-4 border border-emerald-500 text-sm'>Frontend</span>
                    <span className='bg-red-900 rounded-full py-1 px-4 border border-red-500 text-sm'>Backend</span>
                    <span className='bg-blue-900 rounded-full py-1 px-4 border border-blue-500 text-sm'>Administration</span>
                    <span className='bg-orange-900 rounded-full py-1 px-4 border border-orange-500 text-sm'>Java Dev</span>
                </div>
                <p className='text-gray-300 mb-4'>Supracraft Studios is a cinematographic studio, based in Minecraft animations and events. The main goal behind SCS is to create events that community will never forget. Our biggest event, Showland SMP, has created a unique experience by innovating new ways of playing Minecraft.</p>
                <p className='text-gray-300 mb-4'>As the studio owner, I oversee all aspects of the studio's operations, including creative direction, team management, and strategic planning.</p>

            </div>
        </section>
    )
}

export default Workplaces
