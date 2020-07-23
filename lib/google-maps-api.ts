const autocompleteService =
  typeof window === "object" &&
  new window.google.maps.places.AutocompleteService();

interface GoogleLocation {
  placeId: string;
  name: string;
}

export const googleMapsApi = {
  getCities: (search: string): Promise<GoogleLocation[]> => {
    return new Promise((resolve) => {
      autocompleteService.getPlacePredictions(
        { input: search, types: ["(cities)"] },
        (result: any, status: string) => {
          if (status === "OK") {
            resolve(
              result.map((l: any) => ({
                ...l,
                placeId: l.place_id,
                name: l.description,
              }))
            );
          } else {
            resolve([]);
          }
        }
      );
    });
  },
};
