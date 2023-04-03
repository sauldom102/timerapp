import React, {useCallback, useMemo, useState} from 'react';
import RefreshControl from 'components/RefreshControl';
import {device} from 'theme/device';
import useDebounce from './useDebounce';

type Params = {
  onRefresh?: () => Promise<any>;
};

const useRefreshControl = ({onRefresh}: Params) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    if (!onRefresh) {
      return;
    }

    try {
      setRefreshing(true);
      await onRefresh();
    } finally {
      setRefreshing(false);
    }
  }, [onRefresh]);

  const debouncedRefreshing = useDebounce({
    value: refreshing,
    delay: 1000,
    notDelayIf: true,
  });

  const refreshControl = useMemo(
    () =>
      onRefresh ? (
        <RefreshControl
          refreshing={debouncedRefreshing}
          onRefresh={handleRefresh}
        />
      ) : undefined,
    [debouncedRefreshing, onRefresh, handleRefresh],
  );

  const extraProps = useMemo(
    () => ({
      ...(device.isAndroid
        ? {
            onRefresh: handleRefresh,
            refreshing: debouncedRefreshing,
          }
        : {
            refreshControl,
          }),
    }),
    [handleRefresh, debouncedRefreshing, refreshControl],
  );

  return extraProps;
};

export default useRefreshControl;
