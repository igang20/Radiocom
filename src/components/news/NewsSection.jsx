import './NewsSection.css'
import NewsCard from './NewsCard/NewsCard'
export default function NewsSection() {
    return (
        <section className='news-section'>
            <div className='news-content'>
                <img src="/imgs/BcgReferences/Newspaper.svg" alt="Newspaper" className='bcg-img2' />
                <h1 className='news-heading'>Новости компании</h1>
                <div className='cards-section'>
                    <NewsCard /><NewsCard />
                </div>
            </div>
        </section>
    )
}