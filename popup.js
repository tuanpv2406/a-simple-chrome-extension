function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

function renderImage(imageData) {
    document.getElementById('image-wrap').href = imageData.url;
    document.getElementById('image').src = imageData.fixed_height_small_url;
}

async function getMeowUrl() {
    let url = 'https://api.giphy.com/v1/gifs/random?api_key=1v9ARkd9L2tGeG7YM1ZrXrcEVdemtiw2&tag=cat';
    let result = await fetch(url);
    let jsonResult = await result.json();
    return jsonResult.data;
}

document.addEventListener('DOMContentLoaded', async () => {
    renderStatus('Đang tìm meow ...');
    var imageData = await getMeowUrl();
    renderStatus('');
    renderImage(imageData);
});