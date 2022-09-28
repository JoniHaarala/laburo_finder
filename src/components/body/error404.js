import '../../page404.css'

const Error404 = () => {
    return (
        <section id="not-found">
            <div id="title">&bull; 404 Error Page &bull;</div>
            <div className="circles dark:bg-slate-800 dark:after:bg-slate-800">
                <p className="dark:text-slate-800">404<br />
                    <small>PAGE NOT FOUND</small>
                </p>
                <span className="circle big"></span>
                <span className="circle med"></span>
                <span className="circle small"></span>
            </div>
        </section>
    );
}

export default Error404;