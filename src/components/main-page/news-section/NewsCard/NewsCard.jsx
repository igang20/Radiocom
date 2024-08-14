import "./NewsCard.css"

export default function NewsCard(props) {
    return (
        <div className="NewsCard">
            <p className="NewsDate">22.07.2024</p>

            <h3 className="NewsHeading">Плановые отключения
                <hr className="HeadigAccent" />
            </h3>

            <article className="NewsText">Информируем вас о предстоящем плановом отключении интернета, которое пройдет с [дата] по [дата] с [время] до [время]. Отключение необходимо для проведения технических работ по улучшению качества предоставляемых услуг.</article>

        </div>
    )

}