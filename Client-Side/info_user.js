<!DOCTYPE html>
<html lang="el">
<head>
  <meta charset="UTF-8">
  <title>Πληροφορίες Χρήστη</title>
</head>
<body>
  <p>Ο κώδικας:</p>
  <ol>
    <li>χρησιμοποιεί Web APIs του browser (navigator, screen, window, Intl, document)</li>
    <li>συλλέγει στοιχεία για το σύστημα του χρήστη (π.χ. ανάλυση οθόνης, γλώσσα, GPU, timezone, CPU)</li>
    <li>τα εμφανίζει στη console ή στη σελίδα (DOM manipulation)</li>
  </ol>
  <script>
    async function getUserInfo() {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

      const userInfo = {
        // Στοιχεία Συστήματος
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        hardwareConcurrency: navigator.hardwareConcurrency || 'N/A', // Πυρήνες CPU
        deviceMemory: navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'N/A',
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        languages: navigator.languages,
        language: navigator.language,
        online: navigator.onLine,
        cookiesEnabled: navigator.cookieEnabled,
        referrer: document.referrer || 'Direct Access',

        // Δίκτυο
        connectionType: connection ? connection.effectiveType : 'N/A',
        downlink: connection ? connection.downlink + ' Mbps' : 'N/A',

        // Μνήμη και απόδοση
        maxTouchPoints: navigator.maxTouchPoints,
        gpu: getGraphicsInfo(),

        // Ημερομηνία & ώρα
        localDate: new Date().toLocaleString(),

        // 🔒 Εγκατεστημένα APIs (ενδεικτικά)
        geolocation: !!navigator.geolocation,
        bluetooth: !!navigator.bluetooth,
        clipboard: !!navigator.clipboard,
        mediaDevices: !!navigator.mediaDevices,
      };

      console.log("Πληροφορίες user:");
      console.table(userInfo);
    }

    function getGraphicsInfo() {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return 'Unknown';
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown GPU';
    }

    getUserInfo();
  </script>
</body>
</html>
