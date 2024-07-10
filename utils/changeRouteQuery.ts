export const changeRouteQuery = (query: Record<string, any>) => {
  const route = useRoute();

  navigateTo({
    name: route.name!,
    params: route.params,
    query: {
      ...route.query,
      ...Object.entries(query).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {} as Record<string, any>,
      ),
    },
  });
};
