function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
var lanarry = ["en","ko","kr","ja"];  //支持的语言

var $lang = getQueryString("lang");
if ($lang != undefined && $lang != "") {
    var lang = $lang.toLowerCase().split("_")[0];
}else{
    var lang = "en";
}

function setcontent(lan){
    if (lanarry.indexOf(lan) == -1) {
        document.querySelector("#content").innerHTML = data.en;
    }else{
        if (lan == "ko" || lan == "kr") {
            document.querySelector("#content").innerHTML = data.kr;
        }else{
            document.querySelector("#content").innerHTML = data[lan];
        }
    }
}

var data = {
    "en" : "<p class='title'>Privacy Policy</p>"+
        "<p>Protecting your privacy is important to us. We hope the following statement will help you understand how our app deals with the personal identifiable information ('PII') you may occasionally provide to us via Internet (the Google Play Platform).</p>"+
        "<p>Generally, we do not collect any PII from you when you download our Android applications. To be specific, we do not require the consumers to get registered before downloading the application, nor do we keep track of the consumers' visits of our application, we even don't have a Server to store such PII.</p>"+
        "<p><strong>Information we collect</strong>Cookies ( Webview browser cookies) - When you visit Forum service, we may send one or more cookies files with small amount of data that is commonly used an anonymous unique identifier to your mobile device that uniquely identifies your device  and allows the application to help you log in faster and enhance your navigation through the Forum. You can reset your web browser to refuse all cookies or to indicate when a cookie is being sent. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>"+
        "<p>Ads - Our app may use some providers to show ads. These Ads providers can uses cookies only to identifies your device (as described above), then show ads that are relevant to our app's kind. We don't share any user's data with Facebook or other parties (Verified by BBC & Privacy International).</p>"+
        "<p>Analytics - We use third party analytics tool, Google Analytics, to help us measure traffic and usage trends for the service. Google Analytics collects information such as how often users visit our services, what pages they visit when they do so, and what other pages they use prior to coming to our services. We use the information get from Google Analytics only to improve our services. </p>"+
        "<p>Log file - The only situation we may get access to your PII is when you personally decide to email us your feedback or to provide us with a bug log report. The PII we may get from you in that situation are strictly limited to your name, email address, device information, location Information and your survey response only.</p>"+
        "<p><strong>How we use your information</strong>In above situation, we guarantee that your PII will only be used for contacting you and improving our services. We will never use such information (e.g. your name and email address) for any other purposes, such as to further market our products, or to disclose your personal information to a third party for commercial gains.</p>"+
        "<p><strong>Contact us</strong>It should be noted that whether or not to send us your feedback or bug report is a completely voluntary initiative upon your own decision. If you have concern about your PII being misused, or if you want further information about our privacy policy and what it means, please feel free to email us at <span class='email'>cameras.ideas@gmail.com</span>, we will endeavor to provide clear answers to your questions in a timely manner.</p>",
    "kr" : "<p class='title'>개인 정보 정책</p>"+
        "<p>당신의 개인 정보를 보호하는 것은 우리에게 중요합니다. 다음의 설명을 통해  당신이 때때로 인터넷(구글 플레이 플랫폼)을 통해 우리에게 제공하는 개인적인 신원 정보(‘PII’)를 우리 어플리케이션이 어떻게 처리하는지에 대한 당신의 이해를 돕고자 합니다.</p>"+
        "<p>일반적으로, 우리는 당신이 우리의 안드로이드 어플리케이션을 다운로드 할 때 어떠한 PII도 수집하지 않습니다. 구체적으로는, 우리는 소비자에게 어플리케이션 다운로드 이전에 소비자들이 회원가입을 하도록 요구하지 않습니다. 또한 우리는 소비자의 우리 어플리케이션 방문 기록을 추적하지 않으며, 그러한 PII를 저장할 수 있는 서버 또한 갖고 있지 않습니다.</p>"+
        "<p>  <!-- <strong>Information we collect</strong> -->쿠키 정보 수집 (웹 브라우저 쿠키) - 당신이 커뮤니티 서비스를 이용할 때에, ㅇ리는 하나 또는 그 이상의 쿠키를 보냅니다. 어플리케이션이 로그인 속도를 빠르게 하고, 커뮤니티 내 당신의 이용 속도를 향상시킬 수 있도록 허용합니다. 당신은 쿠키 수집을 거부하기 위해, 또는 쿠키가 보내지는 때를 나타내기 위해 웹 브라우저를 리셋 할 수 있습니다. 만약 당신이 쿠키를 거부한다면, 우리의 일부 서비스를 이용할 수 없습니다.</p>"+
        "<p>광고 - 당사의 앱은 일부 제공업체를 사용해 광고를 표시할 수 있습니다. (위에서 기술한 바와 같이) 이 광고 제공업체는 귀하의 장치를 식별할 목적으로만 쿠키를 사용하고, 당사의 앱과 관련 있는 광고를 표시할 수 있습니다. 당사는 사용자의 데이터를 Facebook 또는 기타 파트너와 공유하지 않습니다(BBC 및 Privacy International의 검증을 받음).</p>"+
        "<p>분석- 우리는 제 3자 분석 툴로, 트래픽과 이용 트랜드를 측정하고자 구글 애널리틱스를 서비스를 위해 활용합니다. 구글 애널리틱스는 유저들이 우리 서비스를 얼마나 자주 방문하는지, 어떤 페이지를 방문하는지, 우리 서비스를 이용하기에 앞서 어떤 페이지를 이용하는지와 같은 정보를 수집합니다. 우리는 구글 애널리틱스를 통해 획득한 정보를 오직 우리의 서비스를 향상시키는 데에만 사용합니다.</p>"+
        "<p>헬스 키트 – 당신은 제 3자 서비스인 구글 핏으로부터, 어플로 건강 데이터를 수집하는 것을 허용할 수 있는 옵션을 갖고 있습니다. 우리에게 제 3자 정보에 접근할 수 있도록 허용함으로서, 당신의 app 경험을 극대화 할 수 있으며, 우리는 제 3자 정보를 개인 정보 정책을 준수하며 다룰 것입니다.</p>"+
        "<p>로그인 기록 – 우리가 당신의 PII에 접근하는 유일한 상황은 당신이 개인적으로 버그 로그 보고를 피드백 또는 제공할 때에만 이루어집니다. 우리가 이러한 상황에서 수집하는 PII는 당신의 이름, 이메일 주소, 장치 정보, 위치 정보 및 설문조사 응답에 국한됩니다.</p>"+
        "<p>우리가 위의 상황에서 당신의 정보를 어떻게 사용하는지에 관하여, 우리는 당신의 PII를 당신에게 연락하거나, 우리의 서비스를 향상시키는 목적을 위해서만 사용할 것을 보장합니다. 우리는 그러한 정보(예: 이름 또는 이메일 주소)를 우리 제품의 마케팅이나 당신의 정보를 제 3자에게 누설함으로서 금전적 이득을 취하는 등의 어떤 다른 목적을 위해서는 결코 사용하지 않을 것입니다. </p>"+
        "<p>연락해주세요  - 피드백 또는 버그 리포트를 보내는 것의 여부는 온전히 당신의 결정에 따릅니다. 만약 당신의 PII가 잘못 사용될까 우려하고 있거나, 당신이 우리의 개인정보 정책에 더욱 깊은 정보를 원한다면, 자유롭게 <span class='email'>cameras.ideas@gmail.com</span> 로 이메일을 보내주세요. 우리는 당신의 질문에 적시에 명확한 답변을 드릴 수 있도록 끝까지 노력하겠습니다.</p>",
    "ja" : "<p class='title'>プライバシーポリシー</p>"+
        "<p>お客様が弊社アプリをご利用になる際プライバシーを保護することは弊社にとって重要です。 このアプリのインターネット（Google Play Platform）を通して弊社に提供する可能性のある個人情報（'PII'）をどのように取り扱うかご説明いたします。</p>"+
        "<p>通常、弊社のアプリをダウンロードする際、お客様の個人情報は収集いたしません。 アプリをダウンロードする前にお客様の情報を登録することはなく、アプリをお客様が訪問したことを追跡するようなサーバもございません。</p>"+
        "<p><strong>情報収集について</strong>Cookies (Webview browser cookies) – フォーラムサービスにアクセスすると、一般的に使用される少量のデータを含む複数のCookieファイルをモバイルデバイスに送信し、お客様のデバイスを一意に識別し、迅速なログインとナビゲーションの向上をサポートします。なお、Webブラウザをリセットして、すべてのCookieを拒否したり、Cookieがいつ送信されているかを表示することもできます。しかし、弊社のCookieを拒否することを選択した場合、本サービスの一部を使用できない可能性があります。</p>"+
        "<p>広告 - 本アプリは一部のプロバイダを使用して広告を表示する場合があります。広告プロバイダはお客様のデバイスを特定する目的（上述の通り）でのみクッキーを使用し、本アプリの趣旨に関連性のある広告を表示いたします。弊社はユーザーの個人情報をFacebookやその他のパーティと共有することは一切ありません（BBCおよびPrivacy Internationalによる確認済み）。</p>"+
        "<p>アナリティクス - Googleでは、サードパーティのアナリティクスツール、Googleアナリティクスを使用しサービスのトラフィックと使用状況の傾向を測定しています。 Google アナリティクスでは、ユーザーが当社のサービスにアクセスする頻度やアクセスしたときにアクセスしたページ、弊社サービスにアクセスする前に使用していたその他のページなどの情報を収集します。 Google アナリティクスから取得した情報は、サービスの向上のためにのみ使用されます。</p>"+
        "<p>健康キット - Google Fitなどのサードパーティのサービスからアプリに健康データのインポートを許可するオプションもあります。また、お客様のサードパーティー情報へ弊社がアクセスすることを許可して頂いた場合、アプリを最大限に活用するサポートをいたします。なお、弊社はこちらのプライバシーポリシーに従って個人情報を取扱います。</p>"+
        "<p>ログファイル - 弊社がお客様の個人情報にアクセスできるのは、お客様が個人的に弊社へお客様のフィードバックを電子メールで送った場合、もしくは弊社へバグ報告をした場合のみとなります。その場合弊社がお客様から収集可能な個人情報は氏名、Eメールアドレス、デバイス情報、位置情報および調査回答だけに制限されています。</p>"+
        "<p>弊社がお客様の情報を上記のように使用するのは、お客様への連絡およびサービスの向上のためにのみ使用されることを保証いたします。 弊社は、そのような情報（氏名やEメールアドレス等）を、弊社の製品の販売、もしくはお客様の個人情報を商業上の利益のために第三者に開示するためなどの目的には使用致しません。</p>"+
        "<p>弊社へお客様のフィードバックやバグ報告をされた場合は、お客様ご自身でのご判断となりますのでご注意ください。個人情報の悪用ついてご不安な場合や弊社のプライバシーポリシーついてご不明な点がある場合は、<span class='email'>cameras.ideas@gmail.com</span>まで電子メールにてお気軽にお問い合わせください。</p>",
    "zh" : "<p class='title'></p>"+
        "<p></p>"+
        "<p></p>"+
        "<p><strong></strong></p>"+
        "<p><a href='https://m.facebook.com/ads/audience_network' title=''>https://m.facebook.com/ads/audience_network</a></p>"+
        "<p></p>"+
        "<p></p>"+
        "<p></p>"+
        "<p></p>"+
        "<p><span class='email'></span></p>",
}


setcontent(lang);




