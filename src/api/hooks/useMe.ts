import {useEffect, useMemo} from 'react';
import {useUserServiceGetUser} from 'api/openapi/queries';
import {normalizeMe} from 'models/Me';
import {setOnboarded} from 'storage';

const useMe = () => {
  const {data} = useUserServiceGetUser();

  const me = useMemo(
    () => (data?.data ? normalizeMe(data?.data) : undefined),
    [data],
  );

  const onboarded = me?.onboarded;

  useEffect(() => {
    setOnboarded(onboarded);
  }, [onboarded]);

  return {
    me,
  };
};

export default useMe;
