$(function () {
  $.confirm({
    title: "",
    content: `
        <div id="featurepopup">
            <div class="row text-center">
                <div class="col-md-3">
                    <i class="icon-github-circled featureicon"></i>
                    <div class="summary">
                        Free & Open source
                        <a class="github-button" href="https://github.com/NaturalIntelligence/imglab" data-size="large" data-show-count="true" aria-label="Star NaturalIntelligence/imglab on GitHub">Star</a>
                    </div>
                </div>
                <div class="col-md-3">
                    <i class="icon-user-secret featureicon"></i>
                    <div class="summary">Your images and data are safe, they are saved locally</div>
                </div>
                <div class="col-md-3">
                    <i class="icon-object-group featureicon"></i>
                    <div class="summary">Multiple label types: point, circle, boundary box, polygon</div>
                </div>
                <div class="col-md-3">
                    <i class="icon-laptop featureicon"></i>
                    <div class="summary">Basic IDE features: zoom in/out, light, move, image thumbnails, drag ...</div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-3">
                    <i class="icon-mouse-pointer featureicon"></i>
                    <div class="summary">1 click face landmarking</div>
                </div>
                <div class="col-md-3">
                    <i class="icon-firefox featureicon"></i>
                    <div class="summary">No installation, works in your browser</div>
                </div>
                <div class="col-md-3">
                    <i class="icon-doc-text featureicon"></i>
                    <div class="summary">Multiple supported formats: dlib XML, dlib pts, Pascal VOC, COCO ..</div>
                </div>
                <div class="col-md-3">
                    <div class="featureicon">
                        <img src="img/icons/Offline_logo.svg" width="96px" />
                    </div>
                    <div  class="summary">Works offline</div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-3">
                    <i class="icon-tags featureicon"></i>
                    <div class="summary">Multiple label types including name, category, tags</div>
                </div>
                <div class="col-md-3">
                    <i class="icon-emo-thumbsup featureicon"></i>
                    <div class="summary">Better user experience with features like autofill, hotkeys, cut & paste labels...</div>
                </div>
                <div class="col-md-3">
                    <i class="icon-globe featureicon"></i>
                    <div class="summary">Trusted by users from 45+ countries</div>
                </div>
                <div class="col-md-3">
                <i class="icon-picture featureicon"></i>
                    <div  class="summary">0.5 millions images annotated monthly</div>
                </div>
            </div>
        </div>
        `,
    escapeKey: true,
    backgroundDismiss: true,
    useBootstrap: false,
    boxWidth: 900,
    buttons: {
      confirm: {
        text: "Donate",
        action: function () {
          displayDonationPrompt();
        },
      },
      leave: {
        text: "Umm, maybe next time!",
      },
    },
  });
});

function displayDonationPrompt() {
  $.dialog({
    title: "Donate",
    content: `<div style="text-align:center;">
                <div>
                    <div onclick="javascript:tezpayment()" class="chip" style="cursor: pointer;">
                        <img src="img/tez_logo2.png" alt="Tez" width="95" height="95"> Tez
                    </div>
                </div>
                <br>
                <div><a onclick="javascript:logPaypal()" href="https://www.paypal.me/amitkumarguptagwl" target="_blank"><img src="img/support_paypal.svg" width="200px"></a></div>
                <br>
                <div><a onclick=""javascript:logPateron()" href="https://www.patreon.com/bePatron?u=9531404"  target="_blank"><img src="img/support_patreon.svg" width="200px"></a></div>
            <div>`,
    escapeKey: true,
    backgroundDismiss: true,
  });
}

function tezpayment() {
  $.dialog({
    title: "Tez Payment",
    content:
      "<p>Please scan the below QR code or use UPI : amitgupta.gwl@oksbi</p>" +
      '<img src="img/tez_qrcode.png">',
  });
  gtag("event", "click", {
    event_category: "outbound",
    event_label: "tez",
    transport_type: "beacon",
  });
}

function logPaypal() {
  gtag("event", "click", {
    event_category: "outbound",
    event_label: "paypal",
    transport_type: "beacon",
  });
}

function logPateron() {
  gtag("event", "click", {
    event_category: "outbound",
    event_label: "patreon",
    transport_type: "beacon",
  });
}
