importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA-M6hkzI9IPfgaDVWBD6E712GO85onKQQ",
  authDomain: "tds-notifications-9fc56.firebaseapp.com",
  projectId: "tds-notifications-9fc56",
  messagingSenderId: "775343258792",
  appId: "1:775343258792:web:145f08b58da349d830569d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/logo.png"
    }
  );
});