import {useMemo} from 'react';
import {useCategoriesServiceGetCategories} from 'api/openapi/queries';
import {normalizeCategories} from 'models';

const useCategories = () => {
  const {data} = useCategoriesServiceGetCategories();

  const categories = useMemo(
    () => normalizeCategories(data?.data ?? []),
    [data],
  );

  return {
    categories,
  };
};

export default useCategories;
