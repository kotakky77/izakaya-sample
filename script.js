document.addEventListener('DOMContentLoaded', function() {
    // ファビコンを動的に追加
    const addFavicon = () => {
        const head = document.querySelector('head');
        
        // icon要素の作成
        const iconLink = document.createElement('link');
        iconLink.rel = 'icon';
        iconLink.href = 'img/favicon.svg';
        iconLink.type = 'image/svg+xml';
        
        // shortcut icon要素の作成
        const shortcutIconLink = document.createElement('link');
        shortcutIconLink.rel = 'shortcut icon';
        shortcutIconLink.href = 'img/favicon.svg';
        shortcutIconLink.type = 'image/svg+xml';
        
        // head要素に追加
        head.appendChild(iconLink);
        head.appendChild(shortcutIconLink);
    };
    
    // ファビコンを追加
    addFavicon();
    
    // ウェブサイト全体の共通機能をここに記述します
    console.log('ウェブサイトが読み込まれました');
    
    // EmailJSの初期化
    // 注意: YOUR_USER_ID を実際のEmailJS User IDに置き換える必要があります
    emailjs.init("YOUR_USER_ID");
    
    // 予約フォームの処理（reservation.html用）
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 送信ボタンを無効化
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = '送信中...';
            
            // フォームデータを取得
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                tel: document.getElementById('tel').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                people: document.getElementById('people').value,
                request: document.getElementById('request').value
            };
            
            // EmailJSを使ってメール送信
            // 注意: SERVICE_ID と TEMPLATE_ID を実際のIDに置き換える必要があります
            emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
                to_email: "restaurant@example.com", // 予約を受信するメールアドレス
                from_name: formData.name,
                from_email: formData.email,
                tel: formData.tel,
                date: formData.date,
                time: formData.time,
                people: formData.people + "名",
                request: formData.request || "特になし"
            })
            .then(function(response) {
                console.log("メール送信成功:", response);
                alert("ご予約ありがとうございます。確認のメールをお送りしましたので、ご確認ください。");
                reservationForm.reset();
                
                // ボタンを元に戻す
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            })
            .catch(function(error) {
                console.error("メール送信エラー:", error);
                alert("申し訳ありませんが、予約の送信中にエラーが発生しました。お電話でのご予約をお願いいたします。");
                
                // ボタンを元に戻す
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
        });
    }
});