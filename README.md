<h1 align="center">WEB CALCULATOR <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien%20Monster.png" alt="Alien Monster" width="25" height="25" /></h1>
<p align="center"><img src="https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif" height="256"/></p>
<p align="center">Написан на HTML5, CSS, чистом JavaScript для ознакомления с языком</p>

<hr>

<h2><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien.png" alt="Alien" width="25" height="25" /> Новая система</h2>
<p>Осознанал, что я пытаюсь управлять логикой калькулятора через множество флагов (_zeroFirst, _action, _canDot и т. д.), что усложняет код и делает его хрупким, тяжело отслеживаемым и модернизируемым. Пришел к выводу, что нужно добавить состояния и избавиться от флагов:</p>
<ul>
  <li>Убраны лишние флаги (_zeroFirst, _action, _canDot, _dotRealy и другие)</li>
  <li>Добавлена система состояний (State Machine)</li>
  <li>Благодаря системе состояний убраны все оставшиеся баги с воспроизведением анимаций и другие</li>
  <li>Упрощена логика обработки ввода</li>
  <li>Сохранена вся анимация и стили</li>
  <li>Убран счетчик набранных символов. Теперь все вычисляется от общего рабочего пространства</li>
</ul>

<hr>

<h2><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Green%20Heart.png" alt="Green Heart" width="25" height="25" /> Ночная/Светлая тема. Новые кнопки</h2>
<p>Еще одно крупное обновление добавило возможность смены темы калькулятора на ночью и светлую по нажатии на кнопку. А так же добавлен новый функционал:</p>
<ul>
  <li>e</li>
  <li>µ</li>
  <li>sin</li>
  <li>deg</li>
</ul>
<img alight="center" src="https://github.com/AL0N92/webCalculator/blob/main/images/themesCalc.PNG">
