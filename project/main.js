const links = document.querySelectorAll('.header-nav ul u > a');


links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transition = 'font-size 0.3s ease'; 
        link.style.fontSize = '120%'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.fontSize = '100%'; 
    });
});

const images = document.querySelectorAll('.socref ul a img');


images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transition = 'transform 0.3s ease'; 
        image.style.transform = 'scale(1.2)'; 
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; 
    });
});

const headerNameLink = document.querySelector('.header-name a');

// Добавляем обработчик события для ссылки
headerNameLink.addEventListener('mouseover', () => {
    headerNameLink.style.transition = 'font-size 0.3s ease'; // Добавляем плавный переход
    headerNameLink.style.fontSize = '120%'; // Увеличиваем размер текста при наведении
});

headerNameLink.addEventListener('mouseout', () => {
    headerNameLink.style.fontSize = '100%'; // Возвращаем обычный размер текста при уходе курсора
}); 

