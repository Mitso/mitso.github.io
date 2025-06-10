import '../../public/style/css/pages.css';

interface Props {
    heading: string,
    hasArticles:boolean,
    centerText: boolean
}

export function Section({
    heading,
    hasArticles,
    centerText
}: Props) {
    return (
        <section className='page'>
            <div className={`
                content
                flex
                w-full
                ${centerText ? 'justify-center text-center' : 'justify-between'}
            `}>
                <aside className="intro w-1/3">
                    <figure className='pb-15'>
                        <h1 className="heading heading--primary">
                            {heading}
                        </h1>
                        <h3 className='heading--tertiary'>
                            A portfolio of previous projects that I have developed.
                        </h3>
                        <p className='paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </figure>
                    {/* <!--py['0.5em'] pr['3em'] pl['1.5em'] --> */}
                    <button className={`btn-primary py-[0.5em] ${centerText ? 'px-[1.5em]' : 'pr-[3em] pl-[1.5em]' }`}>
                        Read more
                    </button>
                </aside>
                {hasArticles ? 
                    <article className='articles w-1/3'>
                        <ul className='cards flex'>
                            <li className='cards__item'>
                                <h4 className='cards__title'>Project 1</h4>
                                <p className='cards__paragraph'>Dolore magna aliqua</p>
                            </li>
                            <li className='cards__item'>
                                <h4 className='cards__title'>Project 2</h4>
                                <p className='cards__paragraph'>Incididunt ut labore</p>
                            </li>
                            <li className='cards__item'>
                                <h4 className='cards__title'>Project 2</h4>
                                <p className='cards__paragraph'>Sed do eiusmod tempor</p>
                            </li>
                        </ul>
                    </article>
                    :
                    <p></p>
                }
            </div>
        </section>
    )
}