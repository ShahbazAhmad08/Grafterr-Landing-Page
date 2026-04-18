const randomDelay = () => 1000 + Math.floor(Math.random() * 500);

const fetchContent = async () => {
  const response = await fetch("/data/content.json");

  if (!response.ok) {
    throw new Error("Failed to load content");
  }

  return response.json();
};

const simulate = (callback) =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const data = await callback();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, randomDelay());
  });

export const fetchHeroContent = () =>
  simulate(async () => {
    const data = await fetchContent();
    return data.hero;
  });

export const fetchFeaturesContent = () =>
  simulate(async () => {
    const data = await fetchContent();
    return data.featuresSection;
  });

export const fetchNavigation = () =>
  simulate(async () => {
    const data = await fetchContent();
    return data.navigation;
  });