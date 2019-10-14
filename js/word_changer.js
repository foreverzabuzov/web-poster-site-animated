var emotions1 = [
  "😖",
  "🤐",
  "🤕",
  "😩",
  "😰",
  "👿",
  "🤯",
  "💀"
]

function fadeInAndOut(divID, emotions1, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(emotions1[Math.floor(Math.random() * emotions1.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#emotion1', emotions1, 3000);

var text1 = [
  "апатия",
  "агония",
  "отторжение",
  "агрессия",
  "паника",
  "гнев",
  "депрессия",
  "враждебность"
]

function fadeInAndOut(divID, text1, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(text1[Math.floor(Math.random() * text1.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#text1', text1, 3000);

var emotions2 = [
  "😪",
  "🤥",
  "😢",
  "😨",
  "😰",
  "😤",
  "😶",
  "🤮"
]

function fadeInAndOut(divID, emotions2, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(emotions2[Math.floor(Math.random() * emotions2.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#emotion2', emotions2, 3000);

var text2 = [
  "разочарование",
  "подавленность",
  "сожаление",
  "настороженность",
  "беспокойство",
  "нервозность"
]

function fadeInAndOut(divID, text2, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(text2[Math.floor(Math.random() * text2.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#text2', text2, 3000);

var emotions3 = [
  "😐",
  "😲",
  "🤔",
  "🤨",
  "🙃",
  "🧐",
  "🙂",
  "😮"
]

function fadeInAndOut(divID, emotions3, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(emotions3[Math.floor(Math.random() * emotions3.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#emotion3', emotions3, 3000);

var text3 = [
  "любопытство",
  "восторжение",
  "удивление",
  "принятие",
  "определенность",
  "живость",
  "вера в лучшее",
  "эмпатия"
]

function fadeInAndOut(divID, text3, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(text3[Math.floor(Math.random() * text3.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#text3', text3, 3000);

var emotions4 = [
  "😌",
  "🤤",
  "😜",
  "😍",
  "😊",
  "🤩",
  "🤗",
  "😉"
]

function fadeInAndOut(divID, emotions4, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(emotions4[Math.floor(Math.random() * emotions4.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#emotion4', emotions4, 3000);

var text4 = [
  "уверенность",
  "любовь",
  "счастье",
  "удовлетворение",
  "вдохновение",
  "благодарность",
  "добро",
  "принятие",
  "радость"

]

function fadeInAndOut(divID, text4, interval) {
  setInterval(function () {
    $(divID).fadeOut('slow', function() {
      $(this).text(text4[Math.floor(Math.random() * text4.length)]);
      $(this).fadeIn('slow');
    });
  }, interval);
}

fadeInAndOut('#text4', text4, 3000);
