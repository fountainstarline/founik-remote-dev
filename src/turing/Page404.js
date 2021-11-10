const Page404 = () => {
    document.title = '404 Error';
    return(
        <main className="
            fixed top-0 left-0 w-full h-full mx-auto py-12 px-4 font-gordita space-y-8
            grid place-content-center
        ">
            <div className="text-center space-y-2">
                <span className="text-4xl">🔍</span>
                <h1 className="font-bold text-2xl font-gordita-bold">404 error</h1>
                <p className="text-sm text-gray-600">Page not found</p>
                <p className="font-flow max-w-xs text-gray-400">
                    This could be as a result of a broken link go back and try again...
                </p>
            </div>
        </main>
    );
}

export default Page404;