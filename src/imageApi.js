const unsplashApiKey = 'KJhzv5Vpd8MiEgKe6RXSwNGKNlr9E6Q0sO1dSUZKUJI';

export async function fetchImage(query) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashApiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching image:', error);
        throw error;
    }
}

export async function fetchWeather(latitude, longitude) {
    try {
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        if (!weatherResponse.ok) {
            throw new Error(`Weather data not available for coordinates (${latitude}, ${longitude})`);
        }
        return await weatherResponse.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}
