function calcPoints() {
  var g = $("#g").val();
  var a = $("#a").val();
  var fs = $("#fs").val();
  var fc = $("#fc").val();
  var ca = $("#ca").val();
  var cv = $("#cv").val();
  var gs = $("#gs").val();
  var dd = $("#dd").val();
  var dp = $("#dp").val();
  var gc = $("#gc").val();
  var win = $("#win").val();
  var pointText = $("#point");
  var point;

  var bcInitial = $("#bredcoinInitial").val();
  var metaPoint, variation, newBC;
  var variationText = $("#bredcoinVariation");
  var newBCText = $("#bredcoinNew");

  metaPoint = parseFloat(bcInitial) * 1.2 - parseFloat(bcInitial) / 2;
  metaPoint = parseFloat(metaPoint);

  point =
    3 * parseFloat(g) +
    1.5 * parseFloat(a) +
    0.5 * parseFloat(fs) +
    0.5 * parseFloat(dd) +
    4 * parseFloat(dp) -
    (0.5 * parseFloat(fc) +
      2 * parseFloat(ca) +
      5 * parseFloat(cv) +
      parseFloat(gs) +
      2 * parseFloat(gc)) +
    parseFloat(win);

  point = parseFloat(point);
  pointText.text(point);

  variation = point - metaPoint;

  if (variation != 0) {
    newBC = parseFloat(variation) * 0.5 + parseFloat(bcInitial);
  } else {
    newBC = parseFloat(bcInitial);
  }

  variationText.val(parseFloat(variation) * 0.5);
  newBCText.val(newBC);

  console.log("Gols: " + g);
  console.log("Assistência: " + a);
  console.log("Faltas Sofridas: " + fs);
  console.log("Faltas Cometidas: " + fc);
  console.log("Cartão Amarelo: " + ca);
  console.log("Cartão Vermelho: " + cv);
  console.log("Gols Sofridos: " + gs);
  console.log("Defesa Difícil: " + dd);
  console.log("Defesa de Penalti: " + dp);
  console.log("Gols Contra: " + gc);
  console.log("Vitória: " + win);
  console.log("Pontuação: " + point);
  console.log("Nova Pontuação: " + newBC);
}
