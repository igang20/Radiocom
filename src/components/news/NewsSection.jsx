import './NewsSection.css'
import NewsCard from './NewsCard/NewsCard'
export default function NewsSection() {
    return (
        <section className='news-section'>
            <div className='news-content'>
                <h1 className='news-heading'>Новости компании</h1>
                <div className='cards-section'>
                    <NewsCard /><NewsCard />
                </div>
            </div>
        </section>
    )
}