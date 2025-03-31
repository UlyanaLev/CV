import './Titles.css';

interface ITitles {
    content?: string;
    description?: string;
}

function Titles ({content, description}: ITitles) {

        return (  
            <>
                <section className='titles'>
                    <div className='container'>
                        <div className='title_text'>
                            <h1 className='title_personal-information'>{content}</h1>
                            <h2 className='title_speciality'>{description}</h2>
                        </div>
                    </div>
                </section>
            </>
        );
}

export default Titles;