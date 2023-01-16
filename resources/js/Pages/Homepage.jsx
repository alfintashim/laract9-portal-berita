import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
            {/* {props.news ? props.news.map((data, i) => {
                return(
                    <div key={i} className='p-4 m-2 bg-white text-black shadow-nd rounded-md'>
                        <p className='text-2xl'>{data.title}</p>
                        <p className='text-sm'>{data.description}</p>
                        <i>{data.category}</i>
                        <i>{data.author}</i>
                    </div>
                )
            }) : <p>Saat Ini Belum Ada Berita Tersedia</p>} */}

                <NewsLists news={props.news.data} />
            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}