const HEADERS_TO_STRIP_LOWERCASE = [
  'content-security-policy',
  'x-frame-options',
];

chrome.webRequest.onHeadersReceived.addListener(
  details => ({
    responseHeaders: details.responseHeaders.filter(header =>
      !HEADERS_TO_STRIP_LOWERCASE.includes(header.name.toLowerCase()))
  }),
  {
    urls: ['<all_urls>']
  },
  ['blocking', 'responseHeaders', 'extraHeaders']);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.action)
  if (request.action === 'checkPanelLogin') {
    chrome.cookies.get({ url: "https://panel.foxynodes.com", name: "pterodactyl_session" }, function (cookie) {
      console.log(cookie)
      sendResponse({ loggedIn: !!cookie });
    });
    return true; // Needed to indicate that sendResponse will be called asynchronously
  }
});
