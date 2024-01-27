// Определение функционального компонента WelcomeMassage
// eslint-disable-next-line react/prop-types
function WelcomeMessage({name}) {
    // Компонент возвращает JSX , который представляет собой HTML-разметку
    return <h1>Добро пожаловать на наш сайт, {name || "пользователь"}!</h1>;
}
// Экспорт компонента, чтобы его можно было использовать в других частях приложения
export default WelcomeMessage;