$(document).ready(function () {
  let name = $(".wt-h1");
  let text = $(".wt-p");
  let canvas = $(".canv");
  canvas.fadeToggle(0);
  $(".wiki-btn").click(function () {
    canvas.toggleClass("hidden");
    canvas.fadeToggle(500);
  });
  $(".wlc-img").click(function () {
    canvas.toggleClass("hidden");
    canvas.fadeToggle(500);
  });
  $(".ok").click(function () {
    $(".disc-cont").fadeOut(5000);
    $(".ok").addClass("add");
    $(".disc-cont").addClass("white");
    $(".ok").addClass("white");
  });

  $(".WT1").click(function () {
    name.html("Сюжет");
    text.html(
      "МИР ПРОЦВЕТАЕТ ВО ВРЕМЕНА ВЕЛИКОЙ ЭРЫ ПИРАТОВ, ГДЕ ПРОИСХОДИТ СРАЖЕНИЕ МЕЖДУ ПРАВИТЕЛЬСТВОМ И ПИРАТАМИ. СЮЖЕТ НАМ РАССКАЗЫВАЕТ О ПРИКЛЮЧЕНИЯХ МУГИВАРЫ ЛУФФИ, ЧЕЛОВЕКА С ЖЕЛАНИЕМ СТАТЬ КОРОЛЁМ ВСЕХ ПИРАТОВ. ПУТЕШЕСТВУЯ ПО МИРУ, ОН НАБИРАЕТ КОМАНДУ ИЗ СИЛЬНЫХ ЛЮДЕЙ И УЧАВСТВУЕТ СРАЖЕНИЯХ, УВЕЛИЧИВАЯ СТОИМОСТЬ ЗА ГОЛОВЫ ЕГО ДРУЗЕЙ. КРОМЕ ЭТОГО, СЮЖЕТ КРУТИТЬСЯ ВОКРУГ МИСТИЧЕСКИЙ ВЕЩЕЙ: РЫБОЛЮДЕЙ, ЗОМБИ, ВОЛШЕБНЫЕ ФРУКТЫ И МНОГО ДРУГОГО. ВАН ПИС ПОНРАВИТЬСЯ ЛЮБИТЕЛЯМ: ПРИКЛЮЧЕНИЙ, КОМЕДИИ, БОЕВИКОВ, ФЭНТЕЗИ, ФАНТАСТИКИ И ДРАМЫ. ПУТЕШЕСТВУЙТЕ С ЛУФФИ И ЕГО КОМАНДОЙ ПО ВСЕМ МОРЯМ!"
    );
  });
  $(".WT2").click(function () {
    name.html("Магические Способности");
    text.html(
      "Хэй! Приветик смотрящий. Наверняка ты думал что тут тоже что-то будет, но это просто было для показа. Дальше мои ручонки уже не могут. Поэтому..."
    );
  });
  $(".WT3").click(function () {
    name.html("Мугивары");
    text.html("Прости <sm>:(</sm>");
  });
  $(".WT4").click(function () {
    name.html("Листовки Мугивар");
    text.html("Sorry <sm>:(</sm>");
  });
  $(".WT5").click(function () {
    name.html("Детство Персонажей");
    text.html("Кешiр <sm>:(</sm>");
  });
  $(".WT6").click(function () {
    name.html("Флот Мугивар");
    text.html("Perdon <sm>:(</sm>");
  });
});
