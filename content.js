let token = '';
const tokenElement = document.querySelector('meta[name="_token"]');
if (tokenElement) {
  token = tokenElement.getAttribute('content');
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getCSRFToken') {
    console.log(token)
    sendResponse({ token: token });
  }
});
