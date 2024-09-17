import { fetchImage, fetchWeather } from './imageApi.js';
import { showImage, showError, toggleLoading } from './domUpdater.js';

export function initEventListeners() {
    const searchImageBtn = document.getElementById('search-image-btn');
    const searchQueryInput = document.getElementById('search-query');

    searchImageBtn.addEventListener('click', handleSearch);
    searchQueryInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') handleSearch();
    });
}

async function handleSearch() {
    const searchQueryInput = document.getElementById('search-query');
    const query = searchQueryInput.value.trim();

    if (!query) {
        showError('Please enter a search query.');
        return;
    }

    try {
        toggleLoading(true);
        const data = await fetchImage(query);
        let weatherData = null;
        if (data.location?.position?.latitude && data.location?.position?.longitude) {
            weatherData = await fetchWeather(data.location.position.latitude, data.location.position.longitude);
        }
        showImage(data, weatherData);
    } catch (error) {
        showError(`Failed to load image. ${error.message}`);
    } finally {
        toggleLoading(false);
    }
}
