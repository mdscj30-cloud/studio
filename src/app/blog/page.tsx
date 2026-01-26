
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

function BlogIndexPage() {
    const searchParams = new URLSearchParams(''); // dummy for server component
    const category = searchParams.get('category');
    if (category) {
        redirect(`/resources/blog?category=${category}`);
    }
    redirect('/resources/blog');
}


export default function BlogIndexPageSuspense() {
    return <Suspense><BlogIndexPage/></Suspense>
}
