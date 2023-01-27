
$('.expert-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }
);

$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  }
);

// аккордеон Проблемы и решения

const problemsMarks = document.querySelectorAll('.problem-item__problem-desc');
problemsMarks.forEach((problem)=>{
  problem.addEventListener('click',(e)=>{
    e.target.classList.toggle('problem-item__problem-desc--open')
    e.target.closest('li').querySelector('.problem-item__problem-solution').classList.toggle('fully-hidden')
  })
})

// Часто задаваемые вопросы - ответ в отдельном блоке
const faqQuestions = document.querySelectorAll('.faq-question');
const targetAnswer = document.querySelector('.target-faq-answer');

faqQuestions.forEach((currentQuestion)=>{
  currentQuestion.addEventListener('click',(e)=>{

    if (currentQuestion.classList.contains('faq-question--open')) {
      targetAnswer.innerHTML = '';
      currentQuestion.classList.remove('faq-question--open');
    } else {
      faqQuestions.forEach(quest=>quest.classList.remove('faq-question--open'));
      currentQuestion.classList.add('faq-question--open');
      const currentAnswer = document.getElementById(`faq-answer-${currentQuestion.dataset.id}`);
      targetAnswer.innerHTML = currentAnswer.innerHTML;
    }
  })
})

// кнопка в футере - плавный скролл в начало
$('.footer__up-btn').on('click', ()=>{
  $('body, html').animate({
    scrollTop: 0}, 400)
})


// модальное окно
const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.header__connect-us');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const overlay = document.querySelector('.overlay');

modalOpenBtn.addEventListener('click',()=>{
  overlay.classList.remove('fully-hidden');
  modal.classList.remove('fully-hidden');
})

modalCloseBtn.addEventListener('click',()=>{
  overlay.classList.add('fully-hidden');
  modal.classList.add('fully-hidden');
})


// video
const video1 = document.querySelector('.look-video-1');
const video2 = document.querySelector('.look-video-2');
const video3 = document.querySelector('.look-video-3');
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');
const videoCloseBtn = document.querySelector('.video-close-btn');

video1.addEventListener('click',()=>{
  videoContainer.classList.remove('fully-hidden');
  video.setAttribute('src', "/videos/video-1.mp4");
  overlay.classList.remove('fully-hidden');
})

video2.addEventListener('click',()=>{
  videoContainer.classList.remove('fully-hidden');
  video.setAttribute('src', "/videos/video-2.mp4")
  overlay.classList.remove('fully-hidden');
})

video3.addEventListener('click',()=>{
  videoContainer.classList.remove('fully-hidden');
  video.setAttribute('src', "/videos/video-3.mp4")
  overlay.classList.remove('fully-hidden');
})

videoCloseBtn.addEventListener('click',()=>{
  //videoContainer.classList.add('fully-hidden');
  document.location.reload();
})

