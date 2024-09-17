export function showImage(data, weatherData) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear previous images

    const imgElement = document.createElement('img');
    imgElement.src = data.urls.regular;
    imgElement.alt = data.alt_description || 'Photo from Unsplash';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'image-wrapper';

    const photographerNameDiv = document.createElement('div');
    photographerNameDiv.className = 'photographer-name';
    const photographerName = data.user.name || 'Unknown Photographer';
    photographerNameDiv.textContent = photographerName;

    imgWrapper.appendChild(imgElement);
    imgWrapper.appendChild(photographerNameDiv);
    imageContainer.appendChild(imgWrapper);

    let city = data.location?.city || 'Unknown city';
    const country = data.location?.country || 'Unknown country';
    const locationInfo = `<strong>Location:</strong> ${city}, ${country}`;
    imageContainer.innerHTML += `<p>${locationInfo}</p>`;

    if (weatherData?.current_weather) {
        const weatherInfo = `<strong>Current Weather in ${city}:</strong> ${weatherData.current_weather.temperature}°C`;
        imageContainer.innerHTML += `<p>${weatherInfo}</p>`;
    } else {
        imageContainer.innerHTML += '<p><strong>Weather:</strong> Could not fetch weather data.</p>';
    }
}

export function showError(message) {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<p id="error-message">${message}</p>`;
}

export function toggleLoading(isLoading) {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.style.display = isLoading ? 'block' : 'none';
}
