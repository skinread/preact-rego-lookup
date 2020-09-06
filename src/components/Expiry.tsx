import { h } from 'preact';
import { Registration } from '../types';
import dayjs from 'dayjs';

interface Props {
  rego: Registration;
}

export default function Expiry({ rego }: Props) {
  const { expired, expiry_date } = rego;
  const date: string = dayjs(expiry_date).format('DD MMMM YY');

  return (
    expired ?
      <span class="expiry expiry--expired">Expired {date}</span> :
      <span class="expiry">Expires: {date}</span>
  );
}