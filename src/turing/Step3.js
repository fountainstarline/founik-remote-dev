const Step3 = () => {
    document.title = 'Feedack sent';

    return(
        <main className="
        fixed top-0 left-0 w-full h-full mx-auto py-12 px-4 font-gordita space-y-8
        grid place-content-center
        ">
            <div className="text-center space-y-2">
                <span className="text-2xl">📧</span>
                <h1 className="font-bold text-xl font-gordita-bold">Thanks for you feedback</h1>
                <p className="text-sm text-gray-400">We would respond to you soon...</p>
            </div>
        </main>
    );
}

export default Step3;