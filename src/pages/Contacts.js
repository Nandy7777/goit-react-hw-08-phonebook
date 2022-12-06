import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import  ContactList  from 'components/ContactList';
import { fetchContacts } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
import Filter from 'components/Filter';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
