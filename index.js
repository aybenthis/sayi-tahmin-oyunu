function tahminEt(mod, tahmin) {
  let ustSinir;
  if (mod === 'kolay') {
    ustSinir = 3;
  } else if (mod === 'orta') {
    ustSinir = 5;
  } else if (mod === 'zor') {
    ustSinir = 7;
  } else {
    console.log("Geçersiz mod. 'kolay', 'orta' veya 'zor' seçmelisiniz.");
    return;
  }

  if (tahmin < 0 || tahmin >= ustSinir) {
    console.log('0-' + (ustSinir - 1) + ' aralığında bir tahmin yapmalısın.');
    return;
  }

  const bilgisayarTahmini = Math.floor(Math.random() * ustSinir);

  if (tahmin === bilgisayarTahmini) {
    console.log('Kazandın!');
  } else {
    console.log(
      'Kaybettin: (kullanıcı: ' +
        tahmin +
        ', bilgisayar: ' +
        bilgisayarTahmini +
        ')'
    );
  }
}
