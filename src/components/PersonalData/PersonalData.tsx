import './PersonalData.css';

function PersonalData() {

    return (
        <div className='personal_data'>
            <div className='personal-data_wrapper'>
                <h2 className='personal-data_title'>Personal data</h2>
                <div className='personal-data_text'>
                    <h3 className='personal-data-text_title'>Date of birth</h3>
                    <p className='personal-data-text_discription'>27.12.1998</p>
                </div>
                <div className='personal-data_text'>
                    <h3 className='personal-data-text_title'>Nationality</h3>
                    <p className='personal-data-text_discription'>Belarus</p>
                </div>
                <div className='personal-data_text'>
                    <h3 className='personal-data-text_title'>Family status</h3>
                    <p className='personal-data-text_discription'>Single</p>
                </div>
            </div>
        </div>
    );
}

export default PersonalData;