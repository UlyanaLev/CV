import './Download.css';
import { useTranslation } from 'react-i18next';

function Download() {
    const { t } = useTranslation();

    const downloadResume = t('downloadResume');
    const downloadResumeRussian = t('downloadResumeRussian');
    const downloadResumeEnglish = t('downloadResumeEnglish');

    const handleDownload = (language: any) => {
        const fileName = language === 'russian' ? 'resume_ru.pdf' : 'resume_en.pdf';
        const link = document.createElement('a');
        link.href = fileName;
        link.download = fileName;
        link.click();
    };

    return (
        <div className='download'>
            <div className='download-wrapper'>
                <h2 className='download-title'>{downloadResume}</h2>
                <button 
                    className='download-button' 
                    onClick={() => handleDownload('russian')}
                >
                    {downloadResumeRussian}
                </button>
                <button 
                    className='download-button' 
                    onClick={() => handleDownload('english')}
                >
                    {downloadResumeEnglish}
                </button>
            </div>
        </div>
    );
}

export default Download;
