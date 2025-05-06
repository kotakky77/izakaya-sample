document.addEventListener('DOMContentLoaded', function() {
    // ウェブサイト全体の共通機能をここに記述します
    console.log('ウェブサイトが読み込まれました');
    
    // 予約フォームの処理（reservation.html用）
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('現在、予約システムは準備中です。お電話でのご予約をお願いいたします。');
        });
    }
});