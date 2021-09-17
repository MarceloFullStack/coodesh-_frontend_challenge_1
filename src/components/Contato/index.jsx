export const Contato =  ({link = false}) => {
    return (
        <div>
            {link
                ? <a href='https://marcelo-portifolio-nextjs.vercel.app/' target='_blank' className="flex text-xl font-semibold">&lt;Marcelo<div className="text-blue-600">Developer</div>&#47;&gt; <p className='animate-pulse'>❤</p></a>
                : <div className="flex text-sm font-semibold">&lt;{process.env.NEXT_PUBLIC_USER}<div className="text-blue-600">Developer</div>&#47;&gt; <p className='animate-pulse'>❤</p></div>
            }
        </div>
    );
}


<div className="flex">
    <a href='https://marcelo-portifolio-nextjs.vercel.app/' target='_blank' className="flex text-xl font-semibold">&lt;Marcelo<div className="text-blue-600">Developer</div>&#47;&gt; <p className='animate-pulse'>❤</p></a>
</div>