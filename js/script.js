document.addEventListener('DOMContentLoaded', function () {
  // 测试环境
  // const apiBaseUrl = 'https://test-api.shorttv.live'
  // const h5PayUrl = 'https://shorttv-h5-test.s3.amazonaws.com/project/h5_pay_test/index.html#/pay'

  // 灰度环境
  // const apiBaseUrl = 'https://api.shorttv.live'
  // const h5PayUrl = 'https://shorttv-h5-test.s3.amazonaws.com/project/h5_pay_hd/index.html#/pay'

  // 正式环境
  const apiBaseUrl = 'https://api.shorttv.live'
  const h5PayUrl = 'https://more.shorttv.live/#/pay'

  const iosDownloadLink = 'https://apps.apple.com/us/app/shorttv-watch-dramas-shows/id6464002625'; // 替换为iOS下载链接
  const androidDownloadLink = 'https://play.google.com/store/apps/details?id=live.shorttv.apps'; // 替换为Android下载链接

  const downloadButtons = document.querySelectorAll('.mobile-button');

  downloadButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      const os = getMobileOperatingSystem();

      if (os === 'iOS') {
        window.open(iosDownloadLink, '_blank');
      } else if (os === 'Android') {
        window.open(androidDownloadLink, '_blank');
      }
    });
  });

  function getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android|win/i.test(userAgent.toLowerCase()) || userAgent.indexOf('Adr') > -1) {
      return 'Android';
    }

    if (/ios|iphone|ipad|ipod|mac/.test(userAgent.toLowerCase()) && !window.MSStream) {
      return 'iOS';
    }
    
    return 'unknown';
  }

  const shortTVLink = document.querySelector('.nav a[href="#content2"]');
  const aboutUsLink = document.querySelector('.nav a[href="#content3"]');
  const downloadLink = document.querySelector('.nav a[href="#download"]');
  const content2 = document.getElementById('content2');
  const content3 = document.getElementById('content3');
  const download = document.getElementById('download');
  const paymentDom = document.getElementById('paymentDom');

  shortTVLink.addEventListener('click', function (event) {
    event.preventDefault();
    content2.scrollIntoView({ behavior: 'smooth' });
  });

  aboutUsLink.addEventListener('click', function (event) {
    event.preventDefault();
    content3.scrollIntoView({ behavior: 'smooth' });
  });

  downloadLink.addEventListener('click', function (event) {
    event.preventDefault();
    download.scrollIntoView({ behavior: 'smooth' });
  });

  paymentDom.addEventListener('click', function (event) {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const userCode = urlParams.get('userCode')
    // 用户点击官网上方的支付入口banner时上报，用户若有UID等信息也要同时回传
    reportDataEvent(userCode, 'official_web_banner_click')
  });
  function guid1() {
    function SS4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (SS4() + SS4() + "-" + SS4() + "-" + SS4() + "-" + SS4() + "-" + SS4() + SS4() + SS4());
  };
  const startNowStr = (new Date().getTime()).toString();
  function getDeviceId() {
    try {
      if (navigator.cookieEnabled && typeof window.localStorage !== 'undefined') {
        if (window.localStorage.getItem('visitorId')) {
          window.visitorId = window.localStorage.getItem('visitorId');
        } else {
          try {
            const new_cid = guid1() + '_' + startNowStr;
            window.localStorage.setItem('visitorId', new_cid);
            window.visitorId = new_cid;
          } catch (error) {
            window.visitorId = guid1() + '_' + startNowStr;
          }
        }
      } else {
        window.visitorId = guid1() + '_' + startNowStr;
      }
    } catch (error) {
      window.visitorId = guid1() + '_' + startNowStr;
    }
  };

  function init() {
    getDeviceId()
    const urlParams = new URLSearchParams(window.location.search);
    const userCode = urlParams.get('userCode')
    // 用户(有uid等信息情况下)从app点击进入官网上方时上报
    if (userCode) {
      reportDataEvent(userCode, 'official_web_banner_show')
    }
  }

  init()

  function reportDataEvent(userCode, eventName) {
    const time = new Date().getTime() + ''
    let eventExtra = window.location.search || ''
    const data = {
      uid: userCode,
      eventId: window.visitorId || guid1() + '_' + startNowStr,
      eventName,
      eventExtra: eventExtra.slice(1),
      appVersion: "1.7.2",
      checkTime: time,
      localTime: time,
      eventTime: time,
    }
    fetch(apiBaseUrl + '/app/eventController/appEventReportV1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'deviceid': window.visitorId,
        'clientPlatform': 'WEB',
      },
      body: JSON.stringify({ eventList: JSON.stringify([data]), localTimeLong: time })
    })
      .then(function (response) {
        return response.text(); // 获取服务器返回的文本内容
      })
      .then(function (data) {

      }).catch(function (err) {

      }).finally(() => {
        // 跳转到h5支付页
        if (eventName == 'official_web_banner_click') {
          const search = window.location.search
          window.location.href = h5PayUrl + search
        }
      });
  }
});
